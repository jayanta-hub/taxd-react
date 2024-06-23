import { forwardRef, useCallback, useMemo } from "react";
import { Box, Button, Group, Text, rem } from "@mantine/core";
import { useForm } from "@mantine/form";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Address, MultiQ, BooleanMulti, GroupCheckbox } from "../index";
import { useAssessmentMutation } from "../../store/api";
import { SurveyProps, queObjProps } from "../../types";

const Survey = forwardRef(
  ({
    renderData,
    index,
    onBackClick,
    targetRef,
    renderDataLength,
    onNextClick,
  }: SurveyProps): JSX.Element => {
    const [assessment, { isLoading: loading }] = useAssessmentMutation();
    console.log("🚀 ~ assessment:", assessment);

    const regexValidation = (queObj: any, value: any) => {
      return new RegExp(queObj?.question?.validation?.regex).test(value)
        ? null
        : queObj?.question?.validation?.title;
    };
    const nestedQuestions = (
      validateObj: object,
      nestedQuestionObjects: any,
      question_key: string,
      type: string,
      sub_questions: any,
    ) => {
      nestedQuestionObjects.forEach((sub_q: any) => {
        if (sub_q?.questionObjects?.length > 0) {
          nestedQuestions(validateObj, sub_q?.questionObjects, question_key, type, sub_questions);
        }
        if (sub_q?.booleanQuestion) {
          // construct the parent with child level question validation object
          validateObj[question_key][sub_q?.booleanQuestion?.question?.question_key] = (
            values: any,
          ) => {
            return values === null || values === undefined
              ? sub_q?.booleanQuestion?.question?.errorMessage || "Required."
              : null;
          };
        } else {
          // construct the parent with child level question validation object

          validateObj[question_key][sub_q?.question?.question_key] = (value: any, values: any) => {
            if (type === "Boolean Multi") {
              return values[question_key][sub_questions?.[0]?.boolean_key]
                ? value
                  ? null
                  : sub_q?.question?.errorMessage || "Required."
                : null;
            }
            if (value?.length < 1 || !value) {
              return sub_q?.question?.errorMessage || "Required.";
            }

            return regexValidation(sub_q, value) || null;
          };
        }
      });
    };

    const subNestedQuestions = (
      validateObj: object,
      nestedQuestionObjects: any,
      question_key: string,
    ) => {
      nestedQuestionObjects.forEach((sub_q: any) => {
        if (sub_q?.questionObjects?.length > 0) {
          subNestedQuestions(validateObj, sub_q?.questionObjects, question_key);
        }
        validateObj[question_key][sub_q?.question?.question_key] = (value: any) => {
          if (sub_q?.question?.validation?.regex && (value?.length > 1 || value)) {
            return regexValidation(sub_q, value) || null;
          }
          return null;
        };
      });
    };
    //Construct Validate Object
    const constructValidateObject = useCallback(() => {
      const validateObj: object = {};

      // Early return if formData is empty or missing
      if (!renderData || ![renderData]?.length) {
        return validateObj;
      }
      [renderData].forEach((queObj: queObjProps) => {
        const {
          question: {
            questionObjects,
            required,
            question_key,
            errorMessage,
            type,
            sub_questions = null,
          },
        } = queObj;
        if (questionObjects?.length > 0) {
          if (required) {
            // construct the parent level question validation object

            validateObj[question_key] = {};
            nestedQuestions(validateObj, questionObjects, question_key, type, sub_questions);
          } else {
            // optional validation

            validateObj[question_key] = {};
            subNestedQuestions(validateObj, questionObjects, question_key);
          }
        } else if (required) {
          // construct the parent level Multi Choice / Boolean / Single Choice/ Muilt Boolean question validation object

          validateObj[question_key] = (values: any) => {
            if (values?.length < 1 || !values) {
              return errorMessage || "Required.";
            }
            return regexValidation(queObj, values) || null;
          };
        }
      });
      console.log("validateObj", validateObj);
      return validateObj;
    }, [renderData]);

    //Get Initial Form Data
    const getInitialFormData = useCallback(() => {
      const initialValues: object = {};
      [renderData]?.forEach((parent_q) => {
        // Create  Question Initial Value
        initialValues[parent_q?.question?.question_key] = parent_q?.answer ?? [];
      });
      return { initialValues };
    }, [renderData]);
    const form = useForm({
      ...getInitialFormData(),
      validate: constructValidateObject(),
      validateInputOnBlur: true,
    });
    console.log("form.values", form.values);
    console.log("form.errors", form.errors);
    async function handleSubmit(e: any) {
      console.log("lkmsdwedl", {
        question_key: renderData?.question?.question_key,
        answer: e[renderData?.question?.question_key],
      });
      // post api for submit form
      // await assessment({
      //   patch: {
      //     question_key: renderData?.question?.question_key,
      //     answer: e[renderData?.question?.question_key],
      //   },
      //   assessment_id: "f95ba433-2319-11ef-8e3d-0ae99b1edddc",
      //   assessment_type: "self-assessment",
      // });
      onNextClick();
    }
    /**
     * The function `formBuilder` in the provided TypeScript React code dynamically generates form fields
     * based on the data and index, allowing users to navigate through the form with Next and Back
     * buttons.
     * @param {any} field - The `field` parameter in the `getField` function represents an object
     * containing various properties related to a form field. These properties include:
     * @returns The `formBuilder` function is returning a dynamic form based on the data provided. It
     * maps over the `data` array at the `index` position and generates form fields based on the
     * properties of each item in the data array.
     */
    const formBuilder = useMemo(() => {
      function getField(field: any) {
        const { name, choices, type, question_key, questionObjects } = field;
        switch (type) {
          case "Multi Q":
            return <MultiQ key={question_key} renderItems={questionObjects} form={form} />;
          case "Phone":
            return (
              <PhoneInputWithCountrySelect
                key={question_key}
                style={{
                  width: "100%",
                }}
                placeholder="Enter phone number"
                value={form.values[question_key]}
                onChange={(e) => {
                  form.setFieldValue(question_key, e);
                }}
              />
            );
          case "Single Choice":
          case "Boolean":
          case "Multiple Choice":
            return (
              <GroupCheckbox
                key={question_key}
                id={question_key}
                form={form}
                renderItems={choices}
                handleSubmit={handleSubmit}
                type={type}
                multiSelect={type === "Multiple Choice" ? true : false}
              />
            );
          case "Address":
            return (
              <Address key={question_key} renderItems={questionObjects} type={type} form={form} />
            );
          case "Boolean Multi":
            return (
              <BooleanMulti
                key={question_key}
                renderItems={questionObjects}
                type={type}
                form={form}
                handleSubmit={handleSubmit}
                parent_question={question_key}
              />
            );

          case "linkText":
            return (
              <Button size="compact-xs" variant="transparent" onClick={() => {}}>
                {name}
              </Button>
            );

          default:
            return <></>;
        }
      }
      return (
        <Box ref={targetRef} w="80%" component="form" onSubmit={form.onSubmit(handleSubmit)} m={30}>
          <Group justify="space-between">
            <Text size="lg" ff="Inter|SemiBold" fw={700}>
              {renderData?.question?.question}
            </Text>
            {/* {renderData?.question?.required && (
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}>
                <Badge size="lg" color="red" variant="outline">
                  Require
                </Badge>
                <Badge size="lg" circle variant="outline">
                  ?
                </Badge>
              </Box>
            )} */}
          </Group>

          <div
            dangerouslySetInnerHTML={{
              __html: renderData?.question?.sub_text,
            }}
          />
          {form.errors && (
            <Text c="red" size="sm">
              {form.errors[renderData?.question?.question_key]}
            </Text>
          )}
          <Box
            display="flex"
            mt={rem(20)}
            mb={rem(20)}
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
            }}>
            {getField(renderData?.question)}
          </Box>
          <Box
            mt={2}
            style={{
              display: "flex",
              justifyContent: index > 0 ? "space-between" : "flex-end",
            }}>
            {index > 0 && (
              <Button
                radius={rem(50)}
                onClick={() => {
                  onBackClick();
                }}>
                Back
              </Button>
            )}
            <Button loading={loading} type="submit" radius={rem(50)}>
              {index === renderDataLength - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </Box>
      );
    }, [renderData, form, loading]);

    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        m={150}
        w="50%"
        // bg="#F8F9FA"
        mih={600}>
        {formBuilder || "No Element found"}
      </Box>
    );
  },
);

export default Survey;

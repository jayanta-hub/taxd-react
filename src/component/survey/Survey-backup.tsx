import { forwardRef, useCallback, useMemo } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Box, Button, Group, Text, rem } from "@mantine/core";
import { createFormContext } from "@mantine/form";
import GroupCheckbox from "../group-checkbox/GroupCheckbox";
import { useAssessmentMutation } from "../../store/api";
import MultiQ from "../multiQ/MultiQ";
import Address from "../address/Address";

const [FormProvider, useFormContext, useForm] = createFormContext();
const Survey = forwardRef(
  ({
    renderData,
    index,
    onBackClick,
    targetRef,
    renderDataLength,
    onNextClick,
  }: {
    renderDataLength: number;
    renderData: any;
    index: number;
    onBackClick: () => void;
    onNextClick: () => void;
    targetRef: any;
  }): JSX.Element => {
    const [assessment, { isLoading: loading }] = useAssessmentMutation();
    //Construct Validate Object
    // form for each question

    const constructValidateObject = useCallback(() => {
      const validateObj: { [key: string]: (values: any) => string | null } = {};
      // Early return if formData is empty or missing
      if (!renderData || ![renderData]?.length) {
        return validateObj;
      }
      const createValidationObject = (formData: any) => {
        [formData].forEach((queObj: any) => {
          if (queObj?.question?.questionObjects?.length > 0) {
            if (queObj?.question?.required) {
              queObj?.question?.questionObjects.forEach((sub_q: any) => {
                createValidationObject(sub_q);
              });
            } else {
              validateObj[queObj?.question?.question_key] = (values: any) => {
                if (values?.length < 1 || !values) {
                  return queObj?.question?.errorMessage || "Required.";
                }
                return new RegExp(queObj?.question?.validation?.regex).test(values)
                  ? null
                  : queObj?.question?.validation?.title;
              };
            }
          } else {
            validateObj[queObj?.question?.question_key] = (values: any) => {
              if (values?.length < 1 || !values) {
                return queObj?.question?.errorMessage || "Required.";
              }
              return new RegExp(queObj?.question?.validation?.regex).test(values)
                ? null
                : queObj?.question?.validation?.title;
            };
          }
        });
      };
      createValidationObject(renderData);
      console.log("validateObj", validateObj);
      return validateObj;
    }, [renderData]);

    //Get Initial Form Data
    const getInitialFormData = useCallback(() => {
      const initialValues: any = {};
      const createInitialValue = (formData: any) => {
        [formData]?.forEach((parent_q) => {
          // Create  Question Initial Value
          if (parent_q?.question?.questionObjects?.length > 0) {
            parent_q?.question?.questionObjects.forEach((sub_q: any) => {
              initialValues[sub_q?.question?.question_key] = sub_q?.answer;
            });
          } else {
            initialValues[parent_q?.question?.question_key] =
              Object.keys(parent_q?.answer).length !== 0 ? parent_q?.answer : [];
          }
        });
      };
      createInitialValue(renderData);
      return { initialValues };
    }, [renderData]);
    const form = useForm({
      ...getInitialFormData(),
      validate: constructValidateObject(),
      validateInputOnBlur: true,
    });
    console.log("form", form);
    console.log("form.errors", form.errors);
    async function handleSubmit(e: any) {
      console.log("lkmsdwedl");
      // post api for sumit form
      await assessment({
        patch: {
          question_key: renderData?.question?.question_key,
          answer: e[renderData?.question?.question_key],
        },
        assessment_id: "f95ba433-2319-11ef-8e3d-0ae99b1edddc",
        assessment_type: "self-assessment",
      });
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
            return (
              <MultiQ
                key={question_key}
                renderItems={questionObjects}
                useFormContext={useFormContext}
                form={form}
              />
            );
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
                formData={form}
                renderItems={choices}
                handleSubmit={handleSubmit}
                type={type}
                useFormContext={useFormContext}
                multiSelect={
                  type === "Multiple Choice"
                    ? true
                    : type !== "Boolean"
                      ? false
                      : type !== "Single Choice"
                }
              />
            );
          case "Address":
            return (
              <Address
                key={question_key}
                renderItems={questionObjects}
                type={type}
                useFormContext={useFormContext}
                form={form}
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
      <FormProvider form={form}>
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
      </FormProvider>
    );
  },
);

export default Survey;

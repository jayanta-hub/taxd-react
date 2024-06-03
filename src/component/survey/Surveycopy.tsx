"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  NumberInput,
  Text,
  TextInput,
} from "@mantine/core";
import GroupCheckbox from "../groupCheckbox/GroupCheckbox";
import { isNotEmpty, useForm, yupResolver } from "@mantine/form";

const Surveycopy = ({ data }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const constructValidateObject = useCallback(() => {
    // const { schema, data } = config;
    let validateObj: any = {};

    [data[currentIndex]]?.forEach((d: any) => {
      const {
        question: { json_key, required, validate: {} = {} },
      } = d;
      if (required)
        validateObj[json_key] = (values: any) => {
          if (values?.length < 1 || !values) {
            return "Please select at least One items.";
          }

          return null;
        };
    });
    console.log("🚀 ~ constructValidateObject ~ validateObj:", validateObj);
    return validateObj;
  }, [currentIndex, data]);
  const getInitialFormData = useCallback(() => {
    console.log("gjgyguygu");
    const initialValues: any = {};
    [data[currentIndex]]?.forEach((d) => {
      initialValues[d?.question?.json_key] = d?.answer ?? "";
    });
    return { initialValues };
  }, [currentIndex, data]);
  // console.log("dads", getInitialFormData());
  const form = useForm({
    ...getInitialFormData(),
    validate: constructValidateObject(),
    validateInputOnBlur: true,
  });
  // console.log("first", form, form.errors[data[currentIndex].question.json_key]);

  function handleSubmit(e: any) {
    console.log("handleSubmit", e, currentIndex);
    currentIndex < data.length - 1 && setCurrentIndex(currentIndex + 1);
  }
  function onclickHandler(name: any) {
    // if (onClick) onClick(name);
  }
  const formBuilder = useMemo(() => {
    function getField(field: any) {
      const {
        id,
        name,
        label,
        required,
        element,
        value,
        placeholder,
        data,
        elementType,
        choices,
        type,
        json_key,
      } = field;
      // console.log("🚀 ~ getField ~ field:", field);
      const inputProps = {
        name,
        label,
        id: id ?? name,
        autoComplete: "off",
        style: { flex: 1 },
        data,
        withAsterisk: required ?? false,
        placeholder: placeholder ?? `Enter ${label?.toLowerCase()}`,
        // ...form?.getInputProps(name), // this accepts only input and checkbox
      };
      switch (elementType) {
        case "input":
          return <TextInput {...inputProps} defaultValue={value} />;

        case "number":
          return <NumberInput {...inputProps} defaultValue={value} />;

        case "checkbox":
          return <Checkbox checked={false} onChange={(event) => {}} />;
        case "groupCheckbox":
          return (
            <GroupCheckbox
              multiSelect={
                type === "MultipleChoice"
                  ? true
                  : type === "Boolean"
                  ? false
                  : true
              }
              key={json_key}
              renderItems={choices}
              onChecked={(e: any) => {
                form.setFieldValue(
                  json_key,
                  e.map((d: any) => d?.key)
                );
                console.log("sdcn ", e);
                // if (e[0]?.name === "No") {
                //   setTimeout(() => {
                //     setCurrentIndex((prev) => prev + 1);
                //   }, 700);
                // }
              }}
            />
          );

        case "linkText":
          return (
            <Button size="compact-xs" variant="transparent" onClick={(e) => {}}>
              {name}
            </Button>
          );
        default:
          return <>Element '{element}' not found</>;
      }
    }
    return [data[currentIndex]].map((item: any, ind: number) => (
      <>
        <Box
          key={ind}
          w="80%"
          component="form"
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <Text size="lg">{item?.question?.question}</Text>
          <div dangerouslySetInnerHTML={{ __html: item?.question?.sub_text }} />
          {form.errors && (
            <Text c="red" size="sm">
              {form.errors[item?.question?.json_key]}
            </Text>
          )}
          <Box
            display="flex"
            mt={2}
            mb={12}
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            {(item?.question?.type === "Boolean" ||
              item?.question?.type === "MultipleChoice") &&
              getField(item?.question)}
          </Box>
          <Box
            mt={2}
            style={{
              display: "flex",
              justifyContent: currentIndex > 0 ? "space-between" : "flex-end",
            }}
          >
            {currentIndex > 0 && (
              <Button
                onClick={() => {
                  currentIndex > 0 && setCurrentIndex(currentIndex - 1);
                }}
              >
                Back
              </Button>
            )}
            <Button
              type="submit"
              onClick={() => {
                // currentIndex < data.length - 1 &&
                //   setCurrentIndex(currentIndex + 1);
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </>
    ));
  }, [currentIndex, data, form.errors]);

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        m={10}
        w="50%"
        bg="#F8F9FA"
      >
        {formBuilder.length ? formBuilder : "No Element found"}
      </Box>
    </>
  );
};

export default Surveycopy;

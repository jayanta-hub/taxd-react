"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  NumberInput,
  Text,
  TextInput,
} from "@mantine/core";
import { surveyData } from "../../utility/surveyData";
import GroupCheckbox from "../GroupCheckbox/GroupCheckbox";

const Surveycopy = () => {
  const [renderData, setRenderData] = useState(
    surveyData?.data?.data?.categories?.Introduction?.questionFlow
  );
  const [currentIndex, setCurrentIndex] = useState(0);
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
      } = field;
      const inputProps = {
        name,
        label,
        id: id ?? name,
        autoComplete: "off",
        style: { flex: 1 },
        data,
        withAsterisk: required ?? false,
        placeholder: placeholder ?? `Enter ${label?.toLowerCase()}`,
        // ..._form?.getInputProps(name), // this accepts only input and checkbox
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
              renderItems={choices}
              onChecked={(e: any) => {
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
    return [renderData[currentIndex]].map((item: any, ind: number) => (
      <>
        <Box key={ind} w="80%">
          <Text size="lg">{item?.question?.question}</Text>
          <div dangerouslySetInnerHTML={{ __html: item?.question?.sub_text }} />
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
              onClick={() => {
                currentIndex < renderData.length - 1 &&
                  setCurrentIndex(currentIndex + 1);
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </>
    ));
  }, [currentIndex, renderData]);

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

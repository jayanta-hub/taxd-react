"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useMemo, useState } from "react";
// import { Box, Button, Typography } from '@mui/material';
// import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Button,
  Group,
  NumberInput,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { surveyData } from "../../utility/surveyData";
import CustomCard from "../CustomCard/CustomCard";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import Boolean from "../Boolean/Boolean";
// import FormBuilder from '../formBuilder/FormBuilder';

const Survey = () => {
  // const ref = useRef(true);
  const [renderData, setRenderData] = useState(
    surveyData?.data?.data?.categories?.Introduction?.questionFlow
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputElements = useMemo(() => {
    function getField(field: any, style: any, ind: number) {
      console.log("🚀 ~ getField ~ field:", field);
      const {
        id,
        name,
        label,
        required,
        element,
        value,
        placeholder,
        data,
        question,
      } = field;

      const inputProps = {
        name,
        label,
        tabIndex: ind,
        id: id ?? name,
        autoComplete: "off",
        style: { flex: 1, ...style },
        data,
        withAsterisk: required ?? false,
        placeholder: placeholder ?? `Enter ${label?.toLowerCase()}`,
        // ..._form?.getInputProps(name), // this accepts only input and checkbox
      };
      switch (question.type) {
        case "input":
          return <TextInput {...inputProps} defaultValue={value} />;

        case "number":
          return <NumberInput {...inputProps} defaultValue={value} />;

        case "MultipleChoice":
          return <Switch {...inputProps} defaultValue={value} />;

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

    return [renderData[currentIndex]].map((item: any, ind: number) => {
      // const { element, id, name, key } = item.content;
      return (
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
          // bg="pink"
        >
          {getField(item, item.style, ++ind)}
        </Box>
      );
    });
  }, [renderData]);
  const getForm = (props: any) => {
    console.log("🚀 ~ getForm ~ props:", props);
    switch (props?.type) {
      case "MultipleChoice":
        return (
          <>
            {props?.choices.map((item: any) => (
              <CustomCard {...item} key={item.key} />
            ))}
          </>
        );
      case "Boolean":
        return (
          <>
            {props?.choices.map((item: any) => (
              <CustomCard {...item} key={item.key} />
            ))}
          </>
        );
      default:
        break;
    }
  };

  useEffect(() => {
    // ref.current &&
    // setRenderData((pre) => [
    //   surveyData?.data?.data?.categories?.Introduction?.questionFlow,
    // ]);
    // ref.current = false;
  }, []);
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
        {[renderData[currentIndex]].map((item, ind) => (
          <>
            <Box key={ind} w="80%">
              <Text size="lg">{item?.question?.question}</Text>
              <div
                dangerouslySetInnerHTML={{ __html: item?.question?.sub_text }}
              />
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
                // bg="pink"
              >
                {getForm(item?.question)}
              </Box>
              {/* {inputElements.length ? <>{inputElements}</> : "Fields not found"} */}
              {/* <FormBuilder item={item?.question} /> */}
              <Box
                mt={2}
                style={{
                  display: "flex",
                  justifyContent:
                    currentIndex > 0 ? "space-between" : "flex-end",
                }}
                // display="flex"
                // justifyContent={currentIndex > 0 ? 'space-between' : 'flex-end'}
              >
                {currentIndex > 0 && (
                  <Button
                    // component="label"
                    // variant="contained"
                    onClick={() => {
                      currentIndex > 0 && setCurrentIndex(currentIndex - 1);
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  // component="label"
                  // variant="contained"
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
        ))}
      </Box>
    </>
  );
};

export default Survey;

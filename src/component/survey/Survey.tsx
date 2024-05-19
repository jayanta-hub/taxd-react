"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { Box, Button, Text } from "@mantine/core";
import { surveyData } from "../../utility/surveyData";
import CustomCard from "../CustomCard/CustomCard";

const Survey = () => {
  const [renderData, setRenderData] = useState(
    surveyData?.data?.data?.categories?.Introduction?.questionFlow
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const getForm = (props: any) => {
    switch (props?.type) {
      case "MultipleChoice":
        return (
          <>
            {props?.choices.map((item: any) => (
              <CustomCard
                {...item}
                key={item.key}
                onChecked={() => {
                  console.log("click");
                }}
              />
            ))}
          </>
        );
      case "Boolean":
        return (
          <>
            {props?.choices.map((item: any) => (
              <CustomCard
                {...item}
                key={item.key}
                onChecked={() => {
                  console.log("click");
                }}
              />
            ))}
          </>
        );
      default:
        break;
    }
  };

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
              <Box
                mt={2}
                style={{
                  display: "flex",
                  justifyContent:
                    currentIndex > 0 ? "space-between" : "flex-end",
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
        ))}
      </Box>
    </>
  );
};

export default Survey;

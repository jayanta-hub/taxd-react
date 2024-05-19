import { Box, Checkbox, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery, useHover } from "@mantine/hooks";
import React, { useState } from "react";

const GroupCheckbox = (props: any) => {
  console.log("🚀 ~ GroupCheckbox ~ props:", props);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [data, setData] = useState(props.renderItems);
  const onCheckedHandler = (item: any) => {
    const res = data.map((e: any) => {
      if (e?.key === item) {
        return { ...e, isChecked: !e?.isChecked };
      }
      return props?.multiSelect ? { ...e, isChecked: false } : e;
    });
    setData(res);
    props?.onChecked(res.filter((d: any) => d?.isChecked));
  };

  const CheckBox = ({ data }: any) => {
    const { hovered, ref } = useHover();
    return (
      <Box
        ref={ref}
        key={data?.key}
        p="xl"
        w={mobile ? "100%" : "48%"}
        component="div"
        style={{
          display: "flex",
          flexDirection: mobile ? "column-reverse" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          border:
            hovered || data?.isChecked ? "3px solid #339AF0" : "3px solid #FFF",
          borderRadius: "10px",
        }}
        bg="white"
        onClick={() => {
          onCheckedHandler(data?.key);
        }}
      >
        <Box component="div">
          <Text size="lg">{data?.name}</Text>
        </Box>
        <Box component="div">
          <Checkbox
            key={data?.key}
            checked={data?.isChecked}
            onChange={() => {
              onCheckedHandler(data?.key);
            }}
          />
        </Box>
      </Box>
    );
  };

  return data?.map((item: any) => {
    return <CheckBox data={item} />;
  });
};

export default GroupCheckbox;

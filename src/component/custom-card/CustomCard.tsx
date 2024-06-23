import { Box, Checkbox, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery, useHover } from "@mantine/hooks";
import { useState } from "react";

export default function CustomCard(props: any) {
  const { hovered, ref } = useHover();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [checked, setChecked] = useState(false);
  return (
    <Box
      p="xl"
      w={mobile ? "100%" : "48%"}
      ref={ref}
      component="div"
      style={{
        display: "flex",
        flexDirection: mobile ? "column-reverse" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: hovered || checked ? "3px solid #339AF0" : "3px solid #FFF",
        borderRadius: "10px",
      }}
      bg="white"
      onClick={() => {
        props?.onChecked(props.key);
        setChecked(!checked);
      }}>
      <Box component="div">
        <Text size="lg">{props?.name}</Text>
      </Box>
      <Box component="div">
        <Checkbox
          checked={checked}
          onChange={(event) => {
            setChecked(event.currentTarget.checked);
            props?.onChecked(props.key);
          }}
        />
      </Box>
    </Box>
  );
}

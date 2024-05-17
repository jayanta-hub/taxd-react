import { Box, Checkbox, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery, useHover } from "@mantine/hooks";
import { useState } from "react";
export default function CustomCard(props: any) {
  console.log("🚀 ~ CustomCard ~ props:", props);
  const { hovered, ref } = useHover();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [checked, setChecked] = useState(false);
  return (
    <Box
      p="xl"
      w={mobile ? "100%" : "45%"}
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
      onClick={() => setChecked(!checked)}
    >
      <Box component="div">
        <Text size="lg">{props?.name}</Text>
      </Box>
      <Box component="div">
        <Checkbox
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
        />
      </Box>
      {/* <Grid>
        <Grid.Col span={10}>fit content</Grid.Col>
        <Grid.Col span={2}>2</Grid.Col>
      </Grid> */}
      {/* <Text w={500} size="lg">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        Please click
      </Text> */}
    </Box>
  );
}

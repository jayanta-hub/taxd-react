import { Box, Checkbox, Text, rem, useMantineTheme } from "@mantine/core";
import { useMediaQuery, useHover } from "@mantine/hooks";
import { memo, useState } from "react";
// import { ReactComponent as Currenciesother } from "../../utility/icon/svgrepo.svg";

const BooleanMultiCheck = (props: any) => {
  console.log("🚀 ~ BooleanMultiCheck ~ props:", props?.multiSelect);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xl})`);
  const [data] = useState(props.renderItems);
  // const [svg, setSvg] = useState(null);

  // Get Icon from Icon this function

  // const getIcons = (iconName: string, hovered: boolean): any => {
  //   const style = {
  //     height: 60,
  //     width: 60,
  //     fill: hovered ? theme.colors.blue[6] : theme.colors.gray[6],
  //   };
  //   switch (iconName?.toLocaleLowerCase()) {
  //     case "currenciesother.svg".toLocaleLowerCase():
  //       return <Currenciesother style={style} />;
  //   }
  // };

  /**
   * The function `onCheckedHandler` toggles the `isChecked` property of an item in a list, updates the
   * list, and triggers additional actions based on the updated list.
   * @param {any} item - The `item` parameter in the `onCheckedHandler` function is an object that
   * represents an item being checked or unchecked. It likely has properties such as `key`, `isChecked`,
   * and `skip` based on how it is being used in the function.
   */

  // CheckBox component
  const CheckBox = ({ item }: any) => {
    const { hovered, ref } = useHover();
    return (
      <Box
        ref={ref}
        key={item?.key}
        p="lg"
        w={mobile ? "100%" : "28%"}
        style={{
          display: "flex",
          flexDirection: mobile ? "column-reverse" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: rem(130),
          border:
            hovered || props.form.values[props?.parent_question][props?.id]
              ? "3px solid #339AF0"
              : "3px solid #FFF",
          borderRadius: rem(12),
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12)",
        }}
        bg={theme.colors.white[0]}
        onClick={() => {
          props.form.setFieldValue(`${props.parent_question}.${props.id}`, item.value);
        }}>
        <Box
          w="100%"
          m={rem(5)}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          {/* <div dangerouslySetInnerHTML={{ __html: svg?.svg }} /> */}
          {/*<Box component="div">{getIcons(item?.icon, hovered)}</Box>*/}
          {/** impliment icon here */}
          {/* <Box component="div">
            <Text size="lg">{item?.name}</Text>
          </Box> */}
          <Box component="div">
            <Text size="lg">{item?.name}</Text>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignSelf: "stretch",
          }}>
          {/* {!item.skip ? ( */}
          <Checkbox
            key={item?.key}
            checked={props.form.values[props?.parent_question][props?.id] === item.value ?? false}
            onChange={() => {}}
            variant="outline"
          />
          {/* ) : (
            <Radio
              checked={props.form.values[props?.id]?.length > 0 ? props.form.values[props?.id].includes(item.key) : false}
              onChange={() => {}}
            />
          )} */}
        </Box>
      </Box>
    );
  };

  return data?.map((item: any, ind: number) => <CheckBox item={item} key={ind} />);
};

export default memo(BooleanMultiCheck);
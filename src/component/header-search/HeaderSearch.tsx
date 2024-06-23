import { useState } from "react";
import { useSelector } from "react-redux";
import { AppShell, Box, Burger, Group, ScrollArea, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useGetAssessmentQuery } from "../../store/api";
import Survey from "../survey/Survey";

export default function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure();
  const [backNext, setBackNext] = useState("next");
  useGetAssessmentQuery();
  const theme = useMantineTheme();
  const renderData =
    useSelector((state: any) => state?.userReducer?.assessmentList?.data?.categories) || [];
  console.log("🚀 ~ HeaderSearch ~ renderData:", Object.keys(renderData));
  const RenderItem = ({ item, ind }: { item: object; ind: number }) => {
    const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
      HTMLDivElement,
      HTMLDivElement
    >({
      isList: true,
      offset: backNext === "back" ? -700 : 1100,
    });

    const onScroll = (items: string) => {
      scrollIntoView({
        alignment: "end",
      });
      setBackNext(items);
    };
    return (
      <Survey
        ref={scrollableRef}
        key={ind}
        renderData={item}
        renderDataLength={renderData?.length}
        index={ind}
        targetRef={targetRef}
        onBackClick={() => onScroll("back")}
        onNextClick={() => onScroll("next")}
      />
    );
  };
  return (
    <AppShell
      navbar={{ width: 130, breakpoint: "sm", collapsed: { mobile: !opened } }}
      header={{ height: 60 }}>
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar m="sm">
        <ScrollArea w="100%" bg="red">
          {Object.keys(renderData).map((categories, index) => (
            <>
              <Text py={30} key={index}>
                {categories}
              </Text>
              <Text py={30} key={index}>
                {categories}
              </Text>
            </>
          ))}
        </ScrollArea>
      </AppShell.Navbar>
      <AppShell.Main>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          bg={theme.colors.white[1]}>
          {renderData?.Introduction?.questionFlow.map((item: object, index: number) => (
            <RenderItem item={item} ind={index} key={index} />
          ))}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

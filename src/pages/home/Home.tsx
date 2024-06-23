import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@mantine/core";
// import { useGetAssessmentQuery } from "../../store/api";

export default function Home(): JSX.Element {
  // useGetAssessmentQuery();
  const navigate = useNavigate();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>Home</Text>
      <Button onClick={() => navigate("/assessment")}>Assessment</Button>
    </Box>
  );
}

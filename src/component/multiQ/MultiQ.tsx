import { Group } from "@mantine/core";
import FormBuilder from "../form-builder/FormBuilder";

const MultiQ = (props: any) => {
  const { renderItems } = props;
  return (
    <Group w="100%">
      {renderItems?.map((field: any) => (
        <FormBuilder key={field?.question?.question_key} inputInfo={field} form={props.form} />
      ))}
    </Group>
  );
};

export default MultiQ;

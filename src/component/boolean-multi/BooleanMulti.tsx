import { Group, Text } from "@mantine/core";
import FormBuilder from "../form-builder/FormBuilder";
import BooleanMultiCheck from "./BooleanMultiCheck";

const BooleanMulti = ({ renderItems, form, parent_question }: any) => {
  const choicesData = [
    {
      key: `__${renderItems[0]?.booleanQuestion?.question?.question_key}_yes`,
      name: "Yes",
      value: true,
    },

    {
      key: `__${renderItems[0]?.booleanQuestion?.question?.question_key}_no`,
      name: "No",
      value: false,
    },
  ];
  return (
    <>
      {form.errors && (
        <Text c="red" size="sm">
          {
            form.errors[
              `${parent_question}.${renderItems[0]?.booleanQuestion?.question?.question_key}`
            ]
          }
        </Text>
      )}
      <Group w="100%">
        <BooleanMultiCheck
          id={renderItems[0]?.booleanQuestion?.question?.question_key}
          form={form}
          renderItems={choicesData}
          multiSelect={false}
          parent_question={parent_question}
        />
        {form.values[parent_question][renderItems[0]?.booleanQuestion?.question?.question_key] &&
          renderItems[0]?.questionObjects?.map((field: any) => (
            <FormBuilder key={field?.question?.question_key} inputInfo={field} form={form} />
          ))}
      </Group>
    </>
  );
};

export default BooleanMulti;

import { TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

const FormBuilder = ({ inputInfo, form }: any) => {
  const {
    question: { question_key, validation, question, type, placeholder, sub_text, parent_question },
  } = inputInfo;

  switch (type) {
    case "Free text":
    case "Postcode":
    case "UTR":
      return (
        <TextInput
          w="100%"
          value={form.values[parent_question][question_key]}
          label={question}
          description={sub_text ?? ""}
          placeholder={placeholder ?? ""}
          withAsterisk={inputInfo?.question?.required}
          {...form.getInputProps(`${parent_question}.${question_key}`)}
        />
      );

    case "Date":
      return (
        <DateInput
          w="100%"
          defaultValue={
            form.values[parent_question][question_key]
              ? new Date(form.values[parent_question][question_key])
              : null
          }
          valueFormat="DD/MM/YYYY"
          label={question}
          placeholder="Select a Date"
          minDate={validation?.minDate ? new Date(validation?.minDate) : null}
          maxDate={validation?.maxDate ? new Date(validation?.maxDate) : null}
          withAsterisk={inputInfo?.question?.required}
          value={
            form.values[parent_question][question_key]
              ? new Date(form.values[parent_question][question_key])
              : null
          }
          onChange={(date) => {
            form.setFieldValue(
              `${parent_question}.${question_key}`,
              date ? new Date(date).toISOString() : "",
            );
          }}
          error={form.errors[`${parent_question}.${question_key}`]}
        />
      );
    default:
      return <></>;
  }
};

export default FormBuilder;

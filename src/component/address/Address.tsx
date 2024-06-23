import { Box, Group } from "@mantine/core";
import FormBuilder from "../form-builder/FormBuilder";
import SearchableSelect from "../searchable-select/SearchableSelect";

const Address = ({ renderItems, form }: any) => {
  return (
    <Group>
      <Box w="100%">
        <SearchableSelect />
      </Box>
      {renderItems?.map((field: any) => (
        <FormBuilder key={field?.question?.question_key} inputInfo={field} form={form} />
      ))}
    </Group>
  );
};

export default Address;

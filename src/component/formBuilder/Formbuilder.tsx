import React from "react";
import {
  Box,
  Button,
  Fieldset,
  Group,
  Switch,
  TextInput,
  NativeSelect,
  NumberInput,
} from "@mantine/core";
import {
  isNotEmpty,
  joiResolver,
  matches,
  superstructResolver,
  useForm,
  yupResolver,
  zodResolver,
} from "@mantine/form";
import pkg from "../../../package.json";
import {
  ILoginForm,
  LoginFormConfig,
  LoginFormContent,
  LoginFormData,
} from "../../types/ILoginForm";
import { PATTERNS, mergeObjects } from "../helper";
const Formbuilder = (props: ILoginForm) => {
  const { config, apiConfig, getForm, style, formName, onClick } = props;
  console.log("🚀 ~ Formbuilder ~ config:", config);
  const fieldSetProps: any = {
    m: 0,
    variant: "default",
    legend: formName ?? "",
    // style,
  };

  const validators = {
    joi: joiResolver,
    yup: yupResolver,
    zod: zodResolver,
    superstruct: superstructResolver,
  };

  const _form = useForm({
    name: pkg.name.replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, "-"),
    ...getInitialFormData(),
    validate: constructValidateObject(),
    validateInputOnBlur: true,
  });
  function getInitialFormData() {
    const initialValues: any = {};
    config?.data?.forEach((d) => {
      // initialValues[d.content.name] = d.content.value ?? "";
    });

    return { initialValues };
  }
  function onclickHandler(name: any) {
    if (onClick) onClick(name);
  }
  const inputElements = React.useMemo(() => {
    function getField(field: LoginFormContent, style: any, ind: number) {
      const { id, name, label, required, element, value, placeholder, data } =
        field;

      const inputProps = {
        name,
        label,
        tabIndex: ind,
        id: id ?? name,
        autoComplete: "off",
        style: { flex: 1, ...style },
        data,
        withAsterisk: required ?? false,
        placeholder: placeholder ?? `Enter ${label?.toLowerCase()}`,
        ..._form?.getInputProps(name), // this accepts only input and checkbox
      };
      switch (element) {
        case "input":
          return <TextInput {...inputProps} defaultValue={value} />;

        case "number":
          return <NumberInput {...inputProps} defaultValue={value} />;

        case "switch":
          return <Switch {...inputProps} defaultValue={value} />;

        case "linkText":
          return (
            <Button
              size="compact-xs"
              variant="transparent"
              onClick={(e) => onclickHandler(id)}
            >
              {name}
            </Button>
          );
        default:
          return <>Element '{element}' not found</>;
      }
    }

    return config?.data.map((item: LoginFormData, ind: number) => {
      const { element, id, name, key } = item.content;
      return (
        <Group key={key ?? id ?? name ?? `${element}-${ind}`} mt="xs">
          {getField(item.content, item.style, ++ind)}
        </Group>
      );
    });
  }, [config?.data, _form]);

  function constructValidateObject() {
    const { schema, data } = config;
    let validateObj: any = {};

    if (schema) validateObj = validators[schema.type](schema.object);
    // schema.options ?? {}
    else {
      data?.forEach((d: LoginFormData) => {
        const {
          content: { label, required, name },
          validate: { pattern, errMessage } = {},
        } = d;

        if (required && !pattern)
          validateObj[name] = isNotEmpty(errMessage ?? `${label} required`);
        else if (pattern)
          validateObj[name] = matches(
            RegExp(pattern),
            errMessage ?? "Invalid pattern"
          );
      });
    }

    return validateObj;
  }

  function handleSubmit(data: any) {}

  React.useEffect(() => {
    // config.data = _getDefaultData(config);

    if (getForm) getForm(_form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_form]);

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={_form.onSubmit(handleSubmit)}
      style={{
        ...style,
        minHeight: config?.data.length * 80,
      }}
    >
      {/* Render all the inputs from the given data. */}
      {inputElements.length ? <>{inputElements}</> : "Fields not found"}

      {/* No fields check and implementation */}

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
};

export default Formbuilder;

function _getDefaultData(config: LoginFormConfig): LoginFormData[] {
  const defaultData: LoginFormData[] = [
    {
      content: {
        label: "Email",
        element: "input",
        name: "email",
        id: "email",
        value: "abc@def.com",
        placeholder: "you@apf.dev",
        required: true,
      },
      editable: true,
      display: "block",
      validate: {
        pattern: PATTERNS.EMAIL,
        // errMessage: "Email required",
      },
    },
    {
      content: {
        label: "Password",
        element: "input",
        required: true,
        name: "userpassword",
        value: "1234567890",
        id: "userpassword",
        placeholder: "Enter Password",
      },
      editable: true,
      display: "block",
      validate: {
        pattern: PATTERNS.PASSWORD,
        // errMessage: "Email required",
      },
    },
  ];

  return config.useDefaultData
    ? defaultData.map(
        (d, i) => mergeObjects(d, config.data[i]) as LoginFormData
      )
    : config.data;
}

function _noFieldsFound() {
  const noFieldsFound = {
    data: [
      {
        content: {
          label: "No Fields found",
          type: "label",
          htmlFor: "",
          link: "",
          name: "",
          id: "",
          value: "",
          placeholder: "",
          required: false,
          regex: "",
        },
        style: {
          width: "",
          height: "",
          objectFit: "",
          border: "",
          borderRadius: "",
        },
        editable: false,
        display: "block",
        validate: {
          pattern: "",
          errMessage: "",
        },
      },
    ],
  };

  return noFieldsFound;
}

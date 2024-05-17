import { MantineStyleProp } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { HTMLInputTypeAttribute } from "react";

export interface LoginFormContent {
  label?: string;
  element:
    | "input"
    | "number"
    | "switch"
    | "action"
    | "button"
    | "linkText"
    | "checkbox";
  htmlFor?: string;
  link?: string;
  name: string;
  id: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  key?: string;
  type?: HTMLInputTypeAttribute;
  data?: Array<string>;
}

export interface LoginFormStyle {
  width?: string;
  height?: string;
  objectFit?: string;
  border?: string;
  borderRadius?: string;
}

export interface LoginFormValidate {
  pattern?: string | RegExp;
  errMessage?: string;
}

export interface Schema {
  type: "joi" | "yup" | "zod" | "superstruct";
  object: any;
  options?: any;
}

export interface LoginFormData {
  content: LoginFormContent;
  style?: any; //LoginFormStyle;
  editable?: boolean;
  display?: string;
  validate?: LoginFormValidate;
}

export interface LoginFormAPIConfig {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  tranformPayload?: (payload: any) => any;
  onSuccess?: (payload: any) => void;
  onError?: (err: any) => void;
  onComplete?: (...args: any) => void;
}

export interface LoginFormConfig {
  useDefaultData?: boolean;
  data: LoginFormData[];
  schema?: Schema;
  onClick?: (name: string) => void;
}

export interface ILoginForm {
  config: LoginFormConfig;
  apiConfig?: LoginFormAPIConfig;
  getForm?: (form: UseFormReturnType<any>) => void;
  formName?: string;
  style?: MantineStyleProp;
  onClick?: (form: UseFormReturnType<any>) => void;
}

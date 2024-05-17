import { InputProps as CoreInputProps, InputWrapperProps } from "@mantine/core";
import { PolymorphicComponentProps } from "@mantine/core/lib/core/factory/create-polymorphic-component";

type InputProps<C> = PolymorphicComponentProps<C, CoreInputProps>;
// type component = "input" | "select";

export interface CustomInputTypes {
  wrapper?: InputWrapperProps,
  input?: CoreInputProps,
  // component?: component;
  // input?: InputProps<component>,
}

export type { InputProps, InputWrapperProps };
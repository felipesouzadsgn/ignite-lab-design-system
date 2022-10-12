import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextField, TextFieldRootProps } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField.Root,
  args: {
    children: [
      <TextField.Icon>
        <Envelope />
      </TextField.Icon>,
      <TextField.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {},
} as Meta<TextFieldRootProps>;

export const Default: StoryObj<TextFieldRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithoutIcon: StoryObj<TextFieldRootProps> = {
  args: {
    children: <TextField.Input placeholder="Type your e-mail address" />,
  },
};

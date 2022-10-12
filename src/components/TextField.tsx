import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextFieldRootProps {
  children: ReactNode;
}

function TextFieldRoot({ children }: TextFieldRootProps) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 h-12 bg-gray-800 w-full rounded focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

TextFieldRoot.displayName = "TextField.Root"

export interface TextFieldIconProps {
  children: ReactNode;
}

function TextFieldIcon({ children }: TextFieldIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextFieldIcon.displayName = "TextField.Icon"

export interface TextFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextFieldInput(props: TextFieldInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-xs outline-none text-gray-100 placeholder:text-gray-400"
      {...props}
    />
  );
}

TextFieldInput.displayName = "TextField.Input"


export const TextField = {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Icon: TextFieldIcon,
};

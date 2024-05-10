import { ReactNode } from "react";
import { FormControl, FormHelperText } from "@mui/material";

interface InputWrapperProps {
	type?: string;
	helperText?: string;
	invalid?: boolean;
	disabled?: boolean;
	children: ReactNode;
	id: string;
}

export const InputWrapper = ({
	helperText,
	id,
	type,
	invalid,
	disabled,
	children,
}: InputWrapperProps) => (
	<FormControl
		variant='outlined'
		component={type === "checkbox" ? "fieldset" : "div"}
		disabled={disabled}
		error={invalid}>
		{children}
		<FormHelperText title={helperText} id={id}>
			{helperText}
		</FormHelperText>
	</FormControl>
);

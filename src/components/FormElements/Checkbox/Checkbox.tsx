import { ChangeEvent } from "react";
import { InputWrapper } from "components/Wrappers";
import {
	CheckMark,
	CheckContainer,
	CheckboxMui,
	FormControlLabel,
} from "./styles";

export const Checkbox: Checkbox = ({
	id,
	checked,
	onChange,
	field,
	label,
	helperText,
	invalid,
	disabled,
	className,
	value
}) => {
	const idForHelperText = `helper-text-${field}`;
	const idForInput = `${field}-${id}`;

	const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;
		onChange({
			field: name, value: checked, id: idForInput,
			target: undefined
		});
	};

	return (
		<InputWrapper
			id={idForHelperText}
			type='checkbox'
			invalid={invalid}
			helperText={helperText}>
			<FormControlLabel
				control={
					<CheckboxMui
						value={value}
						id={idForInput}
						checked={checked}
						name={field}
						onChange={changeValue}
						icon={<CheckContainer />}
						checkedIcon={
							<CheckContainer>
								<CheckMark />
							</CheckContainer>
						}
					/>
				}
				label={label}
				disabled={disabled}
				className={className}
			/>
		</InputWrapper>
	);
};

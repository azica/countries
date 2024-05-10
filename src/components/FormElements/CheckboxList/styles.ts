import { styled } from "@mui/material/styles";
import {
	FormGroup as FormGroupMui,
	FormControl as FormControlMui,
} from "@mui/material";
import { hoverLightBlue, liteGrey } from "styles/colors";

export const FormGroup = styled(FormGroupMui)`
	width: 100%;
	gap: 4px;
`;

export const FormControl = styled(FormControlMui)`
	width: 100%;
	position: relative;
	display: flex;

	.MuiFormControlLabel-root {
		transition: all 0.25s ease-in-out;
        margin-right: -15px;
		margin-left: -15px;
		
		&.Mui-disabled {
			opacity: 0.5;

			&.checked {
				opacity: 1;
			}
		}
		&:hover {
            background: ${hoverLightBlue}
        }
	}

	.MuiCheckbox-root.Mui-checked.Mui-disabled .MuiBox-root {
		background: ${liteGrey};
	}

	.MuiFormGroup-root.custom-select-container {
		.MuiFormControlLabel-label {
			// width: calc(100% - 38px);
		}

		.MuiFormControlLabel-root
			.MuiCheckbox-root.Mui-checked.Mui-disabled
			+ .MuiFormControlLabel-label::before {
			border: 1px solid ${liteGrey};
		}
	}
`;


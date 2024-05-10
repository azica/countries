import { styled } from "@mui/material/styles";
import { ButtonGroup } from "@mui/material";
import { blue, hoverLightBlue, liteBlue, liteGrey, white } from "styles/colors";
import { robotoRegular } from "styles/fonts";

export const MuiButtonGroup = styled(ButtonGroup)`
	margin-bottom: 40px;
	border-radius: 8px;
	font-family: ${robotoRegular};

	> button {
		color: ${liteBlue};
		border-color: ${liteGrey};
	}
	.css-9y1egq-MuiButtonBase-root-MuiButton-root:hover {
		border-color: ${blue};
		color: ${blue};
		z-index: 1;
		background: ${hoverLightBlue};
	}
	.MuiButton-containedPrimary {
		color: ${white};
		background: ${blue};
	}
`;

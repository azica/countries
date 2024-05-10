import { styled as styledMui } from "@mui/material/styles";
import {
    Checkbox,
    Box,
    FormControlLabel as FormControlLabelMui,
} from "@mui/material";
import styled from "styled-components";
import { CheckIcon } from "assets/icons";
import { white, black, liteBlue, liteGrey } from "styles/colors";
import { robotoRegular } from "styles/fonts";

export const CheckMark = styled(CheckIcon)`
	stroke: ${liteBlue};
`;

export const CheckContainer = styledMui(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 20px;
	height: 20px;
	background: ${white};
    border: 1px solid ${liteGrey};
	border-radius: 5px;
    margin-left: 3px;
`;

export const CheckboxMui = styledMui(Checkbox)`
    &.Mui-checked {
        .MuiBox-root {
            background: ${white};
            border: 1px solid ${liteBlue};
        }
    }
`;

export const FormControlLabel = styledMui(FormControlLabelMui)`
    .MuiFormControlLabel-label {
        font-family: ${robotoRegular};
        font-size: 14px;
        line-height: 140%;
        color: ${black};
    }
`;

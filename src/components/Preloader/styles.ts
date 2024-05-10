import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { liteGrey } from "styles/colors";

export const Wrapper = styled(Box)`
	position: relative;
	height: 100%;
`;

export const Container = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 150px);
	width: 100%;
	margin: 0 auto;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	opacity: 0;

	&.active {
		transition: all 0.25s ease-in-out;
		opacity: 1;
	}

	.MuiCircularProgress-root {
		color: ${liteGrey};
	}
`;

export const Content = styled(Box)`
	height: 100%;
`;

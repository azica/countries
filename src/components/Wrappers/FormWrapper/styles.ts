import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { WhiteLayer } from "styles/common";
// import { FormContent } from "../../Auth/styles";

interface ContainerProps {
	width?: number;
	padding?: string;
}

interface TitleProps {
	secondery?: string;
}

export const Container = styled(WhiteLayer)`
	box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
	padding: ${({ padding }: ContainerProps) =>
		padding ? padding : `50px 40px`};
	width: ${({ width }: ContainerProps) => (width ? `${width}px` : `384px`)};
	position: relative;

	.MuiButton-root {
		width: 100%;
	}
`;

export const Title = styled(Typography<"h2">)`
	margin-bottom: ${({ secondery }: TitleProps) => (secondery ? "8px" : "24px")};
`;

export const Wrapper = styled(Box)`
	gap: 40px;
`;

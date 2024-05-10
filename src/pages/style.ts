import { Box } from "@mui/material";
import styled from "styled-components";
import { device } from "styles/media";

export const Container = styled(Box)`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media ${device.md} {
		grid-template-columns: 1fr;
		margin: 30px 15px;
	}
`;
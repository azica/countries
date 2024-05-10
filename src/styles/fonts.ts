import { css } from "styled-components";
import {
	RobotoRegularWoff2,
	RobotoRegularWoff,
	RobotoRegularEot,
	RobotoRegularTtf,
	RobotoMediumWoff2,
	RobotoMediumWoff,
	RobotoMediumEot,
	RobotoMediumTtf,
} from "assets/fonts";

export const fonts = css`
	@font-face {
		font-family: "Roboto Regular";
		src: url(${RobotoRegularWoff2}) format("woff2"),
			url(${RobotoRegularWoff}) format("woff"),
			url(${RobotoRegularTtf}) format("truetype"),
			url(${RobotoRegularEot}) format("embedded-opentype");
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: "Roboto Medium";
		src: url(${RobotoMediumWoff2}) format("woff2"),
			url(${RobotoMediumWoff}) format("woff"),
			url(${RobotoMediumTtf}) format("truetype"),
			url(${RobotoMediumEot}) format("embedded-opentype");
		font-weight: normal;
		font-style: normal;
	}
`;

export const robotoRegular = `"Roboto Regular", sans-serif`;

export const robotoMedium = `"Roboto Medium", sans-serif`;

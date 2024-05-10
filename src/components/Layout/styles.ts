import styled from "styled-components";
import { background } from "styles/colors";

import { device } from "styles/media";

export const layoutStyles = {
	Content: styled.div`
		min-height: 100vh;
		position: relative;
			`,
	Container: styled.main`
		position: relative;
		background- color: ${background};
`,
	Wrapper: styled.div`
		min-height: 100vh;
		position: relative;
		max-width: 1080px;
		margin: 30px auto;
		gap: 20px;

		@media ${device.md} {
			grid-template-columns: 1fr;
			margin: 30px 15px;
		}
`,
};

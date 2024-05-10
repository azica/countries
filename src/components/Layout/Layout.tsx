import { ThemeProvider } from "@mui/material";

import { theme } from "styles/theme";

import { layoutStyles } from "./styles";

import { LayoutContent } from "./LayoutContent";
import { useIsMobile } from "shared/hooks/useMobile";

const { Wrapper } = layoutStyles;

export const Layout = () => {
	const isMobile = useIsMobile(1020);

	return (
		<ThemeProvider theme={theme}>
			<Wrapper>
				<LayoutContent />
			</Wrapper>
		</ThemeProvider>
	);
};

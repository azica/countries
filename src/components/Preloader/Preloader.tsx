import { CircularProgress } from "@mui/material";
import { Container, Content, Wrapper } from "./styles";

interface LoaderProps {
	active: boolean;
	children?: JSX.Element | null;
}

export const Preloader = ({ active, children }: LoaderProps) => {
	return (
		<Wrapper>
			<Container className={active ? "active" : ""}>
				<CircularProgress />
			</Container>

			<Content style={{ visibility: active ? "hidden" : "visible" }}>
				{children && children}
			</Content>
		</Wrapper>
	);
};

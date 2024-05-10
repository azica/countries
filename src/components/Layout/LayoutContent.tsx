import { useLayoutEffect, useRef, useState } from "react";
import {
	Outlet,
	useLocation,
	useParams,
} from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { layoutStyles } from "./styles";

const { Content, Container } = layoutStyles;

export const LayoutContent = () => {
	const [noTransition, setNoTransition] = useState<boolean | string>(false);
	const params = useParams();
	const { key, hash, pathname } = useLocation();
	const [prevPath, setPrevPath] = useState(pathname);
	const nodeRef = useRef(null);

	useLayoutEffect(() => {
		const lastItem = pathname.split("/").at(-1);
		let transition =
			lastItem === "no-transition";
		setNoTransition(hash.length > 0 || transition || params.id !== undefined);
		setPrevPath(pathname);
	}, [params]);

	return (
		<Content>
			<SwitchTransition>
				<CSSTransition
					nodeRef={nodeRef}
					key={key}
					classNames={noTransition ? "" : "fadeIn"}
					timeout={noTransition ? 0 : 300}>
					<Container ref={nodeRef}>
						<Outlet />
					</Container>
				</CSSTransition>
			</SwitchTransition>
		</Content>
	);
};

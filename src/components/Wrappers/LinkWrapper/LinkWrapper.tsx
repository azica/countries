import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "./styles";

interface LinkWrapperProps {
	url?: string;
	children: ReactNode;
	className?: string;
	targetBlank?: boolean;
	state?: any;
	onClick?: () => void;
}

export const LinkWrapper = ({
	url,
	children,
	className,
	targetBlank,
	state,
	onClick,
}: LinkWrapperProps) => {
	const navigate = useNavigate();
	const goLink = () => {
		if (url) {
			console.log(url);
			if (targetBlank) {
				window.open(url, "_blank");
			} else {
				navigate(url, { state });
			}
		}
		if(onClick) {
			onClick();
		}
	};

	return (
		<LinkContainer className={className} onClick={goLink}>
			{children}
		</LinkContainer>
	);
};

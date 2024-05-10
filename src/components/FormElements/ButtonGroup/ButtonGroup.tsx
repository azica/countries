import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import { MuiButtonGroup } from "./styles";

export const ButtonGroup: ButtonGroup = ({ buttons, searchParam }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [active, setActive] = useState(searchParams.get(searchParam) || buttons[0].param);

	const handleButtonClick = (param: string) => {

		setSearchParams(searchParams => {
			searchParams.set(searchParam, param);
			return searchParams;
		})
		setActive(param);
	};

	return (
		<MuiButtonGroup
			variant="outlined"
			aria-label="Basic button group"
			size="large"
		>
			{buttons.map(({ id, title, param }) => (
				<Button
					key={id}
					onClick={() => handleButtonClick(param)}
					variant={active === param ? "contained" : "outlined"}
				>
					{title}
				</Button>
			))}
		</MuiButtonGroup>
	);
};

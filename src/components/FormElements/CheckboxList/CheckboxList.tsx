import { useState, useEffect } from "react";
import { Checkbox } from "components/FormElements/Checkbox";
import { FormGroup, FormControl } from "./styles";
import { useSearchParams } from "react-router-dom";

export const CheckboxList: CheckboxList = ({
	list,
	searchParamName
}) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [listProps, setListProps] = useState<CheckboxListItem[]>(() => {
		const currentParams = searchParams.get(searchParamName);
		return getCurrentParams(currentParams, list);
	});

	useEffect(() => {
		const queryParams = getQueryString(listProps);
		if (queryParams) {
			setSearchParams(searchParams => {
				searchParams.set(searchParamName, queryParams);
				return searchParams;
			})
		}

	}, [listProps, searchParamName]);

	const valueChange: CheckboxOnChange = (newVal: {
		field: string;
		value: boolean;
	}) => {
		if (newVal.field === "1") {
			setListProps(listProps.map((item) => ({
				...item,
				checked: newVal.value
			})));
		} else {
			setListProps(listProps.map((item) =>
				item.id === parseInt(newVal.field) ? { ...item, checked: newVal.value } : item,
			));
		}
	};

	return (
		<FormControl
			// @ts-ignore
			component='fieldset'
			variant='outlined'>
			<FormGroup>
				{listProps.map(
					({ id, checked, label, disabled, value, ...other }) => (
						<Checkbox
							key={id}
							id={id}
							onChange={valueChange}
							checked={checked ? checked : false}
							className={checked ? "checked" : ""}
							disabled={disabled}
							field={`${id}`}
							label={label}
							value={value}
						/>
					),
				)}
			</FormGroup>
		</FormControl>
	);
};

function getCurrentParams(searchParam: string | null, list: CheckboxListItem[]): CheckboxListItem[] {
	if (searchParam) {
		const currentParams = searchParam.split(',');
		return list.map((item) => ({
			...item,
			checked: currentParams.includes(item.value.toString())
		}));
	}
	return list;
}

function getQueryString(arr: CheckboxListItem[]): string {
	return arr
		.filter((item) => item.checked)
		.map((item) => item.value.toString())
		.join(',');
}
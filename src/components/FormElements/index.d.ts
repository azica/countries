import { FC } from "react";

declare global {
    type Checkbox = FC<{
        id: number | string;
        checked: boolean;
        onChange: CheckboxOnChange;
        field: string;
        label?: any;
        helperText?: string;
        invalid?: boolean;
        disabled?: boolean;
        className?: string;
        value: string | number;
    }>

    type ConsentLabel = FC<{
        centered?: boolean;
    }>

    type CheckboxListItem = {
        id: number;
        label?: string | number;
        checked?: boolean;
        disabled?: boolean;
        value: string | number;
    }

    type CheckboxList = FC<{
        list: CheckboxListItem[];
        searchParamName: string;
    }>

    type CheckboxOnChange = {
        (value: {
            target: any; field: string; value: boolean; id: number | string
        }): void;
    }

    type ButtonItem = {
        id: number;
        title: string;
        path: string;
    }

    type ButtonGroup = FC<{
        buttons: ButtonItemProps[];
        searchParam: string;
    }>

    type Tab = {
        value: string;
        label: string;

    }
}
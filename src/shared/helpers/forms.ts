export const filterCheckedValues = (array: CheckboxListItem[]) => {
    const values: { id: number }[] = [];

    array.map(({ id, checked }) => {
        if (checked) values.push({ id });
    });

    return values;
};

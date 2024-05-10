import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Tabs = ({ tabs }: { tabs: Tab[] }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [value, setValue] = useState(searchParams.get("sort") || tabs[0].value);

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setSearchParams(searchParams => {
            searchParams.set("sort", newValue);
            return searchParams;
        })
        setValue(newValue);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
            <MuiTabs
                value={value}
                onChange={handleChange}
            >
                {tabs.map((tab: Tab) => (
                    <Tab
                        key={tab.value}
                        value={tab.value}
                        label={tab.label}
                    />
                ))}
            </MuiTabs>
        </Box>
    )
}

export default Tabs
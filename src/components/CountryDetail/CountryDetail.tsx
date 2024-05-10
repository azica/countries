import { Fragment } from 'react';

import { List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MoneyIcon from '@mui/icons-material/Money';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const renderListItem = ({ icon, primary }: {
    icon: JSX.Element;
    primary: string;
}) => (
    <ListItem sx={{ py: "4px" }}>
        <ListItemAvatar sx={{ minWidth: "45px" }}>
            <ListItemIcon>{icon}</ListItemIcon>
        </ListItemAvatar>
        <ListItemText primary={primary} />
    </ListItem>
);

export const CountryDetail = (
    { currencies, name, languages, capital }:
        { currencies: Currency, languages: Language, name: Name; capital: string }) => {

    const currencyList = Object.entries(currencies).map(([code, info]) => ({
        icon: <MoneyIcon />,
        primary: `${info.name} (${code}) - ${info.symbol}`,
    }));

    const languageList = Object.entries(languages).map(([code, name]) => ({
        icon: <GTranslateIcon />,
        primary: `${name} (${code})`,
    }));

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {renderListItem({ icon: <DriveFileRenameOutlineIcon />, primary: name.common })}
            {renderListItem({ icon: <DriveFileRenameOutlineIcon />, primary: name.official })}
            {renderListItem({ icon: <LocationCityIcon />, primary: capital })}
            {currencyList.map((item, index) => (
                <Fragment key={index}>
                    {renderListItem(item)}
                </Fragment>
            ))}
            {renderListItem({ icon: <GTranslateIcon />, primary: languageList.map(({ primary }) => primary).join(', ') })}
        </List>
    )
}

export default CountryDetail
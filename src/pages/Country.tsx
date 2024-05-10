import { useParams } from "react-router-dom";

import { CountryDetail } from "components/CountryDetail";
import { Preloader } from "components/Preloader";
import { Map } from "components/Map";

import { Container } from "./style";
import { useCountryQuery } from "hooks/useCountry";
import { Alert, Snackbar } from "@mui/material";

const Country = () => {
    const { name } = useParams();
    const { data, isLoading, error } = useCountryQuery(String(name));

    return (
        <>
            <Preloader active={isLoading}>
                {data ? (
                    <Container>
                        {data.latlng ? <Map latLng={data.latlng} /> : null}
                        <CountryDetail
                            name={data.name}
                            currencies={data.currencies!}
                            languages={data.languages}
                            capital={data.capital} />
                    </Container>
                ) : null}
            </Preloader>
            {
                error ?
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={true}
                        autoHideDuration={6000}
                    >
                        <Alert
                            severity="error"
                            variant="filled"
                        >
                            {error.message}
                        </Alert>
                    </Snackbar>
                    : null
            }
        </>
    );
};

export default Country;

import Skeleton from 'components/Skeleton/Skeleton';
import { CountryCard } from 'components/CountryCard';

import { Container } from './style';
import { useCountriesQuery } from 'hooks/useCountry';
import { Snackbar } from '@mui/material';

const Counties = () => {
    const { data, isLoading, error } = useCountriesQuery()

    return (
        <Container>
            {isLoading && !data ?
                Array.from({ length: 8 }).map((_, idx) => <Skeleton key={idx} />)
                :
                data?.slice(0, 20).map((country, idx) => <CountryCard {...country} key={idx} />)}
            {
                error ?
                    <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        message={error.message}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    />
                    : null
            }
        </Container>
    );
};

export default Counties;

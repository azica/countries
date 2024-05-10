import { FC } from 'react';

import { CardLeftSide, CardRightSide, CardWrapper, Image, LinkButton } from './styles';
import { CountryDetail } from 'components/CountryDetail';
import { Link } from 'react-router-dom';

export const CountryCard: FC<Country> = ({
    name,
    flags,
    capital,
    currencies,
    languages,
}) => {

    return (
        <CardWrapper>
            <CardLeftSide>
                <Image>
                    <img src={flags.svg} alt={flags.alt} />
                </Image>
            </CardLeftSide>
            <CardRightSide>
                <CountryDetail
                    currencies={currencies}
                    languages={languages}
                    name={name}
                    capital={capital} />

                <LinkButton
                    to={`/${name.common.toLowerCase()}`}
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }>Learn More</LinkButton>
            </CardRightSide>
        </CardWrapper>
    );
};

export default CountryCard;

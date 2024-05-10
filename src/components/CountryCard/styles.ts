import { Box, Card, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { hoverLightBlue, liteGrey, purple } from "styles/colors";
import { device } from "styles/media";
import { rgba } from "styles/mixins";

export const CardWrapper = styled(Card)`
    display: grid;
    grid-template-columns: 150px 1fr;
    margin-top: 0;

    @media ${device.sm} {
        grid-template-columns: 1fr;
    }
`;

export const CardLeftSide = styled(Box)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    border-right: 1px solid ${rgba(liteGrey, 0.6)};

    @media ${device.sm} {
        width: 100%;
        order: 2;
        align-items: flex-end;
        border-top: 1px solid ${rgba(liteGrey, 0.6)};
    }
`

export const CardRightSide = styled(Box)`
    padding: 20px;
    display: flex;
    flex-direction: column;
`
export const Image = styled(Box)`
    height: 80px;   
    width: 120px;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
export const LinkButton = styled(Link)`
    color: ${purple};
    margin: 10px 0 0 20px;

    &:hover {
        color: black;
    }
`




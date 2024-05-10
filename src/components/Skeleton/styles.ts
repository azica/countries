import { Card, Box } from "@mui/material";
import styled from "styled-components";
import { liteGrey } from "styles/colors";
import { rgba } from "styles/mixins";

export const Container = styled(Card)`
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-top: 0;
`;

export const CardLeftSide = styled(Box)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid ${rgba(liteGrey, 0.6)};
`

export const CardRightSide = styled(Box)`
    padding: 20px;
`

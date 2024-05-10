
import { CardLeftSide, CardRightSide, Container } from './styles'
import { Skeleton as MuiSkeleton } from '@mui/material';

const Skeleton = () => {
    return (
        <Container>
            <CardLeftSide>
                <MuiSkeleton
                    variant="rectangular"
                    animation="wave"
                    height={40}
                    width="80%"
                />
                <MuiSkeleton
                    variant="rectangular"
                    animation="wave"
                    height={50}
                    width="100%"
                />
            </CardLeftSide>
            <CardRightSide>
                <MuiSkeleton
                    variant="rectangular"
                    animation="wave"
                    height={100}
                    width="100%"
                />
            </CardRightSide>
        </Container>
    )
}

export default Skeleton
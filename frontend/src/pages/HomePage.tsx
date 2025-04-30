import {Box, Button, Container, Typography} from "@mui/material";
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}>

                <Typography>
                    E-Card
                </Typography>
                <Button className="button" component={Link} to="/room">スタート</Button>
                <Button className="button" component={Link} to="/login">ログイン</Button>
            </Box>
        </Container>
    )
}
export default HomePage;
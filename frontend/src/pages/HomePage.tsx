import { Box, Container, Typography} from "@mui/material";

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
                <button className="button">スタート</button>
                <button className="button">ログイン</button>
            </Box>
        </Container>
    )
}
export default HomePage;
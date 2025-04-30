import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTemplateTheme} from "./utils/theme.ts";

import HomePage from "./pages/HomePage.tsx";
import RoomPage from "./pages/RoomPage.tsx";


const App = () => {
    const theme = useTemplateTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/room" element={<RoomPage />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App;
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent, FormControl, MenuItem,
    Select, Typography,

} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

type job = '皇帝' | '奴隷';

const RoomPage : React.FC = () => {
    const [job, setJob] = useState<job>('皇帝');

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement> | { target: { value: unknown } }
    ) => {
        const value = event.target.value as job;
        setJob(value);
    };
    const [openDialog, setOpenDialog ]=useState(false);

    const handleCreateRoom = () => {
        console.log("部屋作成完了")
        useNavigate(`/rooms`);
    }

    const openRoomDialog = () => setOpenDialog(true);
    const closeRoomDialog = () => setOpenDialog(false);
    return (

        <Container>
            <Dialog open={openDialog} onClose={closeRoomDialog}>
                <DialogContent>
                    ルーム詳細
                    <FormControl fullWidth variant="standard">
                        <Select value={job} label="役職" onChange={handleChange}>
                            <Typography>自分の役職</Typography>
                            <MenuItem value="kotei">皇帝</MenuItem>
                            <MenuItem value="dorei">奴隷</MenuItem>
                        </Select>

                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={openRoomDialog}>作成</Button>
                </DialogActions>
            </Dialog>

            <Box>
                <Button onClick={handleCreateRoom}>
                    ルーム作成
                </Button>
            </Box>
        </Container>
    )
}
export default RoomPage;
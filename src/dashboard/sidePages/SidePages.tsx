import { Stack } from "@mui/material";
import SidePagesBar from "./SidePagesBar";

export default function SidePages() {
    return (
        <Stack width={{xs: 'initial', md: '240px'}} bgcolor='background.paper' p={5} minHeight={{xs: 'initial', md: '80vh'}} borderRadius='6px'> 
            <SidePagesBar />
        </Stack>
    )
}
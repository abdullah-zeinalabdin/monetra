import { Stack } from "@mui/material";
import SidePagesBar from "./SidePagesBar";

export default function SidePages() {
    return (
        <Stack alignSelf={{xs: 'center', lg: 'initial'}} width={{xs: 'fit-content', lg: '240px'}} bgcolor='background.paper' p={5} minHeight={{xs: 'initial', lg: '80vh'}} borderRadius='6px'> 
            <SidePagesBar />
        </Stack>
    )
}
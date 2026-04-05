import { Stack } from "@mui/material";
import SidePages from "./sidePages/SidePages";
import StatsContainer from "./stats/StatsContainer";
import TransactionContainer from "./transactions/TransactionCotainer";

export default function Dashboard() {
    return (
        <Stack direction={{xs: 'column', md: 'row'}} spacing={4} p={4} >
            <SidePages />
            <StatsContainer />
            <TransactionContainer />
        </Stack>
    )
}
import { useState } from 'react';
import { Stack } from "@mui/material";
import SidePages from "./sidePages/SidePages";
import StatsContainer from "./stats/StatsContainer";
import TransactionContainer from "./transactions/TransactionCotainer";
import FormDialog from './transactions/FormDialog';

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <Stack direction={{xs: 'column', lg: 'row'}} spacing={4} p={4} >
                <SidePages />
                <StatsContainer />
                <TransactionContainer setOpen={handleOpen} />
            </Stack>
            <FormDialog open={open} />
        </>
    )
}
import { useState } from 'react';
import { Stack } from "@mui/material";
import SidePages from "./sidePages/SidePages";
import StatsContainer from "./stats/StatsContainer";
import TransactionContainer from "./transactions/TransactionCotainer";
import FormDialog from './transactions/formDialog/FormDialog';
import type { Transaction } from '../types/transaction';

export type Mode = "add" | "edit";
export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState<Mode>("add");
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleAddMode = () => {
        setMode("add");
    }
    const handleEditMode = () => {
        setMode("edit");
    }
    return (
        <>
            <Stack direction={{xs: 'column', lg: 'row'}} spacing={4} p={4} >
                <SidePages />
                <StatsContainer />
                <TransactionContainer 
                setOpen={handleOpen} 
                handleAddMode={handleAddMode} 
                setSelectedTransaction={setSelectedTransaction}
                handleEditMode={handleEditMode}
                />
            </Stack>
            <FormDialog key={selectedTransaction?.id ?? mode} open={open} mode={mode} selectedTransaction={selectedTransaction} onClose={handleClose} />
        </>
    )
}
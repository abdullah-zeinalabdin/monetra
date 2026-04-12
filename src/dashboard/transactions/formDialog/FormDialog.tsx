import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import type { TransactionType } from '../../../types/transaction'
import FormDialogContent from './FormDialogContent'

type Props = {
    open: boolean;
    handleClose: () => void;
}

export type FormState = {
    type: TransactionType;
    title: string;
    amount: number;
    category: string;
}

export type MyFormEvents<T = string | number> = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<T>;
export default function FormDialog({ open, handleClose }: Props) {
    const [form, setForm] = useState<FormState>({
        type: "expense",
        title: "",
        amount: 0,
        category: "",
    });
    const handleChange = (event: MyFormEvents) => {
        const { name, value } = event.target;
        setForm(prev => ({...prev, [name as string]: name === "amount" ? Number(value) : value}));
    };
    return (
        <Dialog open={open} 
        sx={{
            "& .MuiPaper-root": {
                width: "50vw",   
            },
        }}
        >
            <DialogTitle>Add Expense</DialogTitle>
            <FormDialogContent form={form} handleChange={handleChange}/>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" form="transaction-form">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}
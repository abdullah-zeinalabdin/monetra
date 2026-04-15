import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import type { Categories, TransactionType } from '../../../types/transaction'
import FormDialogContent from './FormDialogContent'

type Props = {
    open: boolean;
    onClose: () => void;
}

export type FormState = {
    type: TransactionType;
    title: string;
    amount: number;
    category: Categories;
}

export type MyFormEvents<T = string | number> = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<T>;
export default function FormDialog({ open, onClose }: Props) {
    const [form, setForm] = useState<FormState>({
        type: "expense",
        title: "",
        amount: 0,
        category: "food",
    });
    const handleChange = (event: MyFormEvents) => {
        const { name, value } = event.target as HTMLInputElement;
        setForm(prev => ({...prev, [name]: name === "amount" ? Number(value) : value}));
    };
    return (
        <Dialog open={open} onClose={onClose}
        sx={{
            "& .MuiPaper-root": {
                width: "50vw",   
            },
        }}
        >
            <DialogTitle>Add Expense</DialogTitle>
            <FormDialogContent form={form} handleChange={handleChange} onClose={onClose}/>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit" form="transaction-form">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}
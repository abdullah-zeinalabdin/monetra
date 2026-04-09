import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import type { TransactionType } from '../../types/transaction';
type Props = {
    open: boolean;
}
type FormState = {
    type: TransactionType;
    title: string;
    amount: number;
    category: string;
}
export default function FormDialog({ open }: Props) {
    const [form, setForm] = useState<FormState>({
        type: "expense",
        title: "",
        amount: 0,
        category: "",
    })
    const handleChange = (event: SelectChangeEvent) => {
        setForm(prev => ({
            ...prev, type: event.target.value as TransactionType
        }));
    };  
    return (
        <Dialog open={open}>
            <DialogTitle>Add Expense</DialogTitle>
            <DialogContent>
                <Box component="form" sx={{ display: 'flex', minWidth: '500px', height: '60vh' }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={form.type}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={"expense"}>Expense</MenuItem>
                            <MenuItem value={"income"}>Income</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
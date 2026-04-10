import { Dialog, DialogActions, DialogContent, DialogTitle, Stack, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import type { TransactionType } from '../../types/transaction';
import TextField from '@mui/material/TextField';
type Props = {
    open: boolean;
    handleClose: () => void;
}
type FormState = {
    type: TransactionType;
    title: string;
    amount: number;
    category: string;
}

type MyFormEvents = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent;
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
            <DialogContent sx={{overflow: 'hidden'}}>
                <Box id="transaction-form" component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <FormControl sx={{ m: 2, minWidth: '100%'}}>
                        <Typography mb={1} color='text.primary'>Transaction Type</Typography>
                        <Select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={"expense"}>Expense</MenuItem>
                            <MenuItem value={"income"}>Income</MenuItem>
                        </Select>
                    </FormControl>
                    <Stack width="100%" mb={1}>
                        <Typography mb={1} color='text.primary'>Title</Typography>
                        <TextField name="title" fullWidth variant="outlined" value={form.title} onChange={handleChange} />
                    </Stack>
                    <Stack width="100%" mb={1}>
                        <Typography mb={1} color='text.primary'>Amount</Typography>
                        <TextField name="amount" type="number" fullWidth variant="outlined" value={form.amount} onChange={handleChange} />
                    </Stack>
                    <FormControl sx={{ m: 1, minWidth: '100%' }}>
                        <Typography mb={1} color='text.primary'>Category</Typography>
                        <Select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={"food"}>Food</MenuItem>
                            <MenuItem value={"socialLife"}>Social Life</MenuItem>
                            <MenuItem value={"medical"}>Medical</MenuItem>
                            <MenuItem value={"transport"}>Transport</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" form="transaction-form">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}
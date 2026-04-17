import { Stack, Typography } from "@mui/material";
import { Wallet, AddBox } from '@mui/icons-material';
type Props = {
    setOpen: () => void;
    handleAddMode: () => void;
}

export default function TransactionFooter({ setOpen, handleAddMode }: Props) {
    return (
        <Stack direction='row' p={3} alignItems='center' spacing={2} justifyContent='space-between'>
            <Stack color='text.primary' direction='row' spacing={2} alignItems='center'> 
                <Wallet sx={{ fontSize: '40px' }} />
                <Typography>Missing Transactions?</Typography>
            </Stack>
            <Stack color='primary.main'>
                <AddBox onClick={() => {
                    handleAddMode();
                    setOpen();
                }} 
                sx={{ fontSize: '40px', cursor: 'pointer' }} />
            </Stack>
        </Stack>
    )
}
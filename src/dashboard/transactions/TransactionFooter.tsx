import { Stack, Typography } from "@mui/material";
import { Wallet, AddBox } from '@mui/icons-material';

export default function TransactionFooter() {
    return (
        <Stack direction='row' p={3} alignItems='center' spacing={2} justifyContent='space-between'>
            <Stack color='text.primary' direction='row' spacing={2} alignItems='center'> 
                <Wallet sx={{ fontSize: '40px' }} />
                <Typography>Missing Transactions?</Typography>
            </Stack>
            <Stack color='primary.main'>
                <AddBox sx={{ fontSize: '40px', cursor: 'pointer' }} />
            </Stack>
        </Stack>
    )
}
import { Stack, Typography } from "@mui/material";
import AccountBalance from '@mui/icons-material/AccountBalance';
export default function TransactionHeader() {
    return (
        <Stack p={2} direction='row' justifyContent='center' alignItems='center' color='text.primary' spacing={2}> 
            <AccountBalance  sx={{fontSize: '40px'}} />
            <Typography textAlign='center'>Transaction History</Typography>
        </Stack>
    )
}
import { Stack, Typography } from "@mui/material";
import { Fastfood } from '@mui/icons-material';
export default function ExpenseStat() {
    return (
        <Stack width="100%" p={2} bgcolor='background.paper' spacing={2} alignItems='center' justifyContent='center'>
            <Fastfood sx={{fontSize: "80px", color: "text.secondary"}} />
            <Typography variant="h2" color="text.primary">Most Income</Typography>
            <Typography variant="h2" color="primary.main">+999$</Typography>
        </Stack>
    )
}
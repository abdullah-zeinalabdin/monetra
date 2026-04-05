import { Box, Stack, Typography, Divider } from "@mui/material";
import MoreVert from '@mui/icons-material/MoreVert';
export default function TransactionBar() {
    return (
        <>
            <Stack p={2} direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Box sx={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: 'text.secondary',
                    }}>

                    </Box>
                    <Stack>
                        <Typography color="text.primary">Payment Name</Typography>
                        <Typography color="text.secondary">Description</Typography>
                    </Stack>                
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Typography>9999$</Typography>
                    <MoreVert sx={{color: 'text.primary'}}/>
                </Stack>
            </Stack>
            <Divider variant="fullWidth" sx={{color: 'text.secondary', my: '10px'}} />
        </>
    )
}
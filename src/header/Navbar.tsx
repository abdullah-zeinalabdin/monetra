import { Stack, Typography } from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle'

export default function Navbar() {
    return (
        <Stack direction='row' py={2} px={4} bgcolor='background.paper' alignItems='center' justifyContent='space-between'>
            <Typography variant="h1" color="primary.main">Monetra</Typography>
            <Stack direction='row' alignItems='center' color='white' spacing={1}>
                <AccountCircle sx={{fontSize: '50px'}} />
                <Typography variant="h4">You</Typography>
            </Stack>
        </Stack>
    )
}
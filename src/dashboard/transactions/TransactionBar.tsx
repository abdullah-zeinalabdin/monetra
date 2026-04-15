import { Box, Stack, Typography, Divider } from "@mui/material";
import MoreVert from '@mui/icons-material/MoreVert';
import type { TransactionType } from "../../types/transaction";

type Props = {
    icon: React.ReactNode;
    title: string;
    category: string;
    amount: number;
    type: TransactionType;
}
export default function TransactionBar({icon, title, category, amount, type}: Props) {
    return (
        <>
            <Stack p={2} direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Box sx={{
                        color: "text.secondary",
                        width: '40px',
                        height: '40px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: 'text.secondary',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {icon}
                    </Box>
                    <Stack>
                        <Typography color="text.primary">{title}</Typography>
                        <Typography color="text.secondary">{category}</Typography>
                    </Stack>                
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Typography color={type === "expense" ? "error.main" : "primary.main"}>{amount} $</Typography>
                    <MoreVert sx={{color: 'text.primary'}}/>
                </Stack>
            </Stack>
            <Divider variant="fullWidth" sx={{color: 'text.secondary', my: '10px'}} />
        </>
    )
}
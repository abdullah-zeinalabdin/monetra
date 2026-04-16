import { Box, Stack, Typography, Divider, IconButton, Menu, MenuItem} from "@mui/material"
import MoreVert from '@mui/icons-material/MoreVert'
import type { TransactionType } from "../../types/transaction"
import { useState } from "react"
import { useTransaction } from "../../hook/useTransactions"
type Props = {
    id: string;
    icon: React.ReactNode;
    title: string;
    category: string;
    amount: number;
    type: TransactionType;
}
export default function TransactionBar({id, icon, title, category, amount, type}: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { removeTransaction } = useTransaction();
    return (
        <>
            <Stack p={2} direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
                <Stack direction='row' alignItems='center' spacing={2}>
                    <Box sx={{
                        color: "text.primary",
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
                <Stack direction='row' spacing={2} alignItems='center'>
                    <Typography color={type === "expense" ? "error.main" : "primary.main"}>
                        {type === "income" ? "+ " : "- "}
                        {amount} $
                    </Typography>
                    <IconButton onClick={handleClick}>
                        <MoreVert sx={{color: 'text.primary'}}/>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                        <MenuItem onClick={() => {
                            removeTransaction(id);
                            handleClose();
                        }}>
                        Remove
                        </MenuItem>
                    </Menu>
                </Stack>
            </Stack>
            <Divider variant="fullWidth" sx={{color: 'text.secondary', my: '10px'}} />
        </>
    )
}
import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { Dashboard, AccountBalance, Assessment, Settings, QuestionMark }from '@mui/icons-material';
export default function SidePagesBar() {
    type NavItem = {
        id: number,
        label: string,
        path?: string,
        icon?: ReactNode,
    }
    const navItems:NavItem[] = [
        {id: 1, label: 'Dashboard', icon: <Dashboard />},
        {id: 2, label: 'Transactions', icon: <AccountBalance />},
        {id: 3, label: 'Reports', icon: <Assessment />},
        {id: 4, label: 'Settings', icon: <Settings />},
        {id: 5, label: 'Help', icon: <QuestionMark />},
    ]
    return (
        <Stack justifyContent={{xs: 'center', md: 'initial'}} spacing={5} direction={{xs: 'row', md: 'column'}}>
            {
                navItems.map((item) => {
                    return (
                        <Stack key={item.id} color="text.secondary" direction='row' spacing={3} p={1} alignItems='center'>
                            {item.icon}
                            <Typography display={{xs: 'none', md: 'initial'}} variant="h4">{item.label}</Typography>
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
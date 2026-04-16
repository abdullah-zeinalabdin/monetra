import { Stack } from "@mui/material";
import TransactionBar from "./TransactionBar";
import { useTransaction } from "../../hook/useTransactions";
import { Fastfood, Groups, MedicalServices, Commute } from '@mui/icons-material';

type DisplayConfig = {
    label: string;
    icon: React.ReactNode;
}

type Config = {
    [key: string]: DisplayConfig
}
export default function TransactionBarsContainer() {
    const { transactions } = useTransaction();
    const selectConfig: Config = {
        "food": {
            label: "Food",
            icon: <Fastfood />
        },
        "socialLife": {
            label: "Social Life",
            icon: <Groups />
        },
        "medical": {
            label: "Medical",
            icon: <MedicalServices />
        },
        "transport": {
            label: "Transport",
            icon: <Commute />
        },
    }
    return (
        <Stack flex={1}>
            {transactions.map((t) => {
                return (
                    <TransactionBar
                    key={t.id} 
                    id={t.id}
                    icon={selectConfig[t.category].icon} 
                    title={t.title} 
                    category={selectConfig[t.category].label} 
                    amount={t.amount}
                    type={t.type} />
                )
            })}
        </Stack>
    )
}
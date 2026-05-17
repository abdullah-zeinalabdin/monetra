import { Stack } from "@mui/material";
import TransactionBar from "./TransactionBar";
import { useTransaction } from "../../hook/useTransactions";
import { Fastfood, Groups, MedicalServices, Commute, AttachMoney, MonetizationOn, ConfirmationNumber, CardGiftcard} from '@mui/icons-material';
import type { Transaction } from "../../types/transaction";
type Props = {
    setOpen: () => void;
    setSelectedTransaction: React.Dispatch<React.SetStateAction<Transaction | null>>;
    handleEditMode: () => void;
}
type DisplayConfig = {
    label: string;
    icon: React.ReactNode;
}

type Config = {
    [key: string]: DisplayConfig
}
export default function TransactionBarsContainer( { setOpen, setSelectedTransaction, handleEditMode }: Props ) {
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
        "allowance": {
            label: "Allowance",
            icon: <AttachMoney />
        },
        "salary": {
            label: "Salary",
            icon: <MonetizationOn />
        },
        "missingFunds": {
            label: "Missing Funds",
            icon: <ConfirmationNumber />
        },
        "bonus": {
            label: "Bonus",
            icon: <CardGiftcard />
        }
    }
    return (
        <Stack flex={1} sx={{minHeight: 0, overflowY: "auto"}}>
            {transactions.map((t) => {
                return (
                    <TransactionBar
                    key={t.id} 
                    t={t}
                    icon={selectConfig[t.category].icon} 
                    category={selectConfig[t.category].label} 
                    setOpen={setOpen}
                    setSelectedTransaction={setSelectedTransaction}
                    handleEditMode={handleEditMode}
                    />
                )
            })}
        </Stack>
    )
}
import { Stack, Divider } from "@mui/material";
import TransactionHeader from "./TransactionHeader";
import TransactionBarsContainer from "./TransactionBarsContainer";
import TransactionFooter from "./TransactionFooter";
import type { Transaction } from "../../types/transaction";
type Props = {
    setOpen: () => void;
    handleAddMode: () => void;
    setSelectedTransaction: React.Dispatch<React.SetStateAction<Transaction | null>>;
    handleEditMode: () => void;
}

export default function TransactionContainer( { setOpen, handleAddMode, setSelectedTransaction, handleEditMode }: Props) {
    return (
        <Stack bgcolor='background.paper' flex={1}>
            <TransactionHeader />
            <Divider variant="fullWidth" sx={{color: 'text.secondary', my: '10px'}} />
            <TransactionBarsContainer setOpen={setOpen} setSelectedTransaction={setSelectedTransaction} handleEditMode={handleEditMode} />
            <Divider variant="fullWidth" sx={{color: 'text.secondary', my: '10px'}} />
            <TransactionFooter setOpen={setOpen} handleAddMode={handleAddMode} />
        </Stack>
    )
}
import { Box, DialogContent } from "@mui/material";
import type { FormState, MyFormEvents } from "./FormDialog";
import FormDialogSelect from "./FormDialogSelect";
import FormDialogText from "./FormDialogText";
import type { Categories, Transaction } from "../../../types/transaction";
import { useTransaction } from "../../../hook/useTransactions";
import type { Mode } from "../../Dashboard";
type Props = {
    form: FormState;
    mode: Mode;
    selectedTransaction: Transaction | null;
    handleChange: (event: MyFormEvents) => void;
    onClose: () => void;
}

export type SelectOptions = {
    value: Categories | string;
    label: string;
}
export default function FormDialogContent({ form, mode, selectedTransaction, handleChange, onClose }: Props) {
    const { addTransaction, editTransaction } = useTransaction();
    const categoryOptions: SelectOptions[] = [
        {value: "food", label: "Food"},
        {value: "socialLife", label: "Social Life"},
        {value: "medical", label: "Medical"},
        {value: "transport", label: "Transport"},
    ]
    const typeOptions: SelectOptions[] = [
        {value: "expense", label: "Expense"},
        {value: "income", label: "Income"},
    ] 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const transactionObj: Transaction = {
            id : 
            mode === "edit" && selectedTransaction
            ? selectedTransaction.id 
            : crypto.randomUUID(),
            date: 
            mode === "edit" && selectedTransaction
            ? selectedTransaction.date
            : new Date().toISOString(),
            ...form,
        };
        if(mode === "add") addTransaction(transactionObj);
        else {editTransaction(transactionObj)};
        onClose();
    }
    return (
        <DialogContent sx={{overflow: 'hidden'}}>
            <Box id="transaction-form" component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <FormDialogSelect title={"Transaction Type"} name={"type"} options={typeOptions} form={form} handleChange={handleChange}/>
                <FormDialogText title="title" form={form} handleChange={handleChange} />
                <FormDialogText title="amount" form={form} handleChange={handleChange} />
                <FormDialogSelect title={"Category"} name={"category"} options={categoryOptions} form={form} handleChange={handleChange}/>
            </Box>
        </DialogContent>
    )
}
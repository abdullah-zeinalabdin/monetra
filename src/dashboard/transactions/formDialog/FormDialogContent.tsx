import { Box, DialogContent } from "@mui/material";
import type { FormState, MyFormEvents } from "./FormDialog";
import FormDialogSelect from "./FormDialogSelect";
import FormDialogText from "./FormDialogText";
import type { Transaction } from "../../../types/transaction";
import { useTransaction } from "../../../hook/useTransactions";
type Props = {
    form: FormState
    handleChange: (event: MyFormEvents) => void;
    onClose: () => void;
}
export default function FormDialogContent({ form, handleChange, onClose }: Props) {
    const { addTransaction } = useTransaction();
    const typeOptions: string[] = ["expense", "income"];
    const categoryOptions: string[] = ["food", "social Life", "medical", "transport"];
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const transactionObj: Transaction = {
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
            ...form,
        };
        addTransaction(transactionObj);
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
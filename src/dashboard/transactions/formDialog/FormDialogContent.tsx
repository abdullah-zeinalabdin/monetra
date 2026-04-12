import { Box, DialogContent } from "@mui/material";
import type { FormState, MyFormEvents } from "./FormDialog";
import FormDialogSelect from "./FormDialogSelect";
import FormDialogText from "./FormDialogText";
type Props = {
    form: FormState
    handleChange: (event: MyFormEvents) => void;
}
export default function FormDialogContent({ form, handleChange }: Props) {
    const typeOptions: string[] = ["expense", "income"];
    const categoryOptions: string[] = ["food", "social Life", "medical", "transport"];
    return (
        <DialogContent sx={{overflow: 'hidden'}}>
            <Box id="transaction-form" component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <FormDialogSelect title={"Transaction Type"} name={"type"} options={typeOptions} form={form} handleChange={handleChange}/>
                <FormDialogText title="title" form={form} handleChange={handleChange} />
                <FormDialogText title="amount" form={form} handleChange={handleChange} />
                <FormDialogSelect title={"Category"} name={"category"} options={categoryOptions} form={form} handleChange={handleChange}/>
            </Box>
        </DialogContent>
    )
}
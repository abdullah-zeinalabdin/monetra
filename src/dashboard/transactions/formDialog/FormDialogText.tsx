import { Typography, Stack, TextField } from "@mui/material";
import type { FormState, MyFormEvents } from "./FormDialog";
type Props = {
    title: keyof FormState;
    form: FormState;
    handleChange: (event: MyFormEvents) => void;
}
export default function FormDialogText( { title, form, handleChange }: Props) {
    return (
        <Stack width="100%" mb={1}>
            <Typography mb={1} color='text.primary'>{title}</Typography>
            <TextField name={title} fullWidth variant="outlined" value={form[title]} onChange={handleChange} />
        </Stack>
    )
}
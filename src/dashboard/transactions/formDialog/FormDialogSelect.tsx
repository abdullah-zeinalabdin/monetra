import { FormControl, Typography, MenuItem, Select } from "@mui/material";
import type { FormState, MyFormEvents } from "./FormDialog";
type Props = {
    title: string;
    name: keyof FormState;
    options: string[];
    form: FormState;
    handleChange: (event: MyFormEvents) => void;
}
export default function FormDialogSelect( { title, name, options, form, handleChange }: Props) {
    return (
        <FormControl sx={{ m: 2, minWidth: '100%'}}>
            <Typography mb={1} color='text.primary'>{title}</Typography>
            <Select
                name={name}
                value={form[name]}
                onChange={handleChange}
                fullWidth
                >
                    {options.map((option) => {
                        return (
                            <MenuItem value={option}>{option}</MenuItem>
                        )
                    })}
            </Select>
        </FormControl>
    )
}
import { Stack } from "@mui/material";
import ExpenseStat from "./ExpenseStat";

export default function ExpensesStats() {
    return (
        <Stack justifyContent='center' direction='row' spacing={2}>
            <ExpenseStat />
            <ExpenseStat />
            <ExpenseStat />
        </Stack>
    )
}
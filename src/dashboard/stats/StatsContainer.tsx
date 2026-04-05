import { Stack } from "@mui/material";
import ExpensesStats from "./ExpensesStats";
import GraphStats from "./GraphStats";

export default function StatsContainer() {
    return (
        <Stack spacing={2}>
            <ExpensesStats />
            <GraphStats />
        </Stack>
    )
}
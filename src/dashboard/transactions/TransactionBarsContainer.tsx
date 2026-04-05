import { Stack } from "@mui/material";
import TransactionBar from "./TransactionBar";

export default function TransactionBarsContainer() {
    return (
        <Stack flex={1}>
            <TransactionBar />
            <TransactionBar />
        </Stack>
    )
}
import { Stack } from "@mui/material";
import ExpenseStat from "./ExpenseStat";
import { useTransaction } from "../../hook/useTransactions";
import { useMemo } from "react";

export default function ExpensesStats() {
    const { transactions } = useTransaction();
    const catAmount = useMemo(() => {
        const amounts = {
            foodAmount: 0,
            medicalAmount: 0,
            socialLifeAmount: 0,
            transportAmount: 0,
        }
        transactions.map((t) => {
            if(t.category === "food") amounts.foodAmount += t.amount;
            else if(t.category === "medical") amounts.medicalAmount += t.amount;
            else if(t.category === "socialLife") amounts.socialLifeAmount += t.amount;
            else amounts.transportAmount += t.amount;
        });
        let maxKey = "";
        let maxValue = 0;
        for (const [key, value] of Object.entries(amounts)) {
            if(value > maxValue) {
                maxValue = value;
                maxKey = key;
            }
        }
        return { amounts, maxKey, maxValue };
    }, [transactions])
    return (
        <Stack justifyContent='center' direction='row' spacing={2}>
            <ExpenseStat />
            <ExpenseStat />
            <ExpenseStat />
        </Stack>
    )
}
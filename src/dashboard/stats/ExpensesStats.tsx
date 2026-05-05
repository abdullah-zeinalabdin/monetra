import { Stack } from "@mui/material";
import ExpenseStat from "./ExpenseStat";
import { useTransaction } from "../../hook/useTransactions";
import { useMemo } from "react";
import { AccountBalance, Savings, ShoppingCartCheckout } from '@mui/icons-material';
export default function ExpensesStats() {
    const { transactions } = useTransaction();
    useMemo(() => {
        const amounts: Record<string, number> = {};
        transactions.forEach((t) => {
            if (!amounts[t.category]) {
                amounts[t.category] = 0;
            }
            amounts[t.category] += t.amount;
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
    }, [transactions]);
    const stats = useMemo(() => {
        let income = 0;
        let expenses = 0;

        transactions.forEach(t => {
            if (t.type === "income") income += t.amount;
            else expenses += t.amount;
        });

        return {
            income,
            expenses,
            balance: income - expenses,
        };
    }, [transactions]);
    return (
        <Stack justifyContent='center' direction='row' spacing={2}>
            <ExpenseStat Icon={<AccountBalance sx={{fontSize: "70px", color: "text.secondary"}} />} header={"Total Balance"} amount={stats.balance} />
            <ExpenseStat Icon={<Savings sx={{fontSize: "70px", color: "text.secondary"}}/>} header={"Total Income"} amount={stats.income} />
            <ExpenseStat Icon={<ShoppingCartCheckout sx={{fontSize: "70px", color: "text.secondary"}}/>} header={"Total Expenses"} amount={-stats.expenses} />
        </Stack>
    )
}
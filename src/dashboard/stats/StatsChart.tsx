import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTransaction } from "../../hook/useTransactions";
import { useMemo } from "react";
export default function StatsChart() {
    const { transactions } = useTransaction(); 
    const colors = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6"];
    const chartData = useMemo(() => {
        const grouped: Record<string, number> = {};
        transactions.forEach((t) => {
            if (t.type !== "expense") return;
            if (!grouped[t.category]) {
                grouped[t.category] = 0;
            }
            grouped[t.category] += t.amount;
        });
        return Object.entries(grouped).map(([category, amount]) => ({
            category,
            amount,
        }));
    }, [transactions]);
    const formatCategory = (category: string) => {
        return category
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) => char.toUpperCase());
    }
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie 
                data={chartData} 
                dataKey={"amount"} 
                nameKey={"category"} 
                outerRadius={100}
                label={({ percent, name }) => 
                   `${formatCategory(name as string)} ${((percent ?? 0) * 100).toFixed(0)}%`
                }
                >
                    {transactions.map((_, index) => (
                        <Cell key={index} fill={colors[index % colors.length]}/>
                    ))}
                </Pie>
                <Tooltip formatter={(value, name) => [value, formatCategory(name as string)]}/>
                <Legend formatter={(value) => formatCategory(value)} />
            </PieChart>
        </ResponsiveContainer>
    );
}
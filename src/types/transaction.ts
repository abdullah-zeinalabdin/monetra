export type TransactionType = "income" | "expense";

export type Categories = 
| "food"
| "socialLife"
| "medical"
| "transport"

export type Transaction = {
    id: string,
    type: TransactionType,
    title: string,
    amount: number,
    category: Categories,
    date: string,
}

import { useState } from 'react'
import type { Transaction } from '../types/transaction'
import { TransactionContext } from '../context/TransactionsContext';
type Props = {
    children: React.ReactNode;
}
export function TransactionProvider( { children }: Props )  {
    const [transactions, setTransaction] = useState<Transaction[]>([]);

    const addTransaction = (t: Transaction) => {
        setTransaction((prev) => [t, ...prev]);
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};
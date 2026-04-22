import { useEffect, useState } from 'react'
import type { Transaction } from '../types/transaction'
import { TransactionContext } from '../context/TransactionsContext';
import { loadTransactions, saveTransactions } from '../utils/transactionStorage';
type Props = {
    children: React.ReactNode;
}
export function TransactionProvider( { children }: Props )  {
    const [transactions, setTransaction] = useState<Transaction[]>(loadTransactions);

    useEffect(() => {
        saveTransactions(transactions);
    }, [transactions])

    const addTransaction = (t: Transaction) => {
        setTransaction((prev) => [t, ...prev]);
    };

    const removeTransaction = (idToRemove: string) => {
        setTransaction((prev) => prev.filter(item => item.id !== idToRemove));
    };

    const editTransaction = (t: Transaction) => {
        setTransaction((prev) => prev.map((item) => item.id === t.id ? t : item))
    }
    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, removeTransaction, editTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};
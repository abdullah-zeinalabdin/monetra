import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionsContext'

export const useTransaction = () => {
    const context = useContext(TransactionContext);
    if(!context) {
        throw new Error("Use Transaction must be used inside Provider");
    }

    return context;
}
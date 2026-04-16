import { createContext } from "react";
import type { Transaction } from "../types/transaction";

type ContextType = {
    transactions: Transaction[];
    addTransaction: (t: Transaction) => void;
    removeTransaction: (idToRemove: string) => void;
}

export const TransactionContext = createContext<ContextType| null>(null);


import type { Transaction } from "../types/transaction";

const storageKey = "monetraTrans";

export function loadTransactions(): Transaction[] {
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : [];
};

export function saveTransactions(transactions: Transaction[]) {
    localStorage.setItem(storageKey, JSON.stringify(transactions));
}
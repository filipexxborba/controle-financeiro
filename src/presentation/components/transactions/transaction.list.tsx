import { Transaction } from "@/src/domain/entities/transaction";
import { TransactionCard } from "./transaction.card";

interface TransactionsListProps {
   transactions: Transaction[];
}

export const TransactionsList = ({ transactions }: TransactionsListProps) => {
   return (
      <div className="p-3 flex flex-col gap-3 mt-3 overflow-y-auto max-h-[50vh]">
         {transactions.map((transaction) => (
            <TransactionCard
               key={transaction.getId()}
               transaction={transaction}
            />
         ))}
      </div>
   );
};

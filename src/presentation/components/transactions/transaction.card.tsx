import { Transaction } from "@/src/domain/entities/transaction";
import { Card } from "../ui/card";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu";

interface TransactionCardProps {
   transaction: Transaction;
}

const TransactionCardIcon = ({ type }: { type: string }) => {
   switch (type) {
      case "expense":
         return (
            <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-red-500 bg-red-500/10">
               <LuArrowDownRight size={20} className="text-red-500" />
            </div>
         );
      case "income":
         return (
            <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-green-500 bg-green-100/50">
               <LuArrowUpRight size={20} className="text-green-500" />
            </div>
         );
      default:
         return (
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black">
               <MdQuestionMark size={20} />
            </div>
         );
   }
};

export const TransactionCard = ({ transaction }: TransactionCardProps) => {
   return (
      <Card className="shadow-none">
         <div className="flex flex-row items-start gap-4 p-4">
            <TransactionCardIcon type={transaction.getTypeValue()} />
            <div className="flex flex-col gap-1">
               <h2 className="font-semibold text-2xl text-slate-800">
                  {transaction.getAmount()}
               </h2>
               <p className="text-base text-slate-800 font-normal">
                  {transaction.getDescription()}
               </p>
               <div className="flex items-center gap-1 ">
                  <FaRegCalendarAlt className="text-slate-400" />
                  <span className="text-sm text-slate-400 font-normal">
                     {transaction.getDateTime()}
                  </span>
               </div>
            </div>
         </div>
      </Card>
   );
};

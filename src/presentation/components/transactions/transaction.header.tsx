import { Button } from "../ui/button";

export const TransactionHeaders = () => {
   return (
      <header className="px-3 flex flex-row justify-between items-center w-full mt-3">
         <h2 className="text-3xl font-medium text-slate-800">Movimentos</h2>
         <Button variant="outline">Adicionar</Button>
      </header>
   );
};

import { Button } from "../ui/button";

export const DashboardChart = () => {
   return (
      <div className="bg-slate-50 min-h-[40vh] w-full flex flex-row-reverse">
         <Button className="m-4 font-medium" variant="outline">
            Gerar relatório
         </Button>
      </div>
   );
};

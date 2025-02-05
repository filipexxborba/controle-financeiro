import { mockTransactions } from "@/src/domain/entities/transaction";
import { DashboardChart } from "@/src/presentation/components/financierDashboard/dashboard.chart";
import { TransactionHeaders } from "@/src/presentation/components/transactions/transaction.header";
import { TransactionsList } from "@/src/presentation/components/transactions/transaction.list";

const DashboardPage = () => {
   return (
      <main className="max-h-[100vh] overflow-y-hidden">
         <DashboardChart />
         <div>
            <TransactionHeaders />
            <TransactionsList transactions={mockTransactions} />
         </div>
      </main>
   );
};

export default DashboardPage;

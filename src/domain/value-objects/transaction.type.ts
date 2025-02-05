export class TransactionType {
   private label: string;
   private value: string;

   constructor(label: "income" | "expense") {
      const validTypes: Record<"income" | "expense", string> = {
         income: "Income",
         expense: "Expense",
      };

      if (!validTypes[label]) {
         throw new Error("Invalid transaction type");
      }

      this.label = validTypes[label];
      this.value = label;
   }

   getValue() {
      return this.value;
   }
}

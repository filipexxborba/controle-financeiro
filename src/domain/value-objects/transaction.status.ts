export class TransactionStatus {
   private label: string;
   private value: string;

   constructor(label: "completed" | "canceled") {
      const validStatus: Record<"completed" | "canceled", string> = {
         completed: "Completed",
         canceled: "Canceled",
      };

      if (!validStatus[label]) {
         throw new Error("Invalid transaction status");
      }

      this.label = validStatus[label];
      this.value = label;
   }

   getValue() {
      return this.value;
   }
}

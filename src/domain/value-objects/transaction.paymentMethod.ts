export class TransactionPaymentMethod {
   private label: string;
   private value: string;

   constructor(label: "credit_card" | "pix" | "cash") {
      const validPaymentMethods: Record<
         "credit_card" | "pix" | "cash",
         string
      > = {
         credit_card: "Cartão de crédito",
         pix: "Pix",
         cash: "Dinheiro",
      };

      if (!validPaymentMethods[label]) {
         throw new Error("Invalid transaction payment method");
      }

      this.label = validPaymentMethods[label];
      this.value = label;
   }

   toString() {
      return this.label;
   }

   getValue() {
      return this.value;
   }
}

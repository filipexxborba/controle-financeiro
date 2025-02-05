export class TransactionAmount {
   private value: number;

   constructor(value: number) {
      if (value <= 0) {
         throw new Error("Invalid transaction amount");
      }

      this.value = value;
   }

   toString() {
      return this.value.toLocaleString("pt-BR", {
         style: "currency",
         currency: "BRL",
      });
   }
}

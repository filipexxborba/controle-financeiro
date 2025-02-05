import { TransactionAmount } from "../value-objects/transaction.amount";
import { TransactionPaymentMethod } from "../value-objects/transaction.paymentMethod";
import { TransactionStatus } from "../value-objects/transaction.status";
import { TransactionType } from "../value-objects/transaction.type";

export class Transaction {
   private id: string;
   private amount: TransactionAmount;
   private description: string;
   private date: Date;
   private type: TransactionType;
   private status: TransactionStatus;
   private paymentMethod: TransactionPaymentMethod;

   constructor(
      id: string,
      amount: number,
      description: string,
      date: Date,
      type: "income" | "expense",
      status: string,
      paymentMethod: string
   ) {
      this.type = new TransactionType(type as "income" | "expense");
      this.status = new TransactionStatus(status as "completed" | "canceled");
      this.amount = new TransactionAmount(amount);
      this.paymentMethod = new TransactionPaymentMethod(
         paymentMethod as "credit_card" | "pix" | "cash"
      );
      this.id = id;
      this.description = description;
      this.date = date;
   }

   getId() {
      return this.id;
   }

   getAmount() {
      return this.amount.toString();
   }

   getDescription() {
      return this.description;
   }

   getDate() {
      return this.date.toLocaleDateString();
   }

   getDateTime() {
      return this.date.toLocaleString();
   }

   getPaymentMethodValue() {
      return this.paymentMethod.getValue();
   }

   getStatusValue() {
      return this.status.getValue();
   }

   getTypeValue() {
      return this.type.getValue();
   }
}

export const mockTransactions: Transaction[] = [
   new Transaction(
      "1",
      100,
      "Salário mensal recebido",
      new Date("2023-01-01"),
      "income",
      "completed",
      "credit_card"
   ),
   new Transaction(
      "2",
      50,
      "Compras de supermercado",
      new Date("2023-01-02"),
      "expense",
      "completed",
      "cash"
   ),
   new Transaction(
      "3",
      200,
      "Pagamento de freelancer",
      new Date("2023-01-03"),
      "income",
      "completed",
      "pix"
   ),
   new Transaction(
      "4",
      30,
      "Transporte público diário",
      new Date("2023-01-04"),
      "expense",
      "completed",
      "cash"
   ),
   new Transaction(
      "5",
      150,
      "Bônus anual recebido",
      new Date("2023-01-05"),
      "income",
      "completed",
      "credit_card"
   ),
   new Transaction(
      "6",
      70,
      "Pagamento de contas",
      new Date("2023-01-06"),
      "expense",
      "completed",
      "pix"
   ),
   new Transaction(
      "7",
      120,
      "Investimento em ações",
      new Date("2023-01-07"),
      "income",
      "completed",
      "credit_card"
   ),
   new Transaction(
      "8",
      40,
      "Jantar com amigos",
      new Date("2023-01-08"),
      "expense",
      "completed",
      "cash"
   ),
   new Transaction(
      "9",
      90,
      "Presente de aniversário",
      new Date("2023-01-09"),
      "income",
      "completed",
      "pix"
   ),
   new Transaction(
      "10",
      60,
      "Entretenimento no cinema",
      new Date("2023-01-10"),
      "expense",
      "completed",
      "credit_card"
   ),
   new Transaction(
      "11",
      80,
      "Compra de roupas novas",
      new Date("2023-01-11"),
      "expense",
      "completed",
      "credit_card"
   ),
   new Transaction(
      "12",
      110,
      "Venda de itens usados",
      new Date("2023-01-12"),
      "income",
      "completed",
      "pix"
   ),
   new Transaction(
      "13",
      45,
      "Almoço no restaurante",
      new Date("2023-01-13"),
      "expense",
      "completed",
      "cash"
   ),
   new Transaction(
      "14",
      95,
      "Pagamento de aluguel",
      new Date("2023-01-14"),
      "expense",
      "completed",
      "pix"
   ),
   new Transaction(
      "15",
      130,
      "Recebimento de comissão",
      new Date("2023-01-15"),
      "income",
      "completed",
      "credit_card"
   ),
];

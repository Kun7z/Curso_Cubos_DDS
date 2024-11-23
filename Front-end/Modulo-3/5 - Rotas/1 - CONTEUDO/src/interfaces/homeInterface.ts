export interface ITransactionInput {
    description: string;
    price: number;
}

export interface ITransaction {
    id: string;
    description: string;
    price: number;
}

export interface IDataTransaction {
    data: ITransaction[];
}
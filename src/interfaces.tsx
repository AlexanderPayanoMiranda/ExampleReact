export interface AppName {
    name: string;
}

export interface Address {
    houseNo: number;
    street: string;
    town: string;
}

export interface Student {
    name: string;
    surname: string;
    level?: string;
    age?: number;
    address?: Address;
}
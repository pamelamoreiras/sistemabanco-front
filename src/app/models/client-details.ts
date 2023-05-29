import { Account } from "./account";

export interface ClientDetails {
    id?:         any;
    name:     String;
    document: String;
    address:  String;
    accounts: Account[];
}
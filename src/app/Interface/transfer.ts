import { Client } from "./Client"

export interface Transfer{
    id:number
    sendingClient:Client
    recievingClient:Client
    montant:number
    date:Date
}
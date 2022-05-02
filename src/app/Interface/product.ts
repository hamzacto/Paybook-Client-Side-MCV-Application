import {Client} from "./Client";

export interface product {
    id:number
    name:string
    price:number
    categorie:string
    brand:string
    dateFabrication:string
    modelId:string
    image:string
    vendor:Client
}
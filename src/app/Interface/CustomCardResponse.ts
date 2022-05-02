import { cards } from "./card";

export interface CustomCardResponse{
    timeStamp:Date;
    statusCode:number;
    status:string;
    message:string;
    raison:string;
    developerMessage:string;
    data:{cards:cards[],card?:cards};
}
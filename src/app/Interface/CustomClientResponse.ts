import { Client } from "./Client";

export interface CustomClientResponse{
    timeStamp:Date;
    statusCode:number;
    status:string;
    message:string;
    raison:string;
    developerMessage:string;
    data:{clients?:Client[],client:Client};

}
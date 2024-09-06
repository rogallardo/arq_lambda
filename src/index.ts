import { APIGatewayEvent } from "aws-lambda";
import { initializeDatabase } from "./utils/db";
import connectDBMongo from "./utils/dbMongo";
import {z} from 'zod';
import { DataSource } from "typeorm";

export const handler = async (event: APIGatewayEvent) => {
  try {
    let secretdb = process.env.SECRETDB? process.env.SECRETDB: "";
    let secretdbmongo = process.env.SECRETDBMONGO? process.env.SECRETDBMONGO: "";


    let response = {
      estado:"OK"
    };
    // const conexionMongo = await connectDBMongo(secretdbmongo);
    // conexiondb = await initializeDatabase(secretdb,conexiondb!);
    //example error
    //throw new HttpError(400,"No se encontro la atencion");
  console.log('hola desde lambda')
    return 
  }catch (e) {
    let statusCode = 500;
    let response = {
      estado:"NOK",
      codeStatus: statusCode
    };
    if(e instanceof z.ZodError){
      statusCode = 400;
    }else if(e instanceof HttpError){
      statusCode = e.statusCode;
    }
    console.log("error", e);
    response.codeStatus = statusCode;
    return genResponse(statusCode,response);
  }
  
}

class HttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}
let conexiondb:DataSource;

let genResponse =(statusCode:number, objResponse:Object)=>{
  return {
    statusCode: statusCode,
    body: JSON.stringify(objResponse),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }
  };
}

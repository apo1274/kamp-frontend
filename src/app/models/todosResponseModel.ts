import { ResponseModel } from "./responseModel";
import { Todos } from "./todo";

export interface TodosResponseModel extends ResponseModel{
    data:Todos[]   

}
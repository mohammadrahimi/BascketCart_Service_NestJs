import { DtoProduct } from "./DtoProduct";



export class DtoBascket  {
    Id:    string;
    products:     DtoProduct[];
    totalPrice:   number;
}
import { Ship } from "./ship"

export interface ResponseListShip {
   count:number;
   next:string;
   previous:string;
   results:Array<Ship>;
}


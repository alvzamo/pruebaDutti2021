import { Injectable } from '@angular/core';
import { TableConfig } from 'src/app/api-rest/model/tableConfig';

@Injectable()
export class SharedService {
    tableConfig: TableConfig=<TableConfig>{currentPage:1,count:0 };
    constructor() {
    }

    public setTableConfig(count:number, next:string, previous:string){
        
        this.tableConfig.count=count;
        this.tableConfig.next=next;
        this.tableConfig.previous=previous;
        console.log("table set", this.tableConfig);
    }

    public  getTableConfig(){
        console.log("table get", this.tableConfig);

        return  this.tableConfig;
    }

    public  getCurrentPage(){
        console.log("getcurre", this.tableConfig);
        return  this.tableConfig.currentPage;
    }

    public  setCurrentPage(page){
        console.log("setcurre", this.tableConfig);

          this.tableConfig.currentPage=page;
          console.log("setcurre2", this.tableConfig);

    }
}


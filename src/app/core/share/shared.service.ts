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
    }

    public  getTableConfig(){
        return  this.tableConfig;
    }

    public  getCurrentPage(){
        return  this.tableConfig.currentPage;
    }

    public  setCurrentPage(page){
          this.tableConfig.currentPage=page;
    }
}


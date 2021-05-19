import { Injectable } from '@angular/core';
import { TableConfig } from 'src/app/api-rest/model/tableConfig';
import { User } from 'src/app/api-rest/model/user';

@Injectable()
export class SharedService {
    tableConfig: TableConfig=<TableConfig>{currentPage:1,count:0 };
    user:User;
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

    public setUser(user:User){
        this.user=user;
    }
    public getUser(){
       return this.user;
    }
}


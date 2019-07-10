import {Component, OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';

@Component({
    selector:'search-comp',
    templateUrl:'searchemployee.html'
})

export class SearchEmployeeComponent implements OnInit{
    empId:number;
    constructor(private service:EmployeeService){}
    empAll:any[]=[];
    searchedList : any[];
    empid:number;
    ngOnInit(){
       this.empAll=this.service.getAllEmployee();
    }
    search(id){
        {
          this.empid=parseInt(id);
          this.searchedList = this.empAll.filter(o => o.empId === this.empid);
          }
        }

    }

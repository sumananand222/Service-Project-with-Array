import {Component, OnInit, Input} from '@angular/core';
import { EmployeeService } from './app.employeeservice';

@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent implements OnInit{
    constructor(private service:EmployeeService){}
    
    empShowAll:any[]=[];
    
    ngOnInit(){
        this.empShowAll=this.service.getAllEmployee();
    }

    deleteEmployee(i:number){
        this.empShowAll.splice(i,1);
    }
}
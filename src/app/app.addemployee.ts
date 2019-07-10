import {Component} from '@angular/core';
import { EmployeeService } from './app.employeeservice';
import { Router } from '@angular/router';

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{
    constructor(private service:EmployeeService,private router:Router){}
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;
    myallData:any;
    addData():any{
        this.myallData={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment};
        if(this.service.addEmployee(this.myallData)){
            this.router.navigate(['show']);
        }
 }
}
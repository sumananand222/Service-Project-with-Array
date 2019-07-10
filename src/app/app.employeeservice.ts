import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn:"root"
    
})

export class EmployeeService{
    constructor(private http:HttpClient){}

    empAll:any[]=[
        {empId:1001,empName:"Akshat",empSalary:90000,empDepartment:"BI"},
        {empId:1002,empName:"Hardika",empSalary:80770,empDepartment:"FS"},        
        {empId:1003,empName:"Kalyani",empSalary:98800,empDepartment:"JAVA"}
    ];
    searchedList : any;
    getAllEmployee(){
        // return this.http.get("assets/employee.json");
        return this.empAll;
    }
    addEmployee(data:any){
        this.empAll.push(data);
        return true;
    }
}

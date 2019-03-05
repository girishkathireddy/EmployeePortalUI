import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filter = new BehaviorSubject<Employee[]>(null);
  currentFilter = this.filter.asObservable();
  dataSource: Employee[] = [];
  constructor(private employeeService:EmployeeService) { }

  changeFilter(message: string,sortOrder:string) {
    this.employeeService.getDataByFilter(message,sortOrder).subscribe(data=>{
                   this.dataSource=data;
                   this.filter.next(this.dataSource)
              },
              err=>{
                    console.error(err)
              }
            );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

const BASE_URL='http://localhost:8080/portal/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${BASE_URL}/getAll`);
  }

  getDataByFilter(message:string,sortOrder:string):Observable<Employee[]>{
    if(sortOrder==='asc')
     return this.httpClient.get<Employee[]>(`${BASE_URL}/filter?sortBy=${message}`);
    else
     return this.httpClient.get<Employee[]>(`${BASE_URL}/filter?sortBy=${message}&sort=${sortOrder}`);     
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${BASE_URL}/get/${id}`);
  }

  addEmployee(body:Employee):Observable<string>{
   return this.httpClient.post<string>(`${BASE_URL}/save`,body);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { FilterService } from '../../services/filter.service';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private filterService:FilterService,
    private router: Router) { }
  
  displayedColumns: string[] = ['name', 'hiredate', 'email','salary'];
  public dataSource = new MatTableDataSource<Employee>();
  isDataLoaded: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;



  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.isDataLoaded=true;
      },
      err=>{
        console.error(err)
      }
     );

    this.filterService.currentFilter.subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.isDataLoaded=true;
    },
    err=>{
      console.error(err)
    });

  }


  saveBtnHanlder(){
    this.router.navigate(['dashboard','employee','add']);
  }
   
}

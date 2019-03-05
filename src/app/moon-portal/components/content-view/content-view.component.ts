import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private employeeService:EmployeeService) { }
  viewid:number;  
  employee:Employee;
  isDataLoaded: boolean;

  ngOnInit() {
        this.viewid=+this.route.snapshot.paramMap.get('id');

        this.employeeService.getEmployeeById(this.viewid).subscribe(data=>{
          this.employee=data;
          this.isDataLoaded=true;
        },
        err=>{
          console.error(err)
        }
      );
  }

}

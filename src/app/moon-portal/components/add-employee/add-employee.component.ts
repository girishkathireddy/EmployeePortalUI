import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 employeeForm: FormGroup;

 constructor(private fb: FormBuilder,
  private employeeService:EmployeeService,
  private snackBar: MatSnackBar,
  private router:Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.employeeForm=this.fb.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',[Validators.required, Validators.email]],
        hireDate:['',Validators.required],
        salary:['',Validators.required],
        address:['',Validators.required],
        zipcode:['',Validators.required],
        phoneNumber:['',Validators.required],
        title:['',Validators.required]
    });
  }

  onSubmit(){
  this.employeeService.addEmployee(this.employeeForm.value).subscribe(
    data=>{
      this.snackBar.open("Employee Saved", "Success", {
        duration: 2000,
      });
      this.employeeForm.reset();
      this.router.navigate(['dashboard']);
    },
    err =>{
      console.log(err);
    });
  }

  toDashBoard(){
    this.router.navigate(['dashboard']);
  }

}

import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  student;
  selectedStudent;
  public students = [];
  
  constructor(private homeService:HomeServiceService) {}

  ngOnInit(): void {
    this.students = this.homeService.getStudents();
  }
    
  public selectStudent(student){
    this.selectedStudent = student;
  } 
  
}
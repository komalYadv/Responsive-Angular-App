import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

    students = [
      {id: 500, name: "Heena", description: "Heena Details", email: "xyz@gmail.com"},
      {id: 501, name: "Ansh", description: "Ansh Details", email: "abc@gmail.com"},
      {id: 502, name: "Kanak", description: "Kanak Details", email: "def@gmail.com"},
      {id: 504, name: "Divyanshi", description: "Divyanshi Details", email: "mno@gmail.com"},
      {id: 505, name: "Aakriti", description: "Aakriti Details", email: "pqr@gmail.com"}
    ]; 
    constructor() {}
    
    public getStudents(): Array<{id, name, description, email}>{
      return this.students;
    }
    
    
    public createStudent(students: {id, name, description, email}){
      this.students.push(students);
    }
}

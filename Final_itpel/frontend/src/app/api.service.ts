import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'appplication/json');
    this.headers.append('Content-Type', 'appplication/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    
  }
  addStudent(data){
    return this.http.post('http://localhost/final_itpel/backend/create.php', data);
  }

  getStudents(){
    return this.http.get('http://localhost/final_itpel/backend/getStudents.php');
  }
  deleteStudent(id){
    return this.http.delete('http://localhost/final_itpel/backend/delete.php?id='+id);
  }
  getStudent(id){
    return this.http.get('http://localhost/final_itpel/backend/single.php?id='+id);
  }
  updateStudent(id, data){
    return this.http.put('http://localhost/final_itpel/backend/Update.php?id='+id,data);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  student_num: any;
  student_name: any;
  student_course: any;
  gender:any;
  student_year: any;
  address: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService,

  ) {
    this.route.params.subscribe((param:any) => {
      this.student_num = param.id;
      console.log(this.student_num);
      this.getStudent(this.student_num)
    })
   }

  ngOnInit() {
  }
  getStudent(id){
    this._apiService.getStudent(id).subscribe((res:any) =>{
      console.log("Success", res);
      let student = res[0];
      this.student_num = student.id;
      this.student_name = student.name;
      this.gender = student.gender;
      this.student_course = student.course;
      this.student_year = student.year;
      this.address = student.Address;
    }, (err:any) => {
      console.log("Error", err);
    })
  }

  updateStudent(){
    let data = {
      student_num: this.student_num,
      student_name: this.student_name,
      gender: this.gender,
      student_course: this.student_course,
      student_year: this.student_year,
      address: this.address,
    }
    this._apiService.updateStudent(this.student_num,data).subscribe((res:any) =>{
      console.log("Success", res);
      this.router.navigateByUrl('/home');
    }, (err:any) => {
      console.log("Error", err);
    })
  }

}

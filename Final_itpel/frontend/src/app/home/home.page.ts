import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  student_num: any;
  student_name: any;
  gender: any;
  student_course: any;
  student_year: any;
  address: any;
  students: any = [];

  constructor(
    public _apiService: ApiService,
    public alertController: AlertController
  ) {
    
  }


    addStudent(){
      let data = {
        student_num: this.student_num,
        student_name: this.student_name,
        gender: this.gender,
        student_course: this.student_course,
        student_year: this.student_year,
        address: this.address,
      }
      this._apiService.addStudent(data).subscribe((res:any) => {
        console.log("Success", res);
        this.student_num = '';
        this.student_name = '';
        this.gender = '';
        this.student_course = '';
        this.student_year = '';
        this.address = '';
        alert('SUCCESS');
        this.getStudents();
      },(error: any) => {
        alert('ERROR');
        console.log("ERROR ==" , error);
      })
    }

      getStudents(){
        this._apiService.getStudents().subscribe((res:any) => {
          console.log("Success", res);
          this.students = res;
        },(error: any) => {
          console.log("ERROR ==" , error);
        })
      } 
      deleteStudent(id){
        this._apiService.deleteStudent(id).subscribe((res:any) => {
          console.log("SUCCESS");
          alert("The data is removed");
          this.getStudents();
        },(error:any) =>{
          console.log("ERROR");
        })
      }

      refreshPage(e){
        this.getStudents();
        setTimeout(()=>{
          console.log('Async Operation has ended');
          e.target.complete();
        }, 2000);
      }
      
      async addConfirm() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Confirm!',
          message: 'Do you really want to <strong> Add </strong> to the <strong> database </strong>?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Cancel!');
              },
            },
            {
              text: 'Okay',
              handler: () => {
                this.addStudent();
                this.getStudents();
                console.log(this.students);
                console.log(this.student_num);
                console.log('Confirm Okay');
              },
            },
          ],
        });
    
        await alert.present();
      }

    }



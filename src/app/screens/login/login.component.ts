import { Input, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// constants
import { ADMIN, USER } from 'src/app/utils/constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){ }

  @Input() error: string | null='';
  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  // submit action while user hits login button : Kunvar Singh (27-Aug-2023)
  submit() {
    if (this.form.valid) {
      const response = this.authenticateCredentials();
      if(response.status){
        this.router.navigate([response.route]);
        Swal.fire('Success!', 'Login successfully.', 'success');
      }else Swal.fire('Error!', 'Invalid credentials.', 'error');
    }else{
      Swal.fire('Error!', 'Please fill mandatory fields.', 'error');
    }
  }

  // below method is used for verifying the user credentials : Kunvar Singh (27-Aug-2023)
  authenticateCredentials(){
    const userName = this.form.value.username;
    const password = this.form.value.password;
    this.saveCredentials(userName,password);
    if(userName===ADMIN && password===ADMIN){
      return {status : true,route:'/adminView'}
    }
    else if(userName===USER && password===USER){
      return {status : true,route:'/userView'}
    }
    else {
      return {status:false,route:'/'}; // sending user to default route
    }
  }

  // Storing the credentials in localstorage  : Kunvar Singh (27-Aug-2023)
  saveCredentials(userName:string,password:string){
    localStorage.setItem('username',userName);
    localStorage.setItem('password',password);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    HttpClientModule  ,
    RouterModule
    
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
     
      this.http.post('http://localhost:3000/api/register', this.signupForm.value)
        .subscribe(
          response => {
            console.log('User registered successfully', response);
            alert('User registered successfully');
            this.signupForm.reset(); 
          },
          error => {
            console.error('Error registering user', error);
            alert('Failed to register user');
          }
        );
    } else {
      alert('Please fill all the required fields');
    }
  }


}

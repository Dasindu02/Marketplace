import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    HttpClientModule,   
    RouterModule        
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router 
  ) {}

  ngOnInit(): void {
 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/api/login', this.loginForm.value)
        .subscribe(
          (response: any) => {
            console.log('Full response from server:', response);  

            if (response.token) {
              
              localStorage.setItem('token', response.token);
              localStorage.setItem('user', JSON.stringify(response.user));  

              console.log('Token and user data stored:', response.token, response.user);
              
              
              this.router.navigate(['/category']);
            } else {
              alert('Login failed. No token received.');
            }
          },
          error => {
            console.error('Error logging in', error);
            alert('Failed to log in. Please check your credentials.');
          }
        );
    } else {
      alert('Please fill all the required fields');
    }
  }
}

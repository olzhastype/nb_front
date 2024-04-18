import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRepository } from '../../store/auth.repository';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  phoneNumber: string = '';
  verificationCode: string = '';
  isPhoneVerified: boolean = false;

  // Injecting the AuthRepository service  
  constructor(public authRepository: AuthRepository) { }

  // Function to handle phone number verification
  verifyPhoneNumber(): void {
    console.log('Verifying phone number...');
    
    this.authRepository.verifyPhoneNumber(this.phoneNumber);
  }

  // Function to handle verification code submission
  submitVerificationCode(): void {
    // Your code to submit the verification code entered by the user
    // and handle the verification process
  }
}

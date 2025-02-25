import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tdf-form',
  imports:[FormsModule],
  templateUrl: './tdf-form.component.html',
  styleUrl: './tdf-form.component.css'
})
export class TdfFormComponent {
  user = { name: '', email: '' };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.submitUser(this.user).subscribe(
      response => {
        console.log('Form submitted successfully:', response);
        alert('User data submitted successfully!');
      },
      error => {
        console.error('Error submitting form:', error);
        alert('Error submitting data.');
      }
    );
  }
}

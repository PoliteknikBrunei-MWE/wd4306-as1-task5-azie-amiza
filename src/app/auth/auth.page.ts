import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AuthPage implements OnInit {
  login() {
    // Perform authentication here

    // If authentication is successful, navigate to the desired route
    this.router.navigate(['/dashboard']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

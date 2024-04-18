import { Component, OnInit } from '@angular/core';
import { AuthRepository } from '../../store/auth.repository';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  providers: [AuthRepository],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  async createOrder() {
      this.router.navigate(['/create-order'])
  }
}

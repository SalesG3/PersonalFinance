import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankComponent } from './bank/bank.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BankComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interface';
}

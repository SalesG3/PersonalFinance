import { Component, OnInit } from '@angular/core';
import { BankDetailingComponent } from './bank-detailing/bank-detailing.component';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [BankDetailingComponent],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Para configurar o style do bank detailing
    this.dataTable = true;
    this.detailing = false;
  }

  detailing : boolean = true;
  dataTable : boolean = false;

  showMessage ():void {
    this.dataTable = true;
    this.detailing = false;
  }
}

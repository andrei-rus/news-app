import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  private spinner: HTMLElement;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinner = document.getElementById('spinner');
    this.spinnerService.getSpinnerObs().subscribe((val) => {
      this.toggleSpinner(val);
    });
  }

  private toggleSpinner(state: boolean): void {
    const displayStatus = state ? "block": "none";
    this.spinner.style.display = displayStatus;
  }
}

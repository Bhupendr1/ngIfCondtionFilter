import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngIfelseThen';
  FilterForm!: FormGroup
  Results: any[]=[];
  errorMessage: string = '';
  showResultContainer=false;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.FilterForm = this.fb.group({
      selectedOption: [0],
      BillType: [-1],
      RadioBtn: [],
      Name: []
    })

  }
}

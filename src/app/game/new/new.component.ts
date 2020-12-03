import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  table = [1][1];
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    const {required, min} = Validators;

    this.form = this.fb.group({
      rows: [3, [required, min(1)]],
      cols: [6, [required, min(1)]]
    });
  }

  ngOnInit(): void {
    this.drawGrid(this.form.value.rows, this.form.value.cols);
  }

  drawGrid(rows: number, cols: number): void{
    this.table = [1][1];
    this.table = [this.form.value.rows] [this.form.value.cols];
    console.log(rows, cols);
  }
}

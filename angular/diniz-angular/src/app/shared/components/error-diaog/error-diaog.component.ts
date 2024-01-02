import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-diaog',
  templateUrl: './error-diaog.component.html',
  styleUrls: ['./error-diaog.component.css']
})
export class ErrorDiaogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
  }

}

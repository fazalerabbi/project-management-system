import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() project;
  @ViewChild('form') projectCreateForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.projectCreateForm);
  }
}

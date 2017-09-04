import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() task;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.task);
  }

}

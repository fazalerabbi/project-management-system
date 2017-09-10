import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() isInvalid: boolean;
  @Input() isTouched: boolean;
  constructor() { }

  ngOnInit() {
  }

}

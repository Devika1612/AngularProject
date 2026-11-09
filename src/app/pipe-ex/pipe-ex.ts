import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FieldsPipe } from '../custompipes/fields-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe,FieldsPipe,JsonPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
})
export class PipeEx {
  studentName:string="devika";

  studentObj:any={
    name:'AAA',
    mobile:'98669'
  }
}

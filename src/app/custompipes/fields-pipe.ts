import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fields',
})
export class FieldsPipe implements PipeTransform {
  transform(value: any): unknown {
    if(value!=null && value!==undefined && value!=''){
      return value;
    }else{
    return "NA";
    }
  }
}

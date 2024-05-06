
import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  standalone: true,
  name: "ReplaceComma"
})

export class ReplaceComma implements PipeTransform {
  transform(value: String): String {
    if(!!value){
      return value.replace(/,/g,'.')

    }else{
      return '';
    }
  }

}

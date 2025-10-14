import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squares',
  standalone: false
})
export class SquaresPipe implements PipeTransform {

  transform(value: any) {
      // return value.filter((i:any)=>i.length>5)
      return value**2
  }

}

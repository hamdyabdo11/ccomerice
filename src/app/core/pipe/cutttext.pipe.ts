import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutttext',
  standalone: true
})
export class CutttextPipe implements PipeTransform {

  transform(text:string,limit:number): string {

    return text.split(' ').slice(0,limit).join(' ');
   }

}

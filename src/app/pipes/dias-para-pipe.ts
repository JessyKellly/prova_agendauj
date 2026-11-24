import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasPara',
})
export class DiasParaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

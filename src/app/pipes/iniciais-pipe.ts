import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniciais',
})
export class IniciaisPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formaPagamento',
})
export class FormaPagamentoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

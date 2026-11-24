import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniciais',
  standalone: true
})
export class IniciaisPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    const limpo = value.trim();
    if (!limpo) return '';

    const ignorados = ['de', 'da', 'do', 'das', 'dos', 'e'];
    const partes = limpo
      .toLowerCase()
      .split(/\s+/)
      .filter(p => !ignorados.includes(p));

    if (partes.length === 0) return '';
    
    const primeiraLetra = partes[0][0] || '';
    const ultimaLetra = partes.length > 1 ? partes[partes.length - 1][0] || '' : '';

    return (primeiraLetra + ultimaLetra).toUpperCase();
  }
}
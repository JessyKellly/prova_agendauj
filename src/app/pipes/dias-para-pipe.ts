import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasPara',
  standalone: true
})
export class DiasParaPipe implements PipeTransform {
  transform(value: string | null | undefined, hoje: Date = new Date()): string {
    if (!value) return '';

    const partes = value.split('-').map(Number);
    if (partes.length !== 3) return value;

    const [ano, mes, dia] = partes;
    const dataEventoUTC = Date.UTC(ano, mes - 1, dia);
    const hojeUTC = Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    
    const diffMs = dataEventoUTC - hojeUTC;
    const diffDias = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffDias === 0) return 'Hoje';
    if (diffDias === 1) return 'Amanhã';
    if (diffDias <= -1) return 'Encerrado';
    return `Faltam ${diffDias} dias`;
  }
}
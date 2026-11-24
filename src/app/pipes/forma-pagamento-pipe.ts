import { Pipe, PipeTransform } from '@angular/core';

export type FormaPagamento = 'pix' | 'cartao' | 'boleto' | 'dinheiro' | '';

@Pipe({
  name: 'formaPagamento',
  standalone: true
})
export class FormaPagamentoPipe implements PipeTransform {
  private mapaPagamento: Record<FormaPagamento, string> = {
    pix: 'Pix',
    cartao: 'Cartão de crédito',
    boleto: 'Boleto',
    dinheiro: 'Dinheiro',
    '': 'Não informado'
  };

  transform(value: string | null | undefined): string {
    if (!value) return this.mapaPagamento[''];
    const chave = value.toLowerCase() as FormaPagamento;
    return this.mapaPagamento[chave] || value;
  }
}
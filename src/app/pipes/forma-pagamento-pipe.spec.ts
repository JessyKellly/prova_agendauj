import { FormaPagamentoPipe } from './forma-pagamento-pipe';

describe('FormaPagamentoPipe', () => {
  const pipe = new FormaPagamentoPipe();

  it('converte pix', () => { expect(pipe.transform('pix')).toBe('Pix'); });
  it('converte cartao', () => { expect(pipe.transform('cartao')).toBe('Cartão de crédito'); });
  it('converte boleto', () => { expect(pipe.transform('boleto')).toBe('Boleto'); });
  it('converte dinheiro', () => { expect(pipe.transform('dinheiro')).toBe('Dinheiro'); });
  it('converte vazio ou null para Não informado', () => { 
    expect(pipe.transform('')).toBe('Não informado');
    expect(pipe.transform(null)).toBe('Não informado');
  });
});
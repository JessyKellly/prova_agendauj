import { IniciaisPipe } from './iniciais-pipe';

describe('IniciaisPipe', () => {
  const pipe = new IniciaisPipe();

  it('extrai iniciais de nome completo ignorando preposições', () => {
    expect(pipe.transform('Maria da Silva Santos')).toBe('MS');
  });

  it('trata espaços sobrando e minúsculas', () => {
    expect(pipe.transform(' joão guedes de brito ')).toBe('JB');
  });

  it('trata nome único', () => {
    expect(pipe.transform('Ana')).toBe('A');
  });

  it('retorna vazio para string vazia', () => {
    expect(pipe.transform('')).toBe('');
  });
});
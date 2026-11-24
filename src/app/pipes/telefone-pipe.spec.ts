import { TelefonePipe } from './telefone-pipe';

describe('TelefonePipe', () => {
  const pipe = new TelefonePipe();

  it('formata celular com 11 dígitos', () => {
    expect(pipe.transform('71988887777')).toBe('(71) 98888-7777');
  });

  it('formata fixo com 10 dígitos', () => {
    expect(pipe.transform('7133334444')).toBe('(71) 3333-4444');
  });

  it('mantém formatação correta se já estiver formatado', () => {
    expect(pipe.transform('(71) 98888-7777')).toBe('(71) 98888-7777');
  });

  it('devolve o valor original se não reconhecer', () => {
    expect(pipe.transform('123')).toBe('123');
  });

  it('retorna vazio se null ou undefined', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform('')).toBe('');
  });
});
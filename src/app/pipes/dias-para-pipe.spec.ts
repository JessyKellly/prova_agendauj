import { DiasParaPipe } from './dias-para-pipe';

describe('DiasParaPipe', () => {
  const pipe = new DiasParaPipe();
  const hojeSimulado = new Date(2026, 10, 10); // 10/11/2026

  it('retorna Hoje', () => {
    expect(pipe.transform('2026-11-10', hojeSimulado)).toBe('Hoje');
  });

  it('retorna Amanhã', () => {
    expect(pipe.transform('2026-11-11', hojeSimulado)).toBe('Amanhã');
  });

  it('retorna contagem de dias futuros', () => {
    expect(pipe.transform('2026-11-20', hojeSimulado)).toBe('Faltam 10 dias');
    expect(pipe.transform('2026-12-01', hojeSimulado)).toBe('Faltam 21 dias');
  });

  it('retorna Encerrado para datas passadas', () => {
    expect(pipe.transform('2026-11-09', hojeSimulado)).toBe('Encerrado');
  });

  it('retorna vazio se não houver data', () => {
    expect(pipe.transform('', hojeSimulado)).toBe('');
  });
});
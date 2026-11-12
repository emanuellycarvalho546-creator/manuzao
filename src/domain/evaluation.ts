export const weights = [0.30, 0.30, 0.25, 0.15] as const;
export const criteria = [
  'Criatividade e inovação',
  'Clareza da apresentação',
  'Relevância e impacto',
  'Demonstração e resultados'
] as const;
export type Scores = [number, number, number, number];
export function validateScores(value: unknown): value is Scores {
  return Array.isArray(value) && value.length === 4 &&
    value.every(n => Number.isInteger(n) && n >= 1 && n <= 5);
}
export function weightedScore(scores: Scores): number {
  if (!validateScores(scores)) throw new Error('Informe quatro notas inteiras de 1 a 5.');
  return Math.round(scores.reduce((sum, n, i) => sum + n * weights[i], 0) * 100) / 100;
}
export function normalizeSearch(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim();
}
export type RankingEntry = { id:string; title:string; modality:string; count:number; average:number; criteriaAverages:number[] };
export function rankEntries(entries: RankingEntry[], minimum=5): RankingEntry[] {
  return [...entries].sort((a,b) => {
    const aEligible=a.count>=minimum, bEligible=b.count>=minimum;
    if (aEligible!==bEligible) return aEligible ? -1 : 1;
    if (aEligible && bEligible && a.average!==b.average) return b.average-a.average;
    return a.id.localeCompare(b.id);
  });
}

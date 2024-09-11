export type Pokemon = {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export type PokemonBattleResult = {
  winner: Pokemon;
  turns: number;
}

export type CombatInput = { id1: string, id2: string };
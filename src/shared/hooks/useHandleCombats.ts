import { useCallback, useEffect, useState } from "react";
import { CombatInput, Pokemon, PokemonBattleResult } from "../types";
import { fetchData } from "../connection";
import axios from "axios";

export const useHandleCombats = (pokemons: Pokemon[]) => {
  const [combatResult, setCombatResult] = useState<PokemonBattleResult>();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [defender, setDefender] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedPokemon) return;
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const randomDefender = pokemons[randomIndex];
    setDefender(randomDefender);
  }, [selectedPokemon, pokemons]);

  const handleCombat: (combat: CombatInput) => void = useCallback(async (combat: CombatInput) => {
    setLoading(true);
    await axios.post("http://localhost:3001/creatures/fight", combat)
    .then((data) => {
      setCombatResult(data.data);
      setSelectedPokemon(null);
      setDefender(null);
    }).catch((error) => {
      console.error("Error handling combat:", error);
    });
    setLoading(false);
  }, []);

  return {
    handleCombat,
    combatResult,
    setSelectedPokemon,
    selectedPokemon,
    defender,
    loading,
  };
}
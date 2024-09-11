'use client';
import { useCallback, useEffect, useState } from "react";
import { fetchData } from "../connection";
import { Pokemon } from "../types";

export const useFetchCreatures = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  
  const fetchCreatures: () => void = useCallback(async () => {
    const data = await fetchData("creatures").then((data) => {
      setData(data);
    });
    return data;
  }, []);

  useEffect(() => {
    fetchCreatures();
    
  }, [fetchCreatures])

  return {
    fetchCreatures,
    data,
    isLoading: false,
    error: null,
  }
}
'use client';
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid2';
import Button from "@mui/material/Button";
import { CardComponent } from "@/shared/components/CardComponent";
import { useFetchCreatures } from "@/shared/hooks/useFetchCreatures";
import { useHandleCombats } from "@/shared/hooks/useHandleCombats";
import { CardCombatients } from "@/shared/components/CardCombatients";
import Collapse from "@mui/material/Collapse";

export default function Home() {
  const { data } = useFetchCreatures();
  const {
    setSelectedPokemon,
    selectedPokemon,
    defender,
    handleCombat,
    combatResult,
    loading,
  } = useHandleCombats(data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h2" gutterBottom>
          Battle of Pokemon
        </Typography>
        <Typography variant="h4" gutterBottom>
          Select your Pokemon
        </Typography>
        <Box height={450} style={{ overflowY: "auto" }}>
          <Grid container spacing={2}>
            {data.map((pokemon) => (
              <Grid
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedPokemon(pokemon)}
                size={{ xs: 12, md: 2 }}
                key={pokemon?.id}
              >
                <CardComponent
                  pokemonName={pokemon?.name}
                  image={pokemon?.imageUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          {combatResult && !selectedPokemon && (
            <Typography
              style={{
                backgroundColor: "#00800057",
                padding: "20px",
                borderRadius: "15px",
              }}
              variant="h4"
              gutterBottom
            >
              {combatResult?.winner.name} is the winner after{" "}
              {combatResult?.turns} turns
            </Typography>
          )}
        </Box>
        <Collapse in={!!selectedPokemon}>
          {selectedPokemon && (
            <Grid container spacing={1}>
              <Grid size={{ xs: 12, md: 5 }}>
                {selectedPokemon && (
                  <CardCombatients pokemon={selectedPokemon} />
                )}
              </Grid>
              <Grid size={{ xs: 12, md: 2 }} style={{ alignContent: "center" }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    disabled={loading}
                    onClick={() =>
                      handleCombat({
                        id1: selectedPokemon.id,
                        id2: defender?.id as string,
                      })
                    }
                    style={{
                      backgroundColor: "green",
                      height: 60,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                    variant="contained"
                  >
                    Start Battle
                  </Button>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                {defender && <CardCombatients pokemon={defender} />}
              </Grid>
            </Grid>
          )}
        </Collapse>
      </main>
    </div>
  );
}

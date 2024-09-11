import Card from "@mui/material/Card";
import { Pokemon } from "../types";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { BarProgress } from "./BarProgress";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export const CardCombatients = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Card elevation={3} style={{ borderRadius: 15 }}>
      <CardContent style={{ paddingTop: "40px", height: "700px" }}>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            sx={{ height: 300, width: 300 }}
            image={pokemon?.imageUrl}
            title={pokemon?.name}
          />
        </Box>
        <Typography
          style={{ textAlign: "center", marginTop: "40px" }}
          gutterBottom
          variant="h5"
        >
          {pokemon?.name}
        </Typography>
        <Divider />
        <Grid direction={"column"} container spacing={2}>
          <Grid>
            <BarProgress value={pokemon.hp} title="HP" />
          </Grid>
          <Grid>
            <BarProgress value={pokemon.attack} title="Attack" />
          </Grid>
          <Grid>
            <BarProgress value={pokemon.defense} title="Defense" />
          </Grid>
          <Grid>
            <BarProgress value={pokemon.speed} title="Speed" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
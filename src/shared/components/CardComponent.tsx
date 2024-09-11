import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CardComponent = ({
  pokemonName,
  image,
}: {
  pokemonName: string;
  image: string;
}) => {
  return (
    <Card elevation={7} style={{ borderRadius: 8 }}>
      <CardContent style={{ paddingTop: "40px" }}>
        <CardMedia sx={{ height: 260 }} image={image} title={pokemonName} />
        <Typography
          style={{ textAlign: "center", marginTop: "40px" }}
          gutterBottom
          variant="h5"
        >
          {pokemonName}
        </Typography>
      </CardContent>
    </Card>
  );
};

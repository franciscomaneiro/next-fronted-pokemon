import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export const BarProgress = ({ value, title }: { value: number, title: string }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={value * 10}
        />
      </Box>
    </>
  );
}
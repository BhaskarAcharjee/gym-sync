import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "12px",
            color: "#fff",
            background: "#d53b39",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "12px",
            color: "#fff",
            background: "#ff5956",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        color="#000"
        fontWeight="bold"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

import React from "react";
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import "./Card.module.css";

const Card = ({ image, title, follows }) => {
  return (
    <MuiCard className="custom-card">
      <div className="card-top">
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className="card-image"
        />
        <div className="card-overlay">
          <Typography variant="h6" className="card-title">
            {title}
          </Typography>
        </div>
      </div>
      <CardContent className="card-bottom">
        <Chip label={`${follows} Follows`} className="card-chip" />
        <Typography variant="body2" className="card-subtitle">
          {title}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;

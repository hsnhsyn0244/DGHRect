import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductType } from "../types/Types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ProductType;
}

function ProductCard(props: ProductCardProps) {
  const navigate = useNavigate();
  const { id, title, price, description, image, category, rating } =
    props.product;

  return (
    <Card
      sx={{
        width: "350px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "60px 10px",
        boxShadow: "1px 3px 5px black",
        cursor: "pointer",
      }}
    >
      <img src={image} width={250} height={250} />
      <CardContent sx={{ height: "200px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title.substring(0, 20)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description.substring(0, 180)}
        </Typography>{" "}
      </CardContent>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "320px",
          marginBottom: "15px",
        }}
      >
        <h2>{price + "  "}₺</h2>
        <CardActions>
          <Button
            onClick={() => navigate("/product-detail/" + id)}
            size="medium"
            variant="contained"
            color="success"
          >
            Detay
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default ProductCard;

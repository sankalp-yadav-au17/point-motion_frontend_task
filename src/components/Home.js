import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.Product_reducer);

  const dataComponents = products.map((obj, idx) => {
    return (
      <div className="m-1 border" style={{width: '348px', height: '236px'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={obj.product_image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {obj.product_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ₹: {obj.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  });

  return (
    <main className="d-flex flex-wrap border justify-content-evenly">
      {dataComponents}
    </main>);
}

export default Home;

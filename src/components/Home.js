import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.Product_reducer);
  // console.log(products);

  const dataComponents = products.map((obj, idx) => {
    // console.log(obj.product_name);
    return (
      <div className="m-5">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
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
    <main>
      {dataComponents}
    </main>);
}

export default Home;

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import BannerSlider from "../components/BannerSlider";
import CardSlider from "../components/CardSlider";
import Options from "../components/Options";
import ProductCard from "../components/ProductCard";

function Home(props) {
  let card = [1, 2, 3, 4];
  return (
    <div>
      <Header />
      <BannerSlider />
      <Options />
      <CardSlider />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingLeft: 20,
          flexWrap: "wrap",
          minHeight: "100vh",
        }}
      >
        {card.map((s) => (
          <ProductCard />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

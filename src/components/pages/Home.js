import { Button } from "components/common";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home page!</h1>
      <Button> Primary Button</Button>
      <Button secondary> Secondary Button</Button>
      <Button disabled> Disabled Button</Button>
      <Button large> LargeButton</Button>
    </>
  );
};

export default Home;

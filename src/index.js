import React from "react";
import ReactDom from "react-dom/client";
// import {UserCard } from "./Greeting";
// import Product, { Navbar } from "./Product";
import {Button} from "./Button";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <UserCard 
    title="Usercard" 
    name="Monkey" 
    account={3000} />
    <UserCard 
    title="Usercard" 
    name="Messi" 
    account={40000} /> */}
    <Button text={1}/>
    <Button text="Hola"/>
    <Button text="Hola"/>
  </>
);

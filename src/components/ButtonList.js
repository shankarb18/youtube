import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming"];

const ButtonList = () => {
  return (
    <div className="flex px-10 py-4 gap-4 ">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Motivation" />
      <Button name="Valentines" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Travel;" />
    </div>
  );
};

export default ButtonList;

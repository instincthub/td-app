import React from "react";
import Images from "../../components/Images";
import ErrorState from "../../components/ErrorState";

const Error404 = () => {
  return (
    <ErrorState
      img={Images.NotFound}
      text="We couldn't find the page. Try check the link and try again."
      title="Page Not Found"
      p="Ooops"
    />
  );
};

export default Error404;

import React from "react";
import { useParams, Redirect } from "react-router-dom";

export default function StaticPage() {
  let { id } = useParams();

  if (id === "16") {
    return <Redirect to="/static" />;
  }

  return <p>I am dynamic, id is {id}.</p>;
}

import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Err: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;

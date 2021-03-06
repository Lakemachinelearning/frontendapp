import React from "react";
import Articles from "../components/articles";
import Query from "../components/query";
import ARTICLES_QUERY from "../apollo/queries/article/articles";

const Home = () => {
  return(
    <div className="container">

            <h1>Welcome to my world!</h1>

            <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>

    </div>
  );
};

export default Home;

import axios from "axios";
import { CatStyle } from "../styledComponents/catStyle";
import { useEffect, useState } from "react";

const CatPage = () => {
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();
  const getCatData = () => {
    axios
      .get("https://catfact.ninja/facts")
      .then((res) => {
        setData(res.data.data);
      })
      .catch(setApiError(true));
  };

  useEffect(() => {
    getCatData();
  }, []);

  // Hvis siden ikke skulle

  if (data) {
    return (
      <CatStyle>
        <h2>Facts about Cats</h2>
        <article>
          {data.map((item, idx) => {
            return <p key={idx}>{item.fact}</p>;
          })}
        </article>
      </CatStyle>
    );
  } else if (apiError) {
    return (
      <CatStyle>
        <h2>Facts about Cats</h2>
        <article>
          <p>Content failed to load, please try again</p>
        </article>
      </CatStyle>
    );
  } else {
    return (
      <CatStyle>
        <h2>Facts about Cats</h2>
        <article>
          <p>The content is loading</p>
        </article>
      </CatStyle>
    );
  }
};

export default CatPage;

import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios'
import { Articles } from './components/Articles';
import Global from "./styles/global";

/**
 * 
 */
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/articles");
      setData(response.data);
      setLoading(false);
    }
    fetchData()
  }, []);

  return (
    <Fragment>
      <Global/>
      <h1 className="heading">Articles</h1>
      <main>
      {loading ? (
        "Loading"
      ) : (
        <div data-testid="article-list">
          <Articles articles={data} />
        </div>
      )}
			</main>
		</Fragment>
  );
}

export default App;
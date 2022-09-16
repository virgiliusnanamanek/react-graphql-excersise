import github from "./db";
import {  useEffect, useState, useCallback } from "react";
import query from "./Query";
import Repolist from "./Repolist";

function App() {

  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState([]);

  const fetchUser = useCallback(async () => {
    const res = await fetch(github.baseURL, {
      method: 'POST',
      headers: github.headers,
      body: JSON.stringify(query)
    });
    const data = await res.json();
    const viewer = data.data.viewer;
    const repos = data.data.search.nodes;
    setUserName(viewer.name);
    setRepos(repos);
    console.log(viewer);
    console.log(repos);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="App container mt-5">
      <h1 className="text-center">Github Repositories</h1>
      <h2 className="text-center">User: {userName}</h2>
      <div className="row">
        {
          repos.map(repo => (
            <Repolist repo={repo} key={repo.id} />
          ))
        }
      </div>
    </div>
  );
}

export default App;

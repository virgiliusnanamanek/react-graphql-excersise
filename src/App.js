import github from "./db";
import {  useEffect, useState, useCallback } from "react";
import query from "./Query";

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
    setUserName(viewer.name);
    setRepos(viewer.repositories.nodes);
    console.log(viewer);
    console.log(viewer.repositories.nodes);
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
            <div className="col-md-4" key={repo.id}>
              <div className="card mt-4">
                <div className="card-body">
                  <h3 className="text-primary">{repo.name}</h3>
                  <p>
                    <a href={repo.url} target="_blank" rel="noreferrer">View Repo</a>
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

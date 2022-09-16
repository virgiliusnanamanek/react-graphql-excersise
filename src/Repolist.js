import React from 'react'

function Repolist({repo}) {
  return (
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
  )
}

export default Repolist
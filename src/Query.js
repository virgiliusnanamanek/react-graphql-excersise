const githubQuery = {
    query: `
    {
      viewer {
        name
        repositories(last: 10) {
          nodes {
            name
            id
            url
          }
        }
      }
    }
    `
  }

  export default githubQuery;
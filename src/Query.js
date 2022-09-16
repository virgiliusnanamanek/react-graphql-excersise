const githubQuery = {
    query: `
    {
      viewer {
        name
      }
      search(query: "user:virgiliusnanamanek", type: REPOSITORY, last: 10){
        nodes{
          ... on Repository{
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
function createComment(comment) {
  const promise = fetch("/comments", {
    //add second arguement of POST
    method: "POST",
    //take this for granted and do the same
    headers: {
      "Content-Type": "application/json"
    },
    //add the following to body.. or whatever you want to go into the body
    body: JSON.stringify(comment)
  });
  const anotherPromies = promise.then((data) => {
  });
  return anotherPromies;
}

export default createComment;

function getOneContact(id) {
  //this one has the id in it, but it's the same  (ex: localhost:4000/contacts/1)
  const promise = fetch(`/contacts/${id}`);
  const anotherPromise = promise.then(function (response) {
    return response.json();
  });
  return anotherPromise;
}

export default getOneContact;

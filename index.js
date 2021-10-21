// Add your code here

const body = document.getElementsByTagName("body")[0];
console.log(body);

function submitData(firstName, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: firstName,
      email: email,
    }),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((body) => addNewContact(body.id))
    .catch(errorfunc);
}

function addNewContact(newID) {
  document.getElementsByTagName("body")[0].innerHTML = newID;
}
submitData("Name", "name@name.com");

function errorfunc(error) {
  document.body.innerHTML = error.message;
}

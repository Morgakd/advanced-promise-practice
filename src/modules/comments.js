import getOneComment from "./get-one-comment";
import makeComment from "./create-comment";


function loadAllComments() {
  // 1) Long way
  const webRequestPromise = fetch("/comments");
  const convertToJsonPromise = webRequestPromise.then((response) => {
    console.log("Comment response",response);
    return response.json();
  });
  convertToJsonPromise.then((data) => {
    // console.log("Comment data",data);
    document.getElementById("numberOfComments").innerHTML = data.length;
  });

  // 2) Short way
  fetch("/comments").then(function (response) {
    return response.json();
  }).then((data) => {
    //then put it in the div...
    document.getElementById("numberOfComments2").innerHTML = data.length;
  });
};

loadAllComments();

// 3) We can use promises from other modules
getOneComment(1).then(function (data) {
console.log(data);
  document.getElementById("firstComment").innerHTML = data.body;
});


window.makeComment = function () {
  makeComment({
    body: "Added a New Comment"
  }).then(function (data) {
    loadAllComments();
  });
};

function loadComments() {
  let commentsList = document.getElementById("comments");
  let url = "./db/db.json";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let comments = JSON.parse(xhr.responseText);
      console.log(comments);
      comments.map((comment) => {
        let li = document.createElement("li");
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        let name = document.createElement("h4");
        name.classList.add("mb-0");
        name.innerHTML = comment.name;
        let date = document.createElement("small");
        date.innerHTML = comment.date;
        let commentText = document.createElement("p");
        commentText.classList.add("comment-text");
        commentText.innerHTML = "-- " + comment.comment;
        commentDiv.appendChild(name);
        commentDiv.appendChild(date);
        commentDiv.appendChild(commentText);
        li.appendChild(commentDiv);
        commentsList.appendChild(li);
      });
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

//TODO: Fix this function
function addComment(commentData) {
  let commentsList = document.getElementById("comments");
  let li = document.createElement("li");
  let commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  let name = document.createElement("h4");
  name.classList.add("mb-0");
  name.innerHTML = commentData.name;
  let date = document.createElement("small");
  date.innerHTML = commentData.date;
  let commentText = document.createElement("p");
  commentText.innerHTML = "-- " + commentData.comment;
  commentText.classList.add("comment-text");
  commentDiv.appendChild(name);
  commentDiv.appendChild(date);
  commentDiv.appendChild(commentText);
  li.appendChild(commentDiv);
  commentsList.appendChild(li);

  // let url = "./db/db.json";
  // let xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     loadComments();
  //   }
  // };
  // xhr.open("GET", url, true);
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.send();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     let comments = JSON.parse(xhr.responseText);
  //     comments.push(commentData);
  //     let putXhr = new XMLHttpRequest();
  //     putXhr.onreadystatechange = function () {
  //       if (putXhr.readyState == 4 && putXhr.status == 200) {
  //         loadComments();
  //       }
  //     };
  //     putXhr.open("PUT", url, true);
  //     putXhr.setRequestHeader("Content-Type", "application/json");
  //     putXhr.send(JSON.stringify(comments));
  //   }
  // };
}

$("#commentForm").submit((e) => {
  e.preventDefault();
  let name = $("#name").val();
  let comment = $("#comment").val();
  let date = new Date().toLocaleDateString();
  let commentData = {
    name: name,
    date: date,
    comment: comment,
  };
  addComment(commentData);
  $("#name").val("");
  $("#comment").val("");
});

$(document).ready(function () {
  loadComments();
});

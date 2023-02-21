function loadComments() {
  let commentsList = document.getElementById("comments");
  let url = "./db/db.json";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let comments = JSON.parse(xhr.responseText);
      comments = comments["comments"];
      console.log(comments);
      comments.map((comment) => {
        let li = document.createElement("li");
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        let name = document.createElement("h4");
        name.innerHTML = comment.name;
        let date = document.createElement("p");
        date.innerHTML = comment.date;
        let commentText = document.createElement("p");
        commentText.innerHTML = comment.comment;
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

$(document).ready(function () {
  loadComments();
});

function addNote() {
  var noteInput = document.getElementById("noteInput").value;
  if (noteInput.trim() !== "") {
    var ul = document.getElementById("noteList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(noteInput));
    ul.appendChild(li);
    document.getElementById("noteForm").reset();
  }
}

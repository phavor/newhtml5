function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var dropped = ev.target.appendChild(document.getElementById(data));
  if (dropped) {
    data.style.border = "5px solid blue";
  }
}
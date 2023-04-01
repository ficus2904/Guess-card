function startGame() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption != null) {
    window.location.href = "/game?option=" + selectedOption.value;
  } else {
    alert("Please select set")
  }
}
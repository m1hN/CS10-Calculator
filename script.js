// CS10 Grade Calculator

// Event Listerner

document.getElementById("btn").addEventListener("click", showGrade);

// Event Function

function showGrade() {
  // Input
  let CS1 = +document.getElementById("CS1").value;
  let CS2 = +document.getElementById("CS2").value;
  let SP1 = +document.getElementById("SP1").value;
  let SP2 = +document.getElementById("SP2").value;
  let projectA = +document.getElementById("ProjectA").value;

  console.log(CS1);
  console.log(CS2);
  console.log(SP1);
  console.log(SP2);
  console.log(projectA);

  // Process
  let calculateGrade = (CS1 + CS2 + SP1 + SP2 + projectA) / 5;
  console.log(calculateGrade);

  // Output
  document.getElementById("outcome").innerHTML = calculateGrade;

  if (calculateGrade < 80) {
    document.getElementById("statement").innerHTML =
      "You have to improve. Study hard, eat healthy, drink your fluids. I'm VERY disappointed.";
  } else if (calculateGrade >= 80 && calculateGrade < 100) {
    document.getElementById("statement").innerHTML =
      "Good job, but not a 100%? Pathetic.";
  } else if (calculateGrade == 100) {
    document.getElementById("statement").innerHTML =
      "Well done child. Continue your efforts.";
  } else {
    document.getElementById("statement").innerHTML = "Invalid try again.";
  }
}

// 1. Array of Student Objects
const students = [
  { name: "Ali Khan", marks: [85, 90, 78] },
  { name: "Ayesha Ahmed", marks: [45, 50, 40] },
  { name: "Bilal Raza", marks: [70, 65, 80] },
  { name: "Fatima Noor", marks: [92, 95, 88] },
];

// Helper function to calculate average and grade
function calculateResult(marksArray) {
  let sum = 0;
  for (let i = 0; i < marksArray.length; i++) {
    sum += marksArray[i];
  }
  let average = sum / marksArray.length;

  let grade = "";
  if (average >= 85) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 50) grade = "C";
  else grade = "F";

  let status = average >= 50 ? "Pass" : "Fail";

  return { average: average.toFixed(2), grade, status };
}

// Find the topper based on highest average
let highestAvg = -1;
let topperIndex = -1;

for (let i = 0; i < students.length; i++) {
  let res = calculateResult(students[i].marks);
  if (parseFloat(res.average) > highestAvg) {
    highestAvg = parseFloat(res.average);
    topperIndex = i;
  }
}

// Generate HTML and insert cards dynamically using a loop
const container = document.getElementById("cardsContainer");
let cardsHTML = "";

for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let result = calculateResult(student.marks);
  let isTopper = i === topperIndex;

  cardsHTML += `
        <div class="card">
            ${isTopper ? '<span class="topper-badge">Topper 🏆</span>' : ""}
            <h3>${student.name}</h3>
            <p><strong>Marks:</strong> ${student.marks.join(", ")}</p>
            <p><strong>Average:</strong> ${result.average}</p>
            <p><strong>Grade:</strong> ${result.grade}</p>
            <p><strong>Status:</strong> <span class="${result.status.toLowerCase()}">${result.status}</span></p>
        </div>
    `;
}

container.innerHTML = cardsHTML;

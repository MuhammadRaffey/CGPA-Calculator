const gradePointMap = {
  'A': 4.0,
  'A-': 3.75,
  'B+': 3.5,
  'B': 3.0,
  'C+': 2.5,
  'C': 2.0,
  'D+': 1.5,
  'D': 1.0,
  
};

function calculateCGPA() {
  const subjects = document.querySelectorAll('.subject');
  let totalCredits = 0;
  let totalGradePoints = 0;

  subjects.forEach(subject => {
    const creditHours = parseFloat(subject.querySelector('.credit-hours').value);
    const grade = subject.querySelector('.grade').value.toUpperCase();

    if (!isNaN(creditHours) && gradePointMap.hasOwnProperty(grade)) {
      totalCredits += creditHours;
      totalGradePoints += creditHours * gradePointMap[grade];
    }
  });

  if (totalCredits > 0) {
    const cgpa = totalGradePoints / totalCredits;
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
  } else {
    document.getElementById('result').innerText = 'Please enter valid credit hours and grades.';
  }
}

function addSubject() {
  const subjectsContainer = document.getElementById('subjects-container');
  const newSubject = document.createElement('div');
  newSubject.classList.add('subject');
  newSubject.innerHTML = `
    <label>Credit Hours:</label>
    <input type="number" class="credit-hours" step="0.5" min="0.5" required>
    <label>Grade:</label>
    <select class="grade" required>
      <option value="A">A</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="C+">C+</option>
      <option value="C">C</option>
      <option value="D+">D+</option>
      <option value="D">D</option>
    </select>
  `;
  subjectsContainer.appendChild(newSubject);
}

document.getElementById('addSubjectBtn').addEventListener('click', addSubject);

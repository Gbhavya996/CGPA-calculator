// Stores all subjects
let subjects = [];

// Grade mapping
const gradeMap = {
    10: "O",
    9: "A+",
    8: "A",
    7: "B+",
    6: "B",
    5: "C",
    0: "F"
};

// Load saved data
const savedSubjects = localStorage.getItem("subjects");

if (savedSubjects) {
    subjects = JSON.parse(savedSubjects);
}

updateUI();

// Add subject using Enter key
document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addSubject();
    }

});

// ----------------------
// Add Subject
// ----------------------

function addSubject() {

    const name = document.getElementById("subject").value.trim();

    const credits = parseFloat(
        document.getElementById("credits").value
    );

    const grade = parseFloat(
        document.getElementById("grade").value
    );

    if (name === "" || isNaN(credits) || isNaN(grade)) {

        alert("Please fill all the fields.");

        return;
    }

    // Prevent duplicate subjects
    const exists = subjects.some(function (subject) {

        return subject.name.toLowerCase() === name.toLowerCase();

    });

    if (exists) {

        alert("This subject is already added.");

        return;
    }

    subjects.push({

        id: Date.now(),

        name: name,

        credits: credits,

        grade: grade

    });

    document.getElementById("subject").value = "";

    document.getElementById("credits").value = "";

    document.getElementById("grade").value = "";

    updateUI();

}

// ----------------------
// Delete Subject
// ----------------------

function deleteSubject(id) {

    const answer = confirm("Delete this subject?");

    if (!answer) {

        return;

    }

    subjects = subjects.filter(function (subject) {

        return subject.id !== id;

    });

    updateUI();

}

// ----------------------
// Update Table + GPA
// ----------------------

function updateUI() {

    const tbody = document.getElementById("tableBody");

    tbody.innerHTML = "";

    let totalPoints = 0;

    let totalCredits = 0;

    if (subjects.length === 0) {

        tbody.innerHTML = `
        <tr>
            <td colspan="4" style="text-align:center;">
                No subjects added yet.
            </td>
        </tr>
        `;

    }

    subjects.forEach(function (subject) {

        totalPoints += subject.grade * subject.credits;

        totalCredits += subject.credits;

        const row = document.createElement("tr");

        row.innerHTML = `

        <td><strong>${subject.name}</strong></td>

        <td>${subject.credits}</td>

        <td>
            <span class="badge">
                ${gradeMap[subject.grade]}
            </span>
        </td>

        <td>

            <button
            class="delete-btn"
            onclick="deleteSubject(${subject.id})">

            Delete

            </button>

        </td>

        `;

        tbody.appendChild(row);

    });

    const gpa =

        totalCredits === 0

            ? 0

            : totalPoints / totalCredits;

    document.getElementById("gpa").textContent =

        gpa.toFixed(2);

    document.getElementById("totalCredits").textContent =

        totalCredits;

    // Save data automatically

    localStorage.setItem(

        "subjects",

        JSON.stringify(subjects)

    );

    // Auto update simulator only if both values exist

    const target = document.getElementById("targetCgpa").value;

    const remaining = document.getElementById("remainingCredits").value;

    if (target && remaining) {

        calculateWhatIf();

    }

}

// ----------------------
// What If Calculator
// ----------------------

function calculateWhatIf() {

    let currentPoints = 0;

    let currentCredits = 0;

    subjects.forEach(function (subject) {

        currentPoints +=

            subject.grade *

            subject.credits;

        currentCredits +=

            subject.credits;

    });

    const targetCGPA = parseFloat(

        document.getElementById("targetCgpa").value

    );

    const remainingCredits = parseFloat(

        document.getElementById("remainingCredits").value

    );

    if (

        isNaN(targetCGPA) ||

        isNaN(remainingCredits) ||

        remainingCredits <= 0

    ) {

        alert("Enter valid simulation values.");

        return;

    }

    const result = document.getElementById(

        "simulationResult"

    );

    const totalCredits =

        currentCredits +

        remainingCredits;

    const requiredTotalPoints =

        targetCGPA *

        totalCredits;

    const requiredFuturePoints =

        requiredTotalPoints -

        currentPoints;

    const requiredFutureGPA =

        requiredFuturePoints /

        remainingCredits;

    result.style.display = "block";

    if (requiredFutureGPA > 10) {

        result.className =

            "sim-result-box alert-danger";

        result.innerHTML =

            `<strong>Impossible!</strong><br><br>

            You need an average GPA of

            <strong>${requiredFutureGPA.toFixed(2)}</strong>

            which is above the maximum GPA of 10.`;

    }

    else if (requiredFutureGPA <= 0) {

        result.className =

            "sim-result-box alert-success";

        result.innerHTML =

            `<strong>Congratulations!</strong><br><br>

            You have already secured enough grade points to reach your target CGPA.`;

    }

    else {

        result.className =

            "sim-result-box alert-warning";

        result.innerHTML =

            `To graduate with

            <strong>${targetCGPA.toFixed(2)}</strong>

            CGPA,

            you need an average GPA of

            <strong>${requiredFutureGPA.toFixed(2)}</strong>

            in your remaining

            <strong>${remainingCredits}</strong>

            credits.`;

    }

}

// ----------------------
// Export CSV
// ----------------------

function downloadCSV() {

    if (subjects.length === 0) {

        alert("No data available.");

        return;

    }

    let csv =

        "Subject,Credits,Grade\n";

    subjects.forEach(function (subject) {

        csv +=

            `${subject.name},${subject.credits},${gradeMap[subject.grade]}\n`;

    });

    const blob = new Blob(

        [csv],

        {

            type: "text/csv"

        }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "cgpa-record.csv";

    a.click();

    URL.revokeObjectURL(url);

}
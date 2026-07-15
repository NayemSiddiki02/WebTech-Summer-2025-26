let students = [];

function validateForm(event) {
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let stid = document.getElementById("stid").value.trim();
    let email = document.getElementById("email").value.trim();
    let crc = document.getElementById("crc").value;
    let department = document.getElementById("department").value;
    let isValid = true;

    if (fname == "") {
        document.getElementById("fnameError").innerHTML = "Required";
        document.getElementById("fnameError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("fnameError").innerHTML = "";
    }

    if (lname == "") {
        document.getElementById("lnameError").innerHTML = "Required";
        document.getElementById("lnameError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("lnameError").innerHTML = "";
    }

    if (stid == "") {
    document.getElementById("stidError").innerHTML = "Required";
    document.getElementById("stidError").style.color = "red";
    isValid = false;

    } else if (stid.length != 10 || stid.charAt(2) != '-' || stid.charAt(8) != '-') {
        document.getElementById("stidError").innerHTML = "ID must be in XX-XXXXX-X format";
        document.getElementById("stidError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("stidError").innerHTML = "";
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Required";
        document.getElementById("emailError").style.color = "red";
        isValid = false;
    } else if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Invalid AIUB email";
        document.getElementById("emailError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (crc == "") {
        document.getElementById("crcError").innerHTML = "Required";
        document.getElementById("crcError").style.color = "red";
        isValid = false;
    } else if (Number(crc) < 0 || Number(crc) >= 148) {
        document.getElementById("crcError").innerHTML = "0 - 147 only";
        document.getElementById("crcError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("crcError").innerHTML = "";
    }

    if (department == "") {
        document.getElementById("departmentError").innerHTML = "Select department";
        document.getElementById("departmentError").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("departmentError").innerHTML = "";
    }

    if (isValid) {
        students.push({
            fname: fname,
            lname: lname,
            stid: stid,
            email: email,
            crc: crc,
            department: department
        });

        showStudentList();
        document.querySelector("form").reset();
        return false;
    }

return false;
}

function showStudentList() {
    let tbody = document.getElementById("studentTableBody");

    if (!tbody) return;

    tbody.innerHTML = "";

    students.forEach(function(student) {
        let row = tbody.insertRow();
        row.insertCell(0).innerHTML = student.fname;
        row.insertCell(1).innerHTML = student.lname;
        row.insertCell(2).innerHTML = student.stid;
        row.insertCell(3).innerHTML = student.email;
        row.insertCell(4).innerHTML = student.crc;
        row.insertCell(5).innerHTML = student.department;
    });
}

window.onload = function() {
    showStudentList();
};


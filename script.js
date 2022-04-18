function occupationOthers() {
    if (document.getElementById('occupationOther').checked) {
        document.getElementById('other').style.visibility = 'visible';
    } else {
        document.getElementById('other').style.visibility = 'hidden';
    }
}



const page = Array.from(document.querySelectorAll("form .step"));
console.log(page);
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const submit=document.getElementById("team-submit");
const form = document.querySelector("form");
nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changePage("next");
    });
});
prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changePage("previous");
    });
});
submit.addEventListener("click",()=>changePage("submit"))
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input").forEach((input) => {
        const { name, value } = input;
        inputs.push({ name, value });
    }
    );
    console.log(inputs);
    //   form.reset();  
});
function changePage(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = page.indexOf(active);
    page[index].classList.remove("active");
    if (btn == 'next') {
        if (index == 0) {
            if (firstNameValidate() == true && emailIdValidate() == true && passwordValidate() == true && confirmPasswordValidate() == true) {
                index++;
            }
            else {
                index = 0;
            }

        }
        else if (index == 1) {
            if (dateValidate() === true && genderValidate() == true && stateValidate() == true && phoneNumberValidate() == true) {
                index++;
            }
            else {
                index = 1;
            }
        }
        else if (index == 2) {
            index++;
        }
        else if (index == 3) {
            if (graduateValidate() == true && yearOfPassValidate()==true) {
                index++;
            }
        } 
        else if(index==4)
        {
          index++;
        }

    }
        
    else if(btn === "previous") {
        index--;
    }
    else if(btn==="submit")
    {
        if(departmentValidate()== true && checkValidate()==true)
        {
            index++;
        }
    }
    page[index].classList.add("active");

}



let firstName = document.getElementById("fName");
let Email = document.getElementById("email");
let Password = document.getElementById("psw");
let correctPassword = document.getElementById("check-psw");
let setDate = document.getElementById("date");
let genderMale = document.getElementById("male");
let genderFemale = document.getElementById("female");
let state = document.getElementById("Vstate")
let phoneNo = document.getElementById("phoneNum");
let graduate = document.getElementById("graduation");
let yearOfPass=document.getElementById("yop");
let department = document.getElementById("practice");
let check=document.getElementById("check");



firstName.addEventListener('blur', firstNameValidate);
Email.addEventListener('blur', emailIdValidate);
Password.addEventListener('blur', passwordValidate);
correctPassword.addEventListener('blur', confirmPasswordValidate);
setDate.addEventListener('blur', dateValidate);
genderMale.addEventListener('blur', genderValidate);
genderFemale.addEventListener('blur', genderValidate);
state.addEventListener('blur', stateValidate);
phoneNo.addEventListener('blur', phoneNumberValidate);
graduate.addEventListener('blur', graduateValidate);
yearOfPass.addEventListener('blur',yearOfPassValidate);
check.addEventListener('blur', checkValidate);
department.addEventListener('blur', departmentValidate);


function firstNameValidate() {
    var idfirst = document.getElementById("firstName");
    if (firstName.value.trim() === "") {
        idfirst.innerHTML = "First name cannot be empty!!!";
    }
    else if (!nameValidation(firstName.value.trim())) {
        idfirst.innerHTML = "First name should contain only letters!!!";
    }
    else {
        idfirst.innerHTML = "";
        return true;
    }
}
function nameValidation(name) {
    var firstNameRegx = /^[a-zA-Z]{3,15}$/;
    if (name.match(firstNameRegx)) {
        return true;
    }
    else {
        return false;
    }
}

function emailIdValidate() {
    var idemail = document.getElementById("Email");

    if (Email.value.trim() === "") {
        idemail.innerHTML = "Email Id cannot be empty!!!";
    }
    else if (!emailValidation(Email.value.trim())) {
        idemail.innerHTML = "Invalid Email Id!!!";
    }
    else {
        idemail.innerHTML = "";
        return true;

    }
}

function emailValidation(Email) {
    var emailIdRegx = /^[a-z0-9]{5,13}@[a-z]+\.[a-z\.]{2,6}$/;
    if (Email.match(emailIdRegx)) {
        return true;
    }
    else {
        return false;
    }

}

function passwordValidate() {
    var idPass = document.getElementById("Password");
    if (Password.value.trim() === "") {
        idPass.innerHTML = "password cannot be empty!!!";
    }
    else if (!passwordValidation(Password.value.trim())) {
        idPass.innerHTML = "password should have atleast one uppercase,one lowercase,one special character,one number!!!";
    }
    else {
        idPass.innerHTML = "";
        return true;

    }
}

function passwordValidation(Password) {
    var passwordRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9!@#$%^&*]{6,15}$/;
    if (Password.match(passwordRegx)) {
        return true;
    }
    else {
        return false;
    }
}

function confirmPasswordValidate() {
    var idConformPass = document.getElementById("correctPassword");
    if (correctPassword.value.trim() === "") {
        idConformPass.innerHTML = "Confirm Password cannot be empty!!!";
    }
    else if (Password.value.trim() !== correctPassword.value.trim()) {
        idConformPass.innerHTML = "passwords does not match!!!";
    }
    else {
        idConformPass.innerHTML = "";

        return true;

    }
}


function dateValidate() {
    var idDate = document.getElementById("setDate");

    if (setDate.value.trim() === "") {
        idDate.innerHTML = "Date not selected!!!";
    }
    else if (!dateValidation(setDate.value.trim())) {
        idDate.innerHTML = "Age should be greater than 20!!!";
    }
    else {
        idDate.innerHTML = "";
        return true;

    }
}

function dateValidation(setDate) {
    var age = Math.floor((new Date().getFullYear() - new Date(setDate).getFullYear()));
    console.log(age);
    if (age < 21) {
        return false;
    }
    else {
        return true;
    }
}

function genderValidate() {
    var idGender = document.getElementById("Gender");
    if (genderMale.checked === false && genderFemale.checked === false) {
        idGender.innerHTML = "Gender cannot be empty!!!";
    }
    else {
        idGender.innerHTML = "";
        return true;

    }
}

function stateValidate() {
    var idState = document.getElementById("validstate");
    if (!stateValidation(state.value.trim())) {
        idState.innerHTML = "Select State!!!";
    }
    else {
        idState.innerHTML = "";
        return true;
    }
}

function stateValidation(state) {
    if (state === "") {
        return false;
    }
    else {
        return true;
    }
}

function phoneNumberValidate() {
    var idphn = document.getElementById("phoneNumber");
    if (phoneNo.value.trim() === "") {
        idphn.innerHTML = "Phone Number cannot be empty!!!";
    }
    else if (!phoneNumberValidation(phoneNo.value.trim())) {
        idphn.innerHTML = "Phone Number should start with [6-9] followed by 9 digits!!!";
    }
    else {
        idphn.innerHTML = "";
        return true;

    }
}


function phoneNumberValidation(phoneNo) {
    var phoneNumberRegx = /^[6-9]{1}[0-9]{9}$/;
    if (phoneNo.match(phoneNumberRegx)) {
        return true;
    }
    else {
        return false;
    }
}

function graduateValidate() {
    var idGrad = document.getElementById("graduates")
    if (!graduateValidation(graduate.value.trim())) {
        idGrad.innerHTML = "Select Graduation!!!";
    }
    else {
        idGrad.innerHTML = "";
        return true;
    }
}

function graduateValidation(graduate) {
    if (graduate === "") {
        return false;
    }
    else {
        return true;
    }
}


function yearOfPassValidate(){
    var idYear=document.getElementById("YOP");
    if (yearOfPass.value.trim() === "") {
        idYear.innerHTML="Year of passing cannot be empty!!!";
      }
      else if (!yearOfPassValidation(yearOfPass.value.trim())) {
        idYear.innerHTML="Enter the valid year";
      }
      else {
        idYear.innerHTML="";
        return true;
    
      }
  }

  function yearOfPassValidation(yearOfPass){
    var yearRegex=/^[1]{1}[9]{1}[5-9]{1}[0-9]{1}$/;
    var yearRegex1=/^[2]{1}[0]{1}[0-2]{1}[0-9]{1}$/;
    if (yearOfPass.match(yearRegex) || yearOfPass.match(yearRegex1)) {
      return true;
    }
    else {
      return false;
    }
  }


  function departmentValidate()
  {
    var idDep=document.getElementById("pract")
    if (!departmentValidation(department.value.trim())) {
      idDep.innerHTML="Practice is not selected!!!";
    }
    else {
        idDep.innerHTML="";
      return true;
    }
  }

  function departmentValidation(department)
  {
    if (department === "") {
      return false;
    }
    else {
      return true;
    }
  }

  function checkValidate()
  {
    var idCheck=document.getElementById("tickbox");
    if(check.checked===false)
    {
        idCheck.innerHTML="Select checkbox!!!";

    }
    else {
        idCheck.innerHTML="";
      return true;
  }
}

  function checkValidation(check)
{
  if(check.checked===false)
  {
    return false;
  }
  else
  {
    return true;
  }
}

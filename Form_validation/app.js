let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let address = document.getElementById("address");
let email = document.getElementById("email");
let car = document.getElementById("car");
let number = document.getElementById("number");
let submit = document.getElementById("submit");
let agree = document.getElementById("agree");
let formDetails = document.getElementById("formDetails");

// let success = document.getElementById("success");
let validEmail = false;
let validaddress = false;
let validfName = false;
let validlName = false;
let validnumber = false;
// let valid = false;
fName.addEventListener("blur", () => {
  //validate here
  let regex = /^[a-zA-Z]([a-zA-Z]){2,15}$/;
  let str = fName.value;
  if (regex.test(str)) {
    fName.classList.remove("is-invalid");
    validfName = true;
  } else {
    fName.classList.add("is-invalid");
    validfName = false;
  }
});
lName.addEventListener("blur", () => {
  //validate here
  let regex = /^[a-zA-Z]([a-zA-Z]){2,15}/;
  let str = lName.value;
  if (regex.test(str)) {
    lName.classList.remove("is-invalid");
    validlNane = true;
  } else {
    lName.classList.add("is-invalid");
    validlNane = false;
  }
});
address.addEventListener("blur", () => {
  //validate here
  let regex = /([_\-0-9a-zA-Z]){5,25}/;
  let str = address.value;
  if (regex.test(str)) {
    address.classList.remove("is-invalid");
    validaddress = true;
  } else {
    address.classList.add("is-invalid");
    validaddress = false;
  }
});
email.addEventListener("blur", () => {
  //validate here
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z])/; // using \. bcoz we want a character period not a metacharacter of regualr expression
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

number.addEventListener("blur", () => {
  //validate here
  let regex = /^([0-9]){10}$/;
  let str = number.value;
  if (regex.test(str)) {
    validnumber = true;
    number.classList.remove("is-invalid");
  } else {
    number.classList.add("is-invalid");
    validnumber = false;
  }
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    validfName &&
    validlName &&
    validEmail &&
    validaddress &&
    validnumber &&
    agree.checked
  ) {
    getDetails(
      fName.value,
      lName.value,
      address.value,
      email.value,
      number.value
    );
    // formDetails.reset();
    Alert(
      "success",
      "Success!",
      "Your travel request has been submitted successfully"
    );
  } else {
    //! here we are adding the is-invalid class in those filds which are empty or has the boolean valuse false;
    if (!validfName) {
      fName.classList.add("is-invalid");
    }

    Alert("danger", "Error!", "Enter Valid details");
  }
});

function Alert(type, status, message) {
  let Alert = document.getElementById("message");
  Alert.innerHTML = `   <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                              <strong>${status}</strong>  ${message}.
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
    `;
  setTimeout(function () {
    Alert.innerHTML = " ";
  }, 5000);
}
let data;
function getDetails(fName, lName, address, email, number) {
  data =
  `{ "FirstName": "${fName}", "LastName": "${lName}", "Address": "${address}", "E-mail": "${email}", "Number": "${number}" } `;
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };
  fetch("http://localhost:3000/user", params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}



let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let address = document.getElementById("address");
let email = document.getElementById("email");
let car = document.getElementById("car");
let number = document.getElementById("number");
let submit = document.getElementById("submit");
let agree = document.getElementById("agree");
let formDetails = document.getElementById("formDetails");
let input = document.getElementsByTagName("input");
/* 
Put all the regular expressions in array 'regex'..
 */
let regex = [
  /^[a-zA-Z]([a-zA-Z]){2,15}$/,
  /^[a-zA-Z]([a-zA-Z]){2,15}/,
  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z])/,
  /([_\-\,0-9a-zA-Z]){5,25}/,
  /^([0-9]){10}$/,
];
// Adding and removing the "is-invalid" class from the input tag inside form tag
// is-invalid class is responsible for the errors for the invalid input fields
let check = (el, i) => {
  let str = el.value;
  //regex[i].test(str) will give true and false value
  //if the input value is filled according the defined regular expression for the perticular field then return true else false;
  if (regex[i].test(str)) {
    el.classList.remove("is-invalid");
  } else {
    el.classList.add("is-invalid");
  }
};
// Checking whether the input fileds are filled correctly or not
fName.addEventListener("blur", () => {
  check(fName, 0);
});
lName.addEventListener("blur", () => {
  check(lName, 1);
});
address.addEventListener("blur", () => {
  check(address, 3);
});
email.addEventListener("blur", () => {
  check(email, 2);
});
number.addEventListener("blur", () => {
  check(number, 4);
});

//! When user click on the submit button following actions will be taken
submit.addEventListener("click", (e) => {
  e.preventDefault();
  // initialising a flag to false;
  let flag = false;
  // loop of all input tags available in the form
  Array.from(input).forEach((el, i) => {
    // Here checking again the input filleds, in case user directly click submit
    if (!(i == 5)) {
      check(el, i);
    }
    /*
    Here we check if the input class contains "is-invalid" or not.
    If the "is-invalid" is available then error pop up and flag changed to true; 
     */
    //? 'agree.checked' is for checking whether the checkbox is checked or not
    if (el.classList.contains("is-invalid") || !agree.checked) {
      flag = true;
      Alert("danger", "Error!", "Enter Valid details");
    }
  });
  //! If no error means the flag remain false and we changed it to true
  if (!flag) {
    Alert(
      "success",
      "Success!",
      "Your travel request has been submitted successfully"
    );
    getDetails(
      fName.value,
      lName.value,
      address.value,
      email.value,
      number.value
    );
    formDetails.reset();
  }
});
//responsible for the success or failur message
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
// Here we send the deta to the data base ...
function getDetails(fName, lName, address, email, number) {
  let data;
  data = `{ "FirstName": "${fName}", "LastName": "${lName}", "Address": "${address}", "E-mail": "${email}", "Number": "${number}" } `;
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

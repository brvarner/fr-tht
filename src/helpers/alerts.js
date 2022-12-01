import Swal from "sweetalert2";

// Here's where we export all of the alerts that fire upon successful or unsuccessful form submission

const successAlert = () => {
  Swal.fire(
    "Success!",
    `Thank you for signing up! Your information has been submitted.`,
    "success"
  );
};

const clientErrorAlert = () => {
  Swal.fire(
    "Client Error",
    "There's been a client-side error in your form submission. Wait a while and try again.",
    "error"
  );
};

const serverErrorAlert = () => {
  Swal.fire(
    "Server Error",
    "There's been an error with the server for this project, please contact the site administrator.",
    "error"
  );
};

export const formIncompleteAlert = () => {
  Swal.fire(
    "Form Incomplete",
    "Please complete the form and resubmit",
    "error"
  );
};

export const submitErrorAlert = () => {
  Swal.fire(
    "Submission Error",
    "There was an error submitting your information.",
    "error"
  );
};

export const validEmailAlert = () => {
  Swal.fire(
    "Invalid Email",
    "Please check your email address and resubmit the form.",
    "info"
  );
};

export const noNameAlert = () => {
  Swal.fire(
    "Add Name",
    "Please add your full name and resubmit the form.",
    "info"
  );
};

export const noPasswordAlert = () => {
  Swal.fire(
    "Add Password",
    "Please add your password and resubmit the form.",
    "info"
  );
};

export const shortPasswordAlert = () => {
  Swal.fire(
    "Password Too Short",
    "Password must be more than 8 characters.",
    "info"
  );
};

export const noOccupationAlert = () => {
  Swal.fire(
    "Select Occupation",
    "Please select an occupation from the available list and resubmit the form.",
    "info"
  );
};
export const noStateAlert = () => {
  Swal.fire(
    "Select State",
    "Please select your home state from the available list and resubmit the form.",
    "info"
  );
};

export const statusCodeAlert = (statusCode) => {
  if (statusCode >= 200 && statusCode < 300) {
    successAlert();
  } else if (statusCode >= 400 && statusCode < 500) {
    clientErrorAlert();
  } else if (statusCode >= 500) {
    serverErrorAlert();
  }
};

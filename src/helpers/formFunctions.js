import bcrypt from "bcryptjs";
import {
  statusCodeAlert,
  validEmailAlert,
  noNameAlert,
  noOccupationAlert,
  noPasswordAlert,
  shortPasswordAlert,
  noStateAlert,
} from "./alerts";

// This function validates the email as the user submits.
export const validateEmail = (email) => {
  let re = /^\S+@\S+\.\S+$/;
  return re.test(email);
};

// This function hashes the user's password before sending it to the
// server.
export const passwordHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

// This function handles the actual submission, firing errors depending
// on the status code we receive from the server.
export const submitData = async (
  name,
  email,
  password,
  occupation,
  state,
  setName,
  setEmail,
  setPassword,
  setOccupation,
  setHomeState
) => {
  console.log("click");
  // We start by establishing a variable to perform the email check when the user clicks submit.
  let validEmail = validateEmail(email);

  // We then check every possible field before validating the email so that we can warn the user
  // if the form is incomplete.
  if (name === "") {
    noNameAlert();
    return;
  }
  if (password === "") {
    noPasswordAlert();
    return;
  }
  if (password.length < 8) {
    shortPasswordAlert();
    return;
  }
  if (occupation === "") {
    noOccupationAlert();
    return;
  }
  if (state === "") {
    noStateAlert();
    return;
  }
  if (
    name &&
    email &&
    password.length > 8 &&
    occupation !== "Occupation" &&
    state
  ) {
    // Salting/Hashing password before sending it to endpoint
    const hashedPW = passwordHash(password);

    // Creating JSON object to submit to endpoint
    const data = {
      name,
      email,
      password: hashedPW,
      occupation,
      state,
    };
    const endpoint = "https://frontend-take-home.fetchrewards.com/form";

    try {
      // Here, we make sure the email is valid before the actual JSON submission process.
      if (validEmail === false) {
        validEmailAlert();
      } else {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        });
        // We clear all inputs upon successful submission.
        setName("");
        setEmail("");
        setPassword("");
        setOccupation("");
        setHomeState("");
        statusCodeAlert(response.status);
      }
    } catch (error) {
      console.error(`ERROR: ${error}`);
    }
  }
};

// This function grabs the data for the dropdown menus.
export const grabData = async () => {
  const endpoint = "https://frontend-take-home.fetchrewards.com/form";

  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};

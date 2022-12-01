import React, { useState, useEffect } from "react";
import { Form, Dropdown, Spacer } from "../../components";
import { Footer, Hero } from "..";
import { grabData, submitData } from "../../helpers";

// This container holds everything between the header and the footer.
export default function HomeContainer({ props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [occData, setOccData] = useState("");
  const [stateData, setStateData] = useState("");

  const [occupation, setOccupation] = useState("");
  const [homeState, setHomeState] = useState("");

  const [stateDropdownActive, setStateDropdownActive] = useState(false);
  const [occDropdownActive, setOccDropdownActive] = useState(false);

  const isInvalid = password === "" || email === "";

  const dataFetcher = async () => {
    let json = await grabData();
    setOccData(json.occupations);
    setStateData(json.states);
  };

  useEffect(() => {
    dataFetcher();
  }, []);

  return (
    <div>
      <Spacer background={"./images/heroSpacer.svg"} />

      <Form>
        <Form.Title>Create Account</Form.Title>
        <Form.Input
          placeholder="Full Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
        <Form.Input
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <Form.Input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />

        <Dropdown id="StateSelect">
          <Dropdown.Container
            active={stateDropdownActive}
            setActive={setStateDropdownActive}
            placeholder="State"
            data={stateData}
            setSelection={setHomeState}
            selection={homeState}
          ></Dropdown.Container>
        </Dropdown>

        <Dropdown id="OccupationSelect">
          <Dropdown.Container
            active={occDropdownActive}
            setActive={setOccDropdownActive}
            placeholder="Occupation"
            data={occData}
            setSelection={setOccupation}
            selection={occupation}
          ></Dropdown.Container>
        </Dropdown>

        <Form.Submit
          onClick={() => {
            submitData(
              name,
              email,
              password,
              occupation,
              homeState,
              setName,
              setEmail,
              setPassword,
              setOccupation,
              setHomeState
            );
          }}
          disabled={isInvalid}
        >
          Submit
        </Form.Submit>
        <Form.TextSmall>
          If the submit button remains dark, even after you've completed the
          form, check all of your inputs and make sure they're valid before
          trying to submit.
        </Form.TextSmall>
      </Form>

      <Spacer background={"./images/footerSpacer.svg"} />
    </div>
  );
}

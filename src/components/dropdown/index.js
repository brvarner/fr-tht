import React from "react";
import {
  DropdownBase,
  Container,
  Header,
  Item,
  Body,
  Icon,
} from "./styles/dropdown";

export default function Dropdown({ children, ...restProps }) {
  return <DropdownBase {...restProps}>{children}</DropdownBase>;
}

Dropdown.Container = function DropdownContainer({
  children,
  active,
  setActive,
  placeholder,
  data,
  type,
  setSelection,
  selection,
  ...restProps
}) {
  const stateSelect = (item) => {
    setSelection(item.name);
    setActive((active) => !active);
  };

  const occupationSelect = (item) => {
    setSelection(item);
    setActive((active) => !active);
  };

  return (
    <Container {...restProps}>
      <Header onClick={() => setActive((active) => !active)}>
        {/* If the selection exists, we replace the placeholder with the user's pick. */}
        {selection === "" ? placeholder : selection}
        <Icon>
          {/* We conditionally render the dropdown icon based on if the dropdown is open or not. */}
          {active ? (
            <img src="/images/chevronUp.png" alt="Close Dropdown Menu" />
          ) : (
            <img src="/images/chevronDown.png" alt="Open Dropdown Menu" />
          )}
        </Icon>
      </Header>
      {active && (
        <Body>
          {data?.map((item, index) =>
            // Here we check to see if the item is an object with an abbreviation key.
            // If so, we know that we need the state select function, if not, we're selecting occupation.
            item.abbreviation ? (
              <Item key={index} onClick={() => stateSelect(item)}>
                {/* We have to make this reusable between states and occupations. Item.abbreviation works for states, but  */}
                {item.name}
              </Item>
            ) : (
              <Item key={index} onClick={() => occupationSelect(item)}>
                {/* We have to make this reusable between states and occupations. Item.abbreviation works for states, but  */}
                {item}
              </Item>
            )
          )}
        </Body>
      )}
    </Container>
  );
};

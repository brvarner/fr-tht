import React, { useState } from "react";
import {
  DropdownBase,
  Container,
  Header,
  Item,
  Body,
  Icon,
  IconImage,
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
        {selection === "" ? placeholder : selection}
        <Icon active={active}>
          <IconImage
            src="/images/chevron.png"
            color="black"
            alt="Dropdown Button"
          />
        </Icon>
      </Header>
      {active && (
        <Body>
          {data?.map((item, index) =>
            //
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

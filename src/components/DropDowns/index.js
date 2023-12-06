import React from 'react'
import {
    StyledCountryDropDown,
    StyledStateDropDown,
    StyledStateDropDownContainer,
    StyledCityDropDown
} from "./style";

export const CountryDropdown = ({ value = 'United States', onChange }) => {
    return (
 <StyledCountryDropDown
            defaultOptionLabel="Country *"
            value={value}
            onChange={onChange}
        />
    )
}

export const StateDropdown = ({country = 'United States', value, onChange, labelType='short' }) => {
    return (
        <StyledStateDropDownContainer>
        <StyledStateDropDown
          blankOptionLabel="No country selected"
          defaultOptionLabel="Select State *"
          country={country}
          value={value}
          onChange={onChange}
          labelType={labelType}
        />
      </StyledStateDropDownContainer>
    )
}


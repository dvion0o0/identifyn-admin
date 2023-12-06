import styled from "styled-components";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import AngleDown  from "../../assets/angle-down.png";


export const StyledCountryDropDown = styled(CountryDropdown)`
 border-radius: 12px;
 border: 2px solid #F1EEFC !important;
background: #FCFCFC;
backdrop-filter: blur(19px);
display: flex;
height: 48px;
padding: 10px 12px;
  outline: unset !important;
  border: unset !important;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.002em;
  color:  #28272E;
  width: 100%;
  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
  @media (max-width: 1000px) {
    width: -webkit-fill-available;
  }

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${AngleDown});
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
`;

export const StyledStateDropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
  @media (max-width: 1000px) {
    width: -webkit-fill-available;
  }
`;

export const StyledStateDropDown = styled(RegionDropdown)`
  border-radius: 12px;
border: 1px solid #F1EEFC;
background: #FCFCFC;
backdrop-filter: blur(19px);
display: flex;
height: 48px;
padding: 10px 12px;
  outline: unset !important;
  border: unset !important;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #28272e;
  width: 100%;
  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
  @media (max-width: 1000px) {
    width: -webkit-fill-available;
  }

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${AngleDown});
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
`;



import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Select from "react-select"
const Example = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  return (
    <div>
      <CountryDropdown value={country} onChange={(val) => selectCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
      />
    </div>
  );
};

export default Example;


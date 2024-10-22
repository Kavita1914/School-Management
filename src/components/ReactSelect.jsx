import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const ReactSelect = () => {
  // countyList
  const country = [
    {
      label: 'Australia',
      value: 'australia',
    },
    {
      label: 'Belgium',
      value: 'belgium',
    },
    {
      label: 'China',
      value: 'china',
    },
    {
      label: 'Canada',
      value: 'canada',
    },
    {
      label: 'India',
      value: 'India',
    },
  ]

  return (
    <>
      <div className="react-select">

        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[country[2]]}
          isMulti
          options={country}
        />
      </div>
    </>
  )
}

export default ReactSelect

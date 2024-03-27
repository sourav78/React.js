import React, { useState } from "react";

const contries = [
  {
    country: "India",
    code: "IN",
    city: ["BBSR", "Mumbai"],
  },
  {
    country: "Pakistan",
    code: "PAK",
    city: ["LAKNOW", "Lahor"],
  },
  {
    country: "USA",
    code: "US",
    city: ["NYC", "LA"],
  },
];

const DynamicDropdown = () => {

    const [contry, setContry] = useState('');
    

  return (
    <>
      <div className="bg-gray-200">
        <h1>Dynamic Dropdown</h1>
        <select
            onChange={(e) => {
                console.log(e.target.value);
                setContry(e.target.value)
            }}
        >
            <option value="">Select coutry</option>
          {contries.map((country) => (
            <option value={country.code}>{country.country}</option>
          ))}
        </select>

        {
            contry && (
                <select>
                    {
                        contries.map(count => {
                            if(count.code === contry){
                                console.log(count.city);
                                return count.city.map(city => (
                                    <option value={city}>{city}</option>
                                ))
                            }
                        })
                    }
                </select>
            )
        }
      </div>
    </>
  );
};

export default DynamicDropdown;

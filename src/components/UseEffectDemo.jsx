import { useState, useEffect } from "react";
export default function UseEffectDemo() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setName(data));
  }, []);

  const [selectedNames, setSelectedNames] = useState(null);
  const [selectedNamesDetails, setSelectedNamesDetails] = useState(null);

  useEffect(() => {
    if (selectedNames) {
      fetch(`/${selectedNames}.json`)
        .then((response) => response.json())
        .then((data) => setSelectedNamesDetails(data));
    }
  }, [selectedNames]);

  return (
    <>
      <h4>
        Names:{" "}
        {name.map((data, index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                setSelectedNames(data);
              }}
            >
              {data}
            </button>
          );
        })}
      </h4>

      <div>{JSON.stringify(selectedNamesDetails)}</div>
    </>
  );
}

import React, { useEffect, useState } from "react";

const Recipes = () => {
  const [jsonData, setJsonData] = useState([]);
  const [sheetType, setSheetType] = useState("Rate%20Sheet");

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyQUpYJBRA2zvEco");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch(
      `https://api.airtable.com/v0/app5fb7osBYFaesa2/${sheetType}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setJsonData(data.records);
        console.log(jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sheetType]);

  return (
    <div>
      <button onClick={() => setSheetType("Rate%20Sheet")}>RATE-SHEET</button>
      <button onClick={() => setSheetType("Order%20Sheet")}>ORDER-SHEET</button>
      <button onClick={() => setSheetType("Item%20Data")}>ITEM-DATA</button>
      <h4>{sheetType}</h4>
      {jsonData.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default Recipes;

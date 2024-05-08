import React, { useState } from "react";

function Test() {
  const [input, setInput] = useState("");
  const [translated, settranslated] = useState("");

  const solve = async (e) => {
    e.preventDefault()
    console.log("Loading...");
    const url = "https://deep-translate1.p.rapidapi.com/language/translate/v2";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "1a8fbded2dmsh353a939f0290138p1f5a26jsn1391347e2ecd",
        "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
      },
      body: JSON.stringify({
        q: input,
        source: "en",
        target: "ha",
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      settranslated(result.data?.translations?.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center">Test Language</h1>
      <form onSubmit={(e)=>solve(e)} className="flex items-center justify-center mt-5">
        <input value={input} onChange={(e)=>setInput(e.target.value)} required type="text" placeholder="Enter Text" className="bg-gray-100 px-4 py-2" />
        <button className="py-2 px-5 bg-slate-800 text-white">Translate</button>
      </form>
      <h1 className="text-7xl text-center my-5 font-semibold">{translated}</h1>
    </div>
  );
}

export default Test;

const solve = async () => {
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
      q: "Hello World!",
      source: "en",
      target: "ar",
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

solve();

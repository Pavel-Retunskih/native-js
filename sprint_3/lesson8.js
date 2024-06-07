const foo = async () => {
  console.log("start");
  try {
    const dataFromYahoo = await fetch("https://yahoo.com/");
    console.log(dataFromYahoo.url);
    const dataFromBing = await fetch("https://bing.com/");
    console.log(dataFromBing.url);
    const dataFromGoogle = await fetch("https://google.com/");
    console.log(dataFromGoogle.url);
  } catch (err) {
    console.log(err);
  }
  console.log("end");
};

foo();

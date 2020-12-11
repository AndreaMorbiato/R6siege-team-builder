const puppeteer = require('puppeteer');

async function getAccount(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [name] = await page.$x('//*[@id="profile"]/div[1]/div/h1/span[1]');
  const txt = await name.getProperty('textContent');
  const rawtext = await txt.jsonValue();
  
  const [kd] = await page.$x('//*[@id="profile"]/div[3]/div[1]/div[1]/div[3]/div/div[4]/div[2]');
  const txtKD = await kd.getProperty('textContent');
  const kdValue = await txtKD.jsonValue();
  
  const [rank] = await page.$x('//*[@id="profile"]/div[3]/div[2]/div[1]/div[1]/div/div[2]/div[1]/div[1]');
  const txtRank = await rank.getProperty('textContent');
  const rankValue = await txtRank.jsonValue();
  
  const [mmr] = await page.$x('//*[@id="profile"]/div[3]/div[2]/div[1]/div[1]/div/div[2]/div[1]/div[2]');
  const txtMMR = await mmr.getProperty('textContent');
  const mmrValue = await txtMMR.jsonValue();
  

  console.log(rawtext, kdValue, rankValue, mmrValue); 
  await browser.close();
  
}
function test(a,b){
  var a = 4;
  var b = 5;
  return a * b
}

document.getElementById("demo").innerHTML = test(a,b)

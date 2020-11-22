const puppeteer = require('puppeteer-core');

//setInterval();

//update status every 5 second
 setInterval(function(){
  run();
}, 20000);

async function run (){

  try {

    const browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      args: ["--user-data-dir=./Google/Chrome/User Data/"]
    });

    const page = await browser.newPage();

    //await page.setViewport({ width: 1920, height: 500});
    await page.goto('https://app.glip.com/', { waitUntil: 'networkidle2' });


    await page.waitForXPath('//*[@id="478127792130"]')
    await page.click



    // await page.waitForSelector('#compose_forms > form > div.inputcontainer.has-giphy > textarea')
    //await page.click('#compose_forms > form > div.inputcontainer.has-giphy > textarea')
    //await page.type('#compose_forms > form > div.inputcontainer.has-giphy > textarea', 'Thank You for Reaching Will get back to you in few minutes (Automated Reply)')
    //await page.keyboard.press('Enter');

    //#menu > div.body > ul > div.tb-menu-header > div.topbar_menu_header > div.topbar_status_picker.show_clear.active



    //get battery percentage
    const level1 = await page.evaluate(() => navigator.getBattery().then(function (battery) {

      var level = battery.level;

      return level * 100;
    }))



    var str1 = "Current Battery Status ";
     
    var res = str1.concat(level1);

    var str2 =res.concat("%")

    await page.waitForSelector('#tb_contact_presence > div > div.headshot-widget.headshot-size-36.contactheadshot-widget > div.headshot-36 > img')
    await page.click('#tb_contact_presence > div > div.headshot-widget.headshot-size-36.contactheadshot-widget > div.headshot-36 > img')

    await page.waitForSelector('#custom-status-widget-wrapper')
    await page.click('#custom-status-widget-wrapper')

    await page.keyboard.down('Control');
    await page.keyboard.press('KeyA');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');

    await page.type('#custom-status-widget-wrapper', str2)
    await page.keyboard.press('Enter');




    await page.waitForSelector('sidebar-component');


    await browser.close();

  } catch (err) {
    //
  }


}


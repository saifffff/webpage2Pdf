const express = require('express');
const { default: puppeteer } = require('puppeteer');
const pup = require('puppeteer');

const app = express();

app.listen(3000,()=>{
    console.log('server started');
})

const url = "https://nados.io/article/introduction-to-graphs-and-its-representation?zen=true";

async function web2pdf(){
    const browser = await puppeteer.launch();
    const webPage = await browser.newPage();
    await webPage.goto(url,{
        waitUntil:"networkidle0"
    })

    await webPage.pdf({
        printBackground: true,
        displayHeaderFooter: true,
        path:"webPage.pdf",
        format:'A4'

    }).then(_=>{
        console.log("done");
    }).catch(e=>{
        console.log(e);
    })

    await browser.close();
}


web2pdf(url);
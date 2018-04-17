var newPass = "";
var fs = require("fs");
var usO = ["admin", "adm"];
var psO = ["Joao3083", "J30832139v"];
var ip = require("ip");
var address = ip.address();
var loginAttempts = fs.readFileSync('loginAttempt');
function err()
{
    console.log("error...");
}
function loadWeb()
{
    var express = require('express');
    var app = new express();
    var server = app.listen(80, listenning);
    function listenning()
    {
        console.log("Listenning on " + address + ":80");
    }
    app.use(express.static('web'));
}
var prompt = require('prompt');
prompt.start();
function login(){
    prompt.get(['user', 'pass'], function (err, result) {
        console.log('Get user: ' + result.user);
        for(var i = 0; i < result.pass.length; i++)
        {
            newPass += "*";
        }
        console.log('Get pass: ' + newPass);
        if(usO.includes(result.user) == true && psO.includes(result.pass) == true)
        {
            loadWeb();
        }
        else
        {
            console.log("user or pass invalid");
            loginAttempts++;
            fs.writeFileSync("loginAttempt", loginAttempts);
        }  
    });
}
function register()
{
    prompt.get(['user', 'pass'], function (err, result) {
        console.log('Get user: ' + result.user);
        console.log('Get pass: ' + result.pass);
        if(result.user != null && result.pass != null && usO.includes(result.user) == false && psO.includes(result.pass) == false)
        {
           
        }
        else
        {
            if(usO.includes(result.user) && psO.includes(result.pass))
            {
                console.log("Already exists");
            
            }
            if(result.use == null || result.pass == null)
            {
                console.log("Please fill both camps");
            }
        }
    });
}
console.log("1 - Login");
console.log("2 - Register");
prompt.get(['action'], function (err, result) {
    if(result.action == "1")
    {
        console.log('Login OK');
        login();
    }
    if(result.action == "2")
    {
        console.log('Register OK');
        register();
    }
});
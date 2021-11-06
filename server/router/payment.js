const express = require("express");
const app= express();
const https = require("https");
const qs = require("querystring");
const checksum_lib = require("./Paytm/checksum");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.PORT;

const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });

 
  app.post("/paynow", [parseUrl, parseJson], (req, res) => {

    console.log("payment");
    console.log(req.body);
    const { name, email, phone} =req.body;
    console.log("name",name);
    console.log("email",email);
    console.log("phone",phone);


    // Route for making payment
  
    var paymentDetails = {
      amount: 200,
      customerId: name.replace(/\s/g,''),
      customerEmail:email,
      customerPhone:phone
  }
  if(!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone) {
      res.status(400).send('Payment failed')
  } else {
      var params = {};
      params['MID'] = process.env.MID;
      params['WEBSITE'] = "DEFAULT";
      params['CHANNEL_ID'] = 'WEB';
      params['INDUSTRY_TYPE_ID'] = 'Retail';
      params['ORDER_ID'] =  "oneClub"+ new Date().getTime();
      params['CUST_ID'] = paymentDetails.customerId;
      params['TXN_AMOUNT'] = paymentDetails.amount;
      params['CALLBACK_URL'] = "http://localhost:"+{port}+"/callback";
      params['EMAIL'] = paymentDetails.customerEmail;
      params['MOBILE_NO'] = paymentDetails.customerPhone;
  
  
      checksum_lib.genchecksum(params, process.env.MKEY, function (err, checksum) {
          //var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
           var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
  
          var form_fields = "";
          for (var x in params) {
              form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
          }
          form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";
  
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
          res.end();
      });
  }
  });
  app.post("/callback", (req, res) => {
    // Route for verifiying payment
  
    var body = '';
  
    req.on('data', function (data) {
       body += data;
    });
  
     req.on('end', function () {
       var html = "";
       var post_data = qs.parse(body);
  
       // received params in callback
       console.log('Callback Response: ', post_data, "\n");
  
  
       // verify the checksum
       var checksumhash = post_data.CHECKSUMHASH;
       // delete post_data.CHECKSUMHASH;
       var result = checksum_lib.verifychecksum(post_data, process.env.MKEY, checksumhash);
       console.log("Checksum Result => ", result, "\n");
  
  
       // Send Server-to-Server request to verify Order Status
       var params = {"MID": process.env.MID, "ORDERID": post_data.ORDERID};
  
       checksum_lib.genchecksum(params, process.env.MKEY, function (err, checksum) {
  
         params.CHECKSUMHASH = checksum;
         post_data = 'JsonData='+JSON.stringify(params);
  
         var options = {
          // hostname: 'securegw-stage.paytm.in', // for staging
          hostname: 'securegw.paytm.in', // for production
           port: 443,
           path: '/merchant-status/getTxnStatus',
           method: 'POST',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
             'Content-Length': post_data.length
           }
         };
  
  
         // Set up the request
         var response = "";
         var post_req = https.request(options, function(post_res) {
           post_res.on('data', function (chunk) {
             response += chunk;
           });
  
           post_res.on('end', function(){
             console.log('S2S Response: ', response, "\n");
  
             var _result = JSON.parse(response);
               if(_result.STATUS == 'TXN_SUCCESS') {
                   res.send('payment sucess')
                   const userExist = User.findOne({email:post_data.email});
                   if(userExist){
                     userExist.st="active";
                     userExist.balance=200;
                     userExist.save();
                   }
                   
                   

               }else {
                   res.send('payment failed')
               }
             });
         });
  
         // post the data
         post_req.write(post_data);
         post_req.end();
        });
       });
       k
  });
  
  module.exports= app;
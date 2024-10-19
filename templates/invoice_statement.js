module.exports = (data, bal,obj, ) => {
    const generateTransactionRows = (transactions) => {
      return transactions
        .map((transaction) => {
         
  
          return `
          <tr class="details" style="text-align: left;font-size: 10px;border-bottom: 1px solid #BBB5B5;">
            <td style="padding-bottom: 7px; padding-top: 7px; padding-left: 10px; vertical-align: top;">${transaction.date}</td>
            <td style="padding-bottom: 7px; padding-top: 7px; padding-left: 10px; vertical-align: top;">'Test'</td>
            <td style="padding-bottom: 7px; padding-top: 7px; padding-left: 10px; vertical-align: top;">${transaction.description}</td>
            <td style="padding-bottom: 7px; padding-top: 7px; padding-left: 10px; vertical-align: top;">${5}</td>
            <td style="padding-bottom: 7px; padding-top: 7px; padding-left: 10px; vertical-align: top;">${2}</td>
            <td style="padding-bottom: 7px; padding-top: 7px; padding-left: 10px; vertical-align: top;">${55}</td>
          </tr>
        `;
        })
        .join("");
    };
    const transactionRowsHTML = generateTransactionRows(obj.rows);
    console.log(transactionRowsHTML, "transactionRowsHTML@@");
  
    return `
          <html>
              <head>
                  <style>
                      body {
                          background-color: #fff;
                          font-family: 'Open Sans', sans-serif;
                          font-size: 100%;
                          font-weight: 400;
                          line-height: 1.4;
                          color: #000;
                      }
                      /* Define page breaks */
                      .page-break {
                          page-break-before: always;
                      }
                      .page-break-after {
                          page-break-after: always;
                      }
                      /* Additional styles */
                      /* Add your custom styles here */
                  </style>
              </head>
              <body>
                  <div class="document">
                      <!-- Your existing HTML content goes here -->
                      <!-- Example content with page breaks -->
                          <!-- Content for a new page -->
                          <div style="max-width: 660px; margin: 30px auto 0; padding: 10px 10px; border: 1px solid #eee; font-size: 14px; line-height: normal; background: #fff; color: #555; padding-top: 10px;">
            <table style="width: 100%; line-height: inherit;text-align: left; border-spacing: 0px; margin-bottom: 5px;">
               <thead>
                  <tr>
                     <td style="width:50%;padding:0px 0px;vertical-align:top;" >
                        <img style="max-width: 100px;" src="moneylogo.png" alt="Account Invoice">
                     </td>
                  </tr>
                  <tr>
                     <td style="width:65%;padding:5px 0px;vertical-align:top;padding-bottom: 0px;" >
                         <p style="font-size: 8px; margin: 0px; font-weight: 300; line-height: normal;margin-bottom: 45px;">
                           <span style="font-weight:500; padding-right: 15px;width: 160px; display: inline-block;">
                            Sample Address <br> 123 street, <br> PUNE, <br>IND 12B <br>India
                            </span>
                         </p>
                        
                          <p style="margin: 0 0 0px 0; padding: 0; font-size: 8px;line-height: normal;">
                          <span style="display:block;font-weight:bold;font-size:8px;"></span>
                          ${data.first_name} <Br> ${
      data.address.apartment + " " + data.address.street
    } <Br> ${data.address.city} <br> ${
      data.address.country != null ? data.address.country : ""
    } </p>
                    </td> 
                    
                    <td style="width:35%;padding:5px 0px;vertical-align:top;padding-bottom: 0px;" >
                       <p style="margin:0px;color:#113140;font-weight: 600;font-size: 10px;  margin: 0px; color: #113140; text-align: left;margin-top: 70px;    margin-bottom: 10px;">Customer Service Information</p>
                      <p style="margin:0 0 0px 0;padding:0;display:block;font-size:8px;text-align:left;line-height: normal; margin-bottom: 8px;">
                          <b>E:</b> support@xyz.com
                      </p>
                      <p style="margin:0 0 0px 0;padding:0;display:block;font-size:8px;text-align:left;line-height: normal; margin-bottom: 8px;">
                          <b>W:</b> www.xyz.com
                      </p>
                      <p style="margin:0 0 0px 0;padding:0;display:block;font-size:8px;text-align:left;line-height: normal;">
                          <b>A:</b> Your Invoice
                      </p>
                      <p style="margin:0 0 0px 0;padding:0;display:block;font-size:8px;text-align:left; padding-left: 14px; line-height: normal; margin-bottom: 20px;">  Sample Address <br> 123 street, <br> PUNE, <br>IND 12B <br>India </p>
                    </td> 
                 </tr>
                 
                 <tr>
                    <td colspan="2" style="width:100%;padding:5px 0px;vertical-align:top;padding-bottom: 0px;" >
                        <h5 style="margin-bottom:10px; color:#113140; font-weight:600;font-size:10px;">Your Account Statement</h5>
                        <p style="font-size: 8px; margin: 0px; font-weight: 200; line-height: normal; margin-bottom:5px;">
                          <span style="font-weight:200; padding-right: 0px;width: 220px; display: inline-block;">
                            For January 29, 2024 - March 16, 2024
                           </span>
                        </p>
                        <p style="font-size: 8px; margin: 0px; font-weight: 500; line-height: normal;margin-bottom: 45px;">
                          <span style="padding-right: 15px;width: 160px; display: inline-block;">
                           ${data.first_name} 
                           </span>
                        </p>
                    </td> 
                 </tr>
              </thead>
           </table>
  
  
  
  <table cellpadding="0" cellspacing="0"  align="center">
                          <tbody>
                             <tr>
                                <td  align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                   <table bgcolor="transparent" align="center" cellpadding="0" cellspacing="0" width="660" style="background-color: transparent;">
                                      <tbody>
                                        <tr>
                                            <td style="width:100%;padding:0px 0px;vertical-align:top;" >
                                               <p style="font-size:10px;margin:0px;">
                                                  <span>
                                                  <b style="font-weight:bold; padding-right: 15px; color:#113140;">Account Summary</b>
                                                  </span>
                                               </p>
                                            </td>
                                         </tr>
                                        <tr>
                                            <td align="left">
                                               <table cellpadding="0" cellspacing="0" width="100%">
                                                  <tbody>
                                                     <tr>
                                                        <td width="660" align="center" valign="top" style="padding-top:8px;">
                                                           <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                 <tr>
                                                                    <td align="left" style="width:40%">
                                                                      <p style="font-size:7px;margin:0px; border-bottom:1px solid #BBB5B5; font-weight: 600;padding-bottom: 5px;padding-top: 4px;"> Beginning balance on 
                                                                       18/10/24 <span style="float: right;">400 INR</span></p>
                                                                    </td>
                                                                    
                                    
                                                                 </tr>
                                                                 <tr>
                                                                 
                                                                    
                                                                    <td align="right" style="width:60%">
                                                                       <p style="font-size:7px;margin:0px;color:#B50B0B; font-weight:700; padding-left:10px;    text-align: left;">deposits :500 INR </p>
                                                                    </td>
                                                                 </tr>
                                                                 <tr>
                                                                    <td align="left" style="width:40%">
                                                                      <p style="font-size:7px;margin:0px; border-bottom:1px solid #BBB5B5; font-weight: 600;padding-bottom: 5px;padding-top: 4px;"> Shopping and other expenses <span style="float: right;">0.00 INR</span></p>
                                                                    </td>
                                                                    
                                                                    
                                                                 </tr>
                                                               
                
                                                                 
                                                              </tbody>
                                                           </table>
                                                        </td>
                                                     </tr>
                                                     
                                                  </tbody>
                                               </table>
                                            </td>
                                         </tr>
                                      </tbody>
                                   </table>
                                </td>
                             </tr>
                          </tbody>
                       </table>
  
  
           <table style="width: 100%; line-height: inherit;text-align: left; border-spacing: 0px; margin-top: 0px;">
              <tbody>
  
                 <tr style="font-size:10px; line-height: 15px; ">
                    <td colspan="2" style="font-size:14px;padding:50px 0px 0 0px;">
                       <p style="font-size:11px; line-height: 15px; margin-top: 0px;color:#BC3F00; margin-bottom:15px;"><b>Here’s a tip</b></p>
                       <p style="font-size:10px; line-height: 10px;font-weight:700; margin-bottom: 5px; margin-top: 20px;"> Keep  your contact information updated </p>
                       <p style="font-size:8px; line-height: normal; margin-top: 0px;">Sample template for account and Invoice Statement providing user-friendly UI, hope you will find it well. </p>
                    </td>
                 </tr>
                 
                 <tr>
                    <td><h3 style="display: block; width: 100%; margin-top: 40px; font-size: 10px; font-weight: 700;">Is your account up to date ? Check now </h3></td>
                 </tr>
                 
              </tbody>
           </table>
        </div>
  
                      <div class="page-break">
                          <!-- Content for another new page -->
                           <div style="max-width: 660px; margin: 30px auto 0; padding: 10px 10px; border: 1px solid #eee; font-size: 14px; line-height: normal; background: #fff; color: #555; padding-top: 10px;">
           <table style="width: 100%; line-height: inherit;text-align: left; border-spacing: 0px; margin-bottom: 5px;">
              <thead>
                 <tr>
                    <td style="width:50%;padding:0px 0px;vertical-align:top;" >
                       <img style="max-width: 100px;" src="tradelogo.png" alt="Account Invoice>
                   
                    <td style="width:65%;padding:5px 0px;vertical-align:top;padding-bottom: 0px;" >
                       <p style="font-size: 8px; margin: 0px; font-weight: 300; line-height: normal;margin-bottom: 45px;">
                           <span style="font-weight:500; padding-right: 15px;width: 160px; display: inline-block;">
                            Sample Address <br> 123 street, <br> PUNE, <br>IND 12B <br>India
                            </span>
                         </p>
                       <p style="margin: 0 0 0px 0; padding: 0; font-size: 8px;line-height: normal;">
                          <span style="display:block;font-weight:bold;font-size:8px;"></span>
                          ${data.first_name} <Br> ${
      data.address.apartment + " " + data.address.street
    } <Br> ${data.address.city} <br> ${
      data.address.country != null ? data.address.country : ""
    } 
                       </p>
                    </td>
                    </td>

                    <td style="width:35%;padding:5px 0px;vertical-align:top;padding-bottom: 0px;" >
                       <p style="margin:0px;color:#113140;font-weight: 600;font-size: 10px;  margin: 0px; color: #113140; text-align: left;margin-top: 70px;    margin-bottom: 10px;">Customer Service Information</p>
                       <p style="margin:0 0 0px 0;padding:0;display:block;font-size:8px;text-align:left;line-height: normal; margin-bottom: 8px;">
                          <b>E:</b> mailto:support@xyzmoney.com
                       </p>
                       <p style="margin:0 0 0px 0;padding:0;display:block;font-size:8px;text-align:left;line-height: normal; margin-bottom: 8px;">
                          <b>W:</b> https://www.xyzmoney.com
                       </p>
                       <p style="margin:0 0 0px 0;padding:0;display:block;font-size:8px;text-align:left;line-height: normal;">
                          <b>A:</b> Your Invoice
                       </p>
                       <p style="margin:0 0 0px 0;padding:0;display:block;font-size:8px;text-align:left; padding-left: 14px; line-height: normal; margin-bottom: 20px;">Sample Address <br> 123 street, <br> PUNE, <br>IND 12B <br>India </p>
                    </td>
                 </tr>
                 <tr>
                     <td colspan="2" style="width:100%;padding:5px 0px;vertical-align:top;padding-bottom: 0px;" >
                       <h5 style="margin-bottom:10px; color:#113140; font-weight:600;font-size:10px;">Account Statement</h5>
                       <p style="font-size: 8px; margin: 0px; font-weight: 200; line-height: normal; margin-bottom:5px;">
                          <span style="font-weight:200; padding-right: 0px;width: 220px; display: inline-block;">
                          For ${data.start_date} - ${data.end_date}
                          </span>
                       </p>
                       <p style="font-size: 8px; margin: 0px; font-weight: 500; line-height: normal;margin-bottom: 45px;">
                          <span style="padding-right: 15px;width: 160px; display: inline-block;">
                          ${data.first_name} 
                          </span>
                       </p>
                    </td> 
                
                </tr>
              </thead> 
           </table>
            <table cellpadding="0" cellspacing="0" align="center">
                <tbody>
                  <tr>
                    <td align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                      <table bgcolor="transparent" align="center" cellpadding="0" cellspacing="0" width="660" style="background-color: transparent;">
                        <tbody>
                          <tr>
                            <td align="left">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="660" align="center" valign="top" style="padding-top:8px;">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="left">
                                              <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                                                <tbody>
                                                  <tr class="heading" style="text-align: left;">
                                                    <td style="background: #053C71; font-weight: 500; border: none; color: #fff; padding: 10px; margin-top: 10px;vertical-align: top; font-size: 11px;border-right:3px solid #fff;">Date</td>
                                                    <td style="background: #053C71; font-weight: 500; border: none; color: #fff; padding: 10px; margin-top: 10px;vertical-align: top; font-size: 11px;border-right:3px solid #fff;">Type</td>
                                                    <td style="background: #053C71; font-weight: 500; border: none; color: #fff; padding: 10px; margin-top: 10px;vertical-align: top; font-size: 11px;border-right:3px solid #fff;">Description</td>
                                                    <td style="background: #053C71; font-weight: 500; border: none; color: #fff; padding: 10px; margin-top: 10px;vertical-align: top; font-size: 11px;border-right:3px solid #fff;">Out</td>
                                                    <td style="background: #053C71; font-weight: 500; border: none; color: #fff; padding: 10px; margin-top: 10px;vertical-align: top; font-size: 11px;border-right:3px solid #fff;">In</td>
                                                    <td style="background: #053C71; font-weight: 500; border: none; color: #fff; padding: 10px; margin-top: 10px;vertical-align: top; font-size: 11px;border-right:3px solid #fff;">Balance</td>
                                                  </tr>
                                                  ${transactionRowsHTML}
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="width: 100%; line-height: inherit;text-align: left; border-spacing: 0px; margin-top: 0px;">
                <tbody>
                  <tr style="font-size:10px; line-height: 15px;">
                    <td colspan="2" style="font-size:14px;padding:50px 40px 0 40px;text-align: center;">
                      <p style="font-size:8px; line-height: normal; margin-top: 0px;text-align:center;">
                        VOT: Volume of trade is the cumulative revenue generated as a result of retail activity on your account.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>                    
            </body>
          </html>
      `;
  };
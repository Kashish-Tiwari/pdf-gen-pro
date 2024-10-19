const express = require('express');
const htmlToPdf = require('html-pdf');

const fs = require('fs');
const path = require('path');
require('dotenv').config();

const invoiceStatement = require('./templates/invoice_statement'); // Import the HTML template

const app = express();
app.use(express.json());

app.use('/generatedPDF', express.static(path.join(__dirname, 'public', 'generatedPDFs')));

app.get('/generate-pdf', async (req, res) => {
  try {
    // Static data for the PDF
    const client = {
      first_name: 'John',
      last_name: 'Doe',
      start_date: '2024-01-01',
      end_date: '2024-12-31',
      address: {
        apartment: '101',
        city: 'Sample City',
        street: 'Pune Cant',
        country: 'INDIA',
      },
      currency: 'INR',
    };

    const transactions ={
        rows:[  { date: '2024-01-10', description: 'Deposit', amount: 100 },
            { date: '2024-02-15', description: 'Withdrawal', amount: -50 },
            { date: '2024-03-05', description: 'Payment', amount: -20 },]
    }

    const balance = {
      start_balance: 1000,
      end_balance: 1030,
    };

    // Generate populated HTML
    const populatedHtml = invoiceStatement(client, balance, transactions);

    const filename = `transaction_${client.first_name}_${client.last_name}.pdf`;
    const filePath = path.join(__dirname, 'public', 'generatedPDFs', filename);

    htmlToPdf.create(populatedHtml, {
      childProcessOptions: {
        env: {
          OPENSSL_CONF: '/dev/null', // Set OpenSSL configuration to /dev/null
        },
      },
    }).toStream(function (err, stream) {
      if (err) {
        console.error('Error generating PDF:', err);
        return res.status(500).json({
          error: 'Internal server error',
          message: 'Failed to generate PDF',
          reason: err.message,
        });
      }

      const fileWriteStream = fs.createWriteStream(filePath);
      fileWriteStream.on('error', (error) => {
        console.error("Error writing PDF to file:", error);
        return res.status(500).json({
          error: "Internal server error",
          message: "Failed to write PDF to file",
          data: {},
        });
      });

      fileWriteStream.on('finish', () => {
        const fileUrl = `${process.env.SERVER_URL?process.env.SERVER_URL:'http://localhost:3006'}/generatedPDF/${filename}`;
        return res.status(200).json({
          status: true,
          message: 'PDF generated successfully',
          url: fileUrl,
        });
      });

      stream.pipe(fileWriteStream);
    });

    
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

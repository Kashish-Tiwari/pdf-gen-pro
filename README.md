# PDF-Gen-Pro

PDF-Gen-Pro is a simple and efficient Node.js application for converting HTML templates into PDF files.
This project is ideal for generating invoices, statements, or any other documents that require a professional layout.

# Table of Contents-
* Features
* Installation
* Usage
* API Endpoints
* Configuration
* Error Handling
* Contributing
* Acknowledgements
* Features
* Convert HTML templates into PDF files using Node.js.
* Serve generated PDFs via a RESTful API.
* Easy integration with existing applications.
* Static data example provided for demonstration purposes.

# Features
* Convert HTML templates into PDF files using Node.js.
* Serve generated PDFs via a RESTful API.
* Easy integration with existing applications.
* Static data example provided for demonstration purposes.

# Installation
To get started with the PDF-Gen-Pro project, follow these steps:

1. Clone the repository:
git clone https://github.com/yourusername/pdf-gen-pro.git
cd pdf-gen-pro

2. Install dependencies:
   npm install
   
3. Set up environment variables:
Create a .env file in the root directory and add the following:
PORT = 3006
SERVER_URL= http://localhost:3006
OPENSSL_CONF: '/dev/null'

*Elaboration-
PORT: Specifies the port on which the server will listen for incoming requests. In this case, it is set to 3006.

SERVER_URL: Defines the base URL for the server. This is useful for constructing URLs in the API responses. Here, it is set to http://localhost:3006.

OPENSSL_CONF:This variable is set to /dev/null to bypass OpenSSL's default configuration files.When using the html-pdf library, there can be issues related to loading OpenSSL modules, which may lead to errors during PDF generation.
By setting OPENSSL_CONF to /dev/null, we instruct OpenSSL to ignore any configuration files, thus preventing potential errors related to missing or misconfigured OpenSSL modules. 
This is especially helpful in environments where the OpenSSL configuration might not be set up correctly, ensuring smoother execution of PDF generation without interruption.

# Usage
To run the application, use the following command:
 npm start
The server will start on port 3006 (or any port specified in your .env file).

# API Endpoints
* Generate PDF
1. Endpoint: GET /generate-pdf

2.Description: Generates a PDF document based on static client data and a predefined HTML template.

3.Response:
{
  "status": true,
  "message": "PDF generated successfully",
  "url": "http://localhost:3006/generatedPDF/transaction_John_Doe.pdf"
}

# Configuration
* HTML Template
The project uses an HTML template for generating the PDF. The template is located in the ./templates directory.
You can customize the invoice_statement.js file to modify the structure and style of the PDF.

* Static Data
In the /generate-pdf endpoint, you can modify the client, transactions, and balance objects to customize the data being passed into the PDF generation process.

# Error Handling
The application includes basic error handling for PDF generation and file writing processes. If an error occurs, it will respond with an appropriate status code and error message.

# Contributing
Contributions are welcome! Please follow these steps:

 1.Fork the repository.
 2. Create a new branch (git checkout -b feature/YourFeature).
 3.Make your changes and commit them (git commit -m 'Add some feature').
 4. Push to the branch (git push origin feature/YourFeature).
 5. Open a pull request.
 
# Acknowledgements
* Node.js - JavaScript runtime for building scalable applications.
* html-pdf - Library for generating PDFs from HTML.

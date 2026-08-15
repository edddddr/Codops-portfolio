# Transaction Reporter

A lightweight JavaScript application that processes local transaction data to calculate totals based on their financial type (credit or debit).


### Project Structure
The project is split into three modular JavaScript files using ES modules:

`transactions.js:` Serves as the data layer, exporting an array of transaction records with fields for ID, customer name, amount, and transaction type.

`report.js:` Acts as the logic layer, containing a reusable utility function (totalByType) to filter and aggregate transaction amounts.

`app.js:` The orchestrator and execution entry point that brings together the data and logic layers to compute and display results.
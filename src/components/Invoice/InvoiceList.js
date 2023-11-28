// components/Invoice/InvoiceListComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const InvoiceList = ({ invoices }) => {
  console.log("at in invoice list 118");
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Invoices</h1>

      <ul>
        {invoices.map((invoice) => (
          <li
            key={invoice.id}
            className="bg-gray-100 p-4 rounded-md mb-4 hover:shadow-md transition duration-300"
          >
            <Link to={`/invoices/${invoice.id}`} className="text-blue-600 font-semibold">
              Invoice #{invoice.invoiceNumber}
            </Link>
            <p className="text-gray-600">Date: {invoice.date}</p>
            <p className="text-gray-600">Customer: {invoice.customerName}</p>
            <p className="text-gray-600">Total Amount: ${invoice.totalAmount}</p>
          </li>
        ))}
      </ul>

      <Link
        to="/invoices/create"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block mt-4"
      >
        Add Invoice
      </Link>
    </div>
  );
};

export default InvoiceList;

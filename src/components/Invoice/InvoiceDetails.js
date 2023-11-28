// components/Invoice/InvoiceDetailComponent.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const InvoiceDetails = ({ invoices, saveInvoice, deleteInvoice }) => {
  const history = useNavigate();
  const { id } = useParams();
  const [invoice, setInvoice] = useState({
    id: "",
    date: "",
    invoiceNumber: 0,
    customerName: "",
    billingAddress: "",
    shippingAddress: "",
    GSTIN: "",
    items: [],
    billSundrys: [],
    totalAmount: 0,
  });

  const isNewInvoice = id === "0";

  useEffect(() => {
    if (!isNewInvoice) {
      const existingInvoice = invoices.find((inv) => inv.id === id);
      if (existingInvoice) {
        setInvoice(existingInvoice);
      }
    }
  }, [invoices, isNewInvoice, id]);

  const handleInputChange = (field, value) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [field]: value,
    }));
  };

  const handleItemChange = (index, field, value) => {
    setInvoice((prevInvoice) => {
      const updatedItems = [...prevInvoice.items];
      updatedItems[index] = {
        ...updatedItems[index],
        [field]: value,
        amount: value * updatedItems[index].price,
      };
      return { ...prevInvoice, items: updatedItems };
    });
  };

  const handleSave = () => {
    // Validate the form and save the invoice
    if (validateForm()) {
      if (isNewInvoice) {
        const newInvoice = { ...invoice, id: Date.now().toString() };
        saveInvoice(newInvoice);
      } else {
        // Update existing invoice
        saveInvoice(invoice);
      }
      history.push("/invoices");
    }
  };

  const handleDelete = () => {
    // Delete the invoice
    deleteInvoice(id);
    history.push("/invoices");
  };

  const validateForm = () => {
    return true;
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">
        {isNewInvoice ? "Create Invoice" : "Edit Invoice"}
      </h1>

      <form>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={invoice.date}
          onChange={(e) => handleInputChange("date", e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />

        {invoice.items.map((item, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              value={item.itemName}
              onChange={(e) =>
                handleItemChange(index, "itemName", e.target.value)
              }
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4 mr-2"
        >
          Save
        </button>

        {!isNewInvoice && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mt-4 mr-2"
          >
            Delete
          </button>
        )}

        <Link
          to="/invoices"
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 mt-4"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default InvoiceDetails;

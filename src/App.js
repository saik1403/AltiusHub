import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppComponent from "./components/App/AppComponent";
import InvoiceList from "./components/Invoice/InvoiceList";
import InvoiceDetails from "./components/Invoice/InvoiceDetails";

const App = () => {
  const invoices = []; // Your invoices data
  console.log("at in APP 118");
  const saveInvoice = (invoice) => {
    const index = invoices.findIndex((inv) => inv.id === invoice.id);
    if (index === -1) {
      invoices.push(invoice);
    } else {
      invoices[index] = invoice;
    }
  };

  const deleteInvoice = (id) => {
    const index = invoices.findIndex((inv) => inv.id === id);
    if (index !== -1) {
      invoices.splice(index, 1);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/invoices/*"
          element={
            <AppComponent>
              <Routes>
                <Route index element={<InvoiceList invoices={invoices} />} />
                <Route path="create" element={<InvoiceDetails />} />
                <Route path=":id" element={<InvoiceDetails />} />
              </Routes>
            </AppComponent>
          }
        />
      </Routes>
    </Router>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

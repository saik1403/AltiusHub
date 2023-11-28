import { useState } from "react";
import Invoice from "../../components/Invoice/Invoice";

const DashBoard = () => {
    const [invoices, setInvoices] = useState([]);
    console.log(invoices);
    const showInvoices = (invoice) =>{
        <div className="flex flex-row">
            {invoice.map((val)=>{
                <p>{val}</p>
            })}
        </div>
    }
    return (
        <>
        {/* <Invoice setInvoices={setInvoices}></Invoice>
        <div>
            {invoices?.map((invoice)=>{
                showInvoices(invoice)
            })}
        </div> */}
        {}
        </>
        )
}
export default DashBoard;
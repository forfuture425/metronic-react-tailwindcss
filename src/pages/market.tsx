import React from "react";
import DataTable from "../components/DataTable";

export default function Market() {
  const title = "Models";
  const header = ['Name', 'Type', 'Description', 'Dimensionality', 'Hash of W&Bs', 'Inference Ask', 'Prompt Ask', 'Action Item'];
  const datas = {
    "page": 1,
    "pageCount": 3,
    "sortField": 0,
    "sortOrder": 0,
    "totalCount": 30,
    "data": [
        {
            "id": 1,
            "ipAddress": "192.168.1.1",
            "label": "HR Dept",
            "lastSession": "6 Aug, 2024",
            "method": "Basic auth",
            "status": "bg-success"
        },
        {
            "id": 2,
            "ipAddress": "2001:db8:0:1234:0:567:8:5",
            "label": "Guy Hawkins",
            "lastSession": "22 Jul 2024",
            "method": "Web",
            "status": "bg-success"
        },
        {
            "id": 3,
            "ipAddress": "2001:db8:0:1234:0:567:8:4",
            "label": "Sales Dept",
            "lastSession": "18 Jul, 2024",
            "method": "SSH",
            "status": "bg-danger"
        },
        {
            "id": 4,
            "ipAddress": "192.168.1.2",
            "label": "Sales Dept",
            "lastSession": "15 Jul, 2024",
            "method": "Kerberos",
            "status": "bg-success"
        },
        {
            "id": 5,
            "ipAddress": "2001:db8:0:1234:0:567:8:3",
            "label": "Legal Dept",
            "lastSession": "30 Jul, 2024",
            "method": "Token",
            "status": "bg-warning"
        },
        {
            "id": 6,
            "ipAddress": "10.0.0.2",
            "label": "Finance Dept",
            "lastSession": "28 Jul, 2024",
            "method": "API Key",
            "status": "bg-warning"
        },
        {
            "id": 7,
            "ipAddress": "192.168.1.4",
            "label": "Design Dept",
            "lastSession": "16 Jul, 2024",
            "method": "FIDO U2F",
            "status": "bg-success"
        },
        {
            "id": 8,
            "ipAddress": "2001:db8:0:1234:0:567:8:6",
            "label": "Compliance Dept",
            "lastSession": "11 Aug, 2024",
            "method": "OpenID",
            "status": "bg-danger"
        },
        {
            "id": 9,
            "ipAddress": "2001:db8:0:1234:0:567:8:9",
            "label": "Alice Smith",
            "lastSession": "19 Jul, 2024",
            "method": "Biometric",
            "status": "bg-success"
        },
        {
            "id": 10,
            "ipAddress": "192.168.1.1",
            "label": "HR Dept",
            "lastSession": "6 Aug, 2024",
            "method": "Basic auth",
            "status": "bg-success"
        }
    ]
  }

  const title1 = "Data Blocks";
  const header1 = ["Name", 'Description', 'Base Model', 'Size', 'Fine-Tune Ask', 'Federated Ask', 'Action Item'];
  const datas1 = {}

  return (
    <div className="">
      <div className="mb-8">
        <DataTable 
          title = {title}
          header= {header}
          datas = {datas} 
        />
      </div>

      <DataTable 
        title = {title1}
        header= {header1}
        datas = {datas1} 
      />
    </div>
  )
}
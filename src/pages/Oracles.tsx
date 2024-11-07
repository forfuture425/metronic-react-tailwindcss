import React from "react";
import DataTable from "../components/DataTable";

export default function Oracles() {
  const title = "Oracles";
  const header = ['Name', 'Service', 'Subscription-Based', 'Price'];
  const datas = {}

  return (
    <>
      <DataTable 
        title = {title}
        header={header}
        datas = {datas} 
      />
    </>
  )
}
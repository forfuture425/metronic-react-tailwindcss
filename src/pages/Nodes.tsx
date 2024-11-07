import React from "react";
import DataTable from "../components/DataTable";

export default function Nodes() {
  const title = "Nodes";
  const header = ['Name', 'Description', 'Size', 'Location'];
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
import React from "react";
import DataTable from "../components/DataTable";

export default function Training() {
  const title = "PromptsTemplate";
  const header = ['Node', 'Data Blocks ID', 'Model W&Bs Hash', 'Cost', 'GPU Time Spent', 'Escrow Hash',];
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
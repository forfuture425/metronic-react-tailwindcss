import React from "react";
import DataTable from "../components/DataTable";

export default function Inference() {
  const title = "Inference";
  const header = ['Target Model', 'Target Node', 'Cost', 'Duration', 'Completed', 'Response', 'Start Timestamp', 'Completion Timestamp', 'Escrow Hash',];
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
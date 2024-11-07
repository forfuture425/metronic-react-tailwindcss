import React from "react";
import DataTable from "../components/DataTable";

export default function Prompts() {
  const title = "Prompts";
  const header = ['Prompt NFT ID', 'Node', 'Model', 'Parameters', 'Completion', 'Cost'];
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
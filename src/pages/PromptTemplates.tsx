import React from "react";
import DataTable from "../components/DataTable";

export default function PromptsTemplate() {
  const title = "PromptsTemplate";
  const header = ['NFT ID', 'Prompt Text', 'Number of Parameters'];
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
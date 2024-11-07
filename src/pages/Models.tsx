import React from "react";
import DataTable from "../components/DataTable";

export default function Models() {
  const title = "PromptsTemplate";
  const header = ['Name', 'W&Bs', 'Type'];
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
import React from "react";
import { FiFilter, FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi"
export default function DataTable({title, header, datas}: {title: string, header: any, datas: object}) {
  // const title = title;
  // const header = ['Name', 'Type', 'Description', 'Dimensionality', 'Hash of W&Bs', 'Inference Ask', 'Prompt Ask', 'Action Item'];
  // const datas = {
  //   "page": 1,
  //   "pageCount": 3,
  //   "sortField": 0,
  //   "sortOrder": 0,
  //   "totalCount": 30,
  //   "data": [
  //       {
  //           "id": 1,
  //           "ipAddress": "192.168.1.1",
  //           "label": "HR Dept",
  //           "lastSession": "6 Aug, 2024",
  //           "method": "Basic auth",
  //           "status": "bg-success"
  //       },
  //       {
  //           "id": 2,
  //           "ipAddress": "2001:db8:0:1234:0:567:8:5",
  //           "label": "Guy Hawkins",
  //           "lastSession": "22 Jul 2024",
  //           "method": "Web",
  //           "status": "bg-success"
  //       },
  //       {
  //           "id": 3,
  //           "ipAddress": "2001:db8:0:1234:0:567:8:4",
  //           "label": "Sales Dept",
  //           "lastSession": "18 Jul, 2024",
  //           "method": "SSH",
  //           "status": "bg-danger"
  //       },
  //       {
  //           "id": 4,
  //           "ipAddress": "192.168.1.2",
  //           "label": "Sales Dept",
  //           "lastSession": "15 Jul, 2024",
  //           "method": "Kerberos",
  //           "status": "bg-success"
  //       },
  //       {
  //           "id": 5,
  //           "ipAddress": "2001:db8:0:1234:0:567:8:3",
  //           "label": "Legal Dept",
  //           "lastSession": "30 Jul, 2024",
  //           "method": "Token",
  //           "status": "bg-warning"
  //       },
  //       {
  //           "id": 6,
  //           "ipAddress": "10.0.0.2",
  //           "label": "Finance Dept",
  //           "lastSession": "28 Jul, 2024",
  //           "method": "API Key",
  //           "status": "bg-warning"
  //       },
  //       {
  //           "id": 7,
  //           "ipAddress": "192.168.1.4",
  //           "label": "Design Dept",
  //           "lastSession": "16 Jul, 2024",
  //           "method": "FIDO U2F",
  //           "status": "bg-success"
  //       },
  //       {
  //           "id": 8,
  //           "ipAddress": "2001:db8:0:1234:0:567:8:6",
  //           "label": "Compliance Dept",
  //           "lastSession": "11 Aug, 2024",
  //           "method": "OpenID",
  //           "status": "bg-danger"
  //       },
  //       {
  //           "id": 9,
  //           "ipAddress": "2001:db8:0:1234:0:567:8:9",
  //           "label": "Alice Smith",
  //           "lastSession": "19 Jul, 2024",
  //           "method": "Biometric",
  //           "status": "bg-success"
  //       },
  //       {
  //           "id": 10,
  //           "ipAddress": "192.168.1.1",
  //           "label": "HR Dept",
  //           "lastSession": "6 Aug, 2024",
  //           "method": "Basic auth",
  //           "status": "bg-success"
  //       }
  //   ]
  // }

  return (
    <div className="">
      <label className="text-xl font-extrabold">Team Crew</label>
      <div className='mb-8 flex justify-between items-center text-gray-700'>
        All Members: 49,000 Pro Licenses 724
        <div className="flex items-center gap-2.5">
          <button className="btn btn-sm btn-light">Import CSV</button>
          <button className="btn btn-sm btn-primary">Add Member</button>
        </div>
      </div>

      <div className="grid">
        <div className="card card-grid min-w-full">
          <div className="card-header py-5 flex-wrap">
            <h3 className="card-title">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 lg:gap-5">
              <div className="flex">
                <label className="input input-sm">
                  <FiSearch />
                  <input placeholder="Search users" type="text" value="" data-listener-added_1fe8dd48="true" />
                </label>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <select className="select select-sm w-28">
                  <option value="1">Active</option>
                  <option value="2">Disabled</option>
                  <option value="2">Pending</option>
                </select>
                <select className="select select-sm w-28">
                  <option value="1">Latest</option>
                  <option value="2">Older</option>
                  <option value="3">Oldest</option>
                </select>
                <button className="btn btn-sm btn-outline btn-primary">
                  {/* <i className="ki-filled ki-setting-4"></i>  */}
                  <FiFilter />
                  Filters
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
          <div id="kt_remote_group_check_table">
            <div className="scrollable-x-auto">
            <table className="table table-auto table-border overflow-auto text-nowrap" data-datatable-table="true">
              <thead className="">
              <tr>
                <th className="w-14">
                <input className="checkbox checkbox-sm" data-datatable-check="true" type="checkbox"/>
                </th>
                {
                  header.map((item:string, index:number) => <th key={index} className="w-[100px] text-center" data-datatable-column="status">
                    <span className="sort">
                      <span className="sort-label">
                      {item}
                      </span>
                      <span className="sort-icon">
                      </span>
                    </span>
                  </th>
                  )
                }
              </tr>
              </thead>
            </table>
            </div>
            <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
            <div className="flex items-center gap-2">
              Show
              <select className="select select-sm w-16" data-datatable-size="true" name="perpage">
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              per page
            </div>

            <div className="flex items-center gap-4 order-1 md:order-2">
              <span>1 - 5 of 8</span>
              <div className="pagination">
                <button className="btn" >
                  <FiArrowLeft />
                  {/* <i className="ki-filled ki-black-left rtl:transform rtl:rotate-180"></i> */}
                </button>
                <button className="btn active">1</button>
                <button className="btn ">2</button>
                <button className="btn">...</button>
                <button className="btn">
                  {/* <i className="ki-filled ki-black-right rtl:transform rtl:rotate-180"></i> */}
                  <FiArrowRight />
                </button>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <span data-datatable-info="true">
              </span>
              <div className="pagination" data-datatable-pagination="true">

              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}
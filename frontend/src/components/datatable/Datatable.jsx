import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 90 },
  { field: "lastName", headerName: "Last name", width: 90 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "Birthday",headerName: "Birthday",width: 130,
  },
  {
    field: "Location",headerName: "Location",width: 130,
  },
  {
    field: "Relstatus",headerName: "Relationship Status",width: 160,
  },
  {
    field: "Numfollow",headerName: "Number of followers",width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", Birthday: "04/12/2000",Location:"Ha Noi"},
  { id: 2, lastName: "Lannister", firstName: "Cersei", Birthday: "08/7/1990",Location:"Cao Bang" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", Birthday: "04/04/2002",Location:"Tp Ho Chi Minh" },
  { id: 4, lastName: "Stark", firstName: "Arya", Birthday: "08/4/1997",Location:"Da Nang" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", Birthday: null,Location:"Ha Noi" },
  { id: 6, lastName: "Melisandre", firstName: null, Birthday: "9/9/2006",Location:"Ha Noi" },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", Birthday: "03/01/1989",Location:"Ha Noi" },
  { id: 8, lastName: "Frances", firstName: "Rossini", Birthday: "05/12/2001",Location:"Ha Noi" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", Birthday: "24/12/2004",Location:"Ha Noi" },
];

const Datatable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

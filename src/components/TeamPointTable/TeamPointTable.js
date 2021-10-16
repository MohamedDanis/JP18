import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import "./TeamPointTable.css";

function TeamPointTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
            {
                id: 'tp',
                desc: true
            }
        ]
    }
      
    },
    useSortBy,
  
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = tableInstance;
 
  return (
    <table className="point-table" {...getTableProps()}>
      <thead className="point-table-head">
        {headerGroups.map((headerGroup) => (
          <tr className="point-table-tr heading"{...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="point-table-th" {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {/* <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? "🔽"
                      : "🔼"
                    : " "}
                </span> */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="point-table-body" {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className="point-table-tr" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td className="point-table-td content-row" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TeamPointTable;

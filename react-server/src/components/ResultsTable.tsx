import React from "react";
import { Table } from "react-bootstrap";
import { TableData } from "../types/domain";

interface ResultsTableProps {
    tableData: TableData;
    hideTable: boolean;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ tableData, hideTable }) => (
    <Table hidden={hideTable} responsive="lg" className="border rounded shadow text-center">
        <thead>
            <tr>
                {tableData.columnNames.map((name, index) => (
                    <th key={index}>{name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {tableData.body.map((data, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.data}</td>
                </tr>
            ))}
        </tbody>
    </Table>
);

export default ResultsTable;

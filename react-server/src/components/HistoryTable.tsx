import React from "react";
import { Table, Alert } from "react-bootstrap";
import { TableData } from "../types/history";

interface HistoryTableProps {
    tableData: TableData;
    hideTable: boolean;
    hideNotFound: boolean;
}

const HistoryTable: React.FC<HistoryTableProps> = ({ tableData, hideTable, hideNotFound }) => (
    <>
        <Table hidden={hideTable} responsive="lg" className="border rounded shadow text-center m-0">
            <thead>
                <tr>
                    {tableData.columnNames.map((name) => (
                        <th key={Math.random().toString(16).slice(2)}>{name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.body.map((data, index) => (
                    <tr key={Math.random().toString(16).slice(2)}>
                        <td>{index + 1}</td>
                        <td>{data.data}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

        <Alert hidden={hideNotFound} variant="primary" className="text-center h3">
            Nothing found...
        </Alert>
    </>
);

export default HistoryTable;

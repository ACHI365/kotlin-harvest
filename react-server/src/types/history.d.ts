export interface HistoryItem {
    id: number;
    domain: string;
    executeTime: number;
    details: string;
    date: string;
}

export interface TableData {
    columnNames: string[];
    body: Array<{ data: string }>;
}

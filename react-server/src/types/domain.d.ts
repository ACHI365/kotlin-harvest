import { HistoryItem } from "./history";

export interface TableData {
    columnNames: string[];
    body: Array<{ data: string }>;
}

export interface ModalState {
    isOpen: boolean;
    modalMsg: string;
    variant: string;
}

export interface HomePageState {
    hideTable: boolean;
    hideNotFound: boolean;
    modalState: ModalState;
    isOpen: boolean,
    tableData: TableData;
    excutetime: number
    domain: string
}

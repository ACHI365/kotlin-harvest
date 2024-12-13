import React from "react";
import { Alert, Modal } from "react-bootstrap";
import { HistoryItem, TableData } from "../types/history";
import HistoryCardList from "../components/HistoryCardList.tsx";
import HistoryTable from "../components/HistoryTable.tsx";

interface HistoryPageState {
    isOpen: boolean;
    hideTable: boolean;
    hideNotFound: boolean;
    modalMsg: string;
    variant: string;
    isNotHistoryEmpty: boolean;
    historyItems: HistoryItem[];
    tableData: TableData;
}

class HistoryPage extends React.Component<{}, HistoryPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false,
            hideTable: false,
            hideNotFound: true,
            modalMsg: "",
            variant: "danger",
            isNotHistoryEmpty: true,
            historyItems: [],
            tableData: { columnNames: ['#'], body: [] },
        };
    }

    componentDidMount = async () => {
        try {
            const response = await fetch('http://localhost:8080/history');
            const result: HistoryItem[] = await response.json();

            this.setState({ historyItems: result, isNotHistoryEmpty: result.length !== 0 });
        } catch (err) {
            console.error("Error while rendering history", err);
        }
    };

    showDetails = (details: string): void => {
        const parsedData = JSON.parse(details) as Array<Record<string, string[]>>;
        const tableData: TableData = { columnNames: ['#'], body: [] };

        for (const items of parsedData) {
            for (const [key, values] of Object.entries(items)) {
                if (values.length === 0) continue;
                tableData.columnNames.push(key.toUpperCase());
                for (const value of values) {
                    tableData.body.push({ data: value });
                }
            }
        }

        this.setState({
            tableData,
            hideTable: tableData.body.length === 0,
            hideNotFound: tableData.body.length > 0,
            isOpen: true,
        });
    };

    closeModal = (): void => this.setState({ isOpen: false });

    render() {
        const { historyItems, isNotHistoryEmpty, isOpen, tableData, hideTable, hideNotFound } = this.state;

        return (
            <div className="container text-white p-4">
                <div className="d-flex justify-content-between mt-4">
                    <a href="/" className="my-auto">
                        <button className="btn btn-light">
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp; Go back
                        </button>
                    </a>

                    <h1>
                        <i className="fa fa-history" aria-hidden="true"></i>&nbsp; History
                        &nbsp;
                    </h1>
                </div>

                <div className="row my-5">
                    <div className="col col-lg-12">
                        <Alert
                            hidden={isNotHistoryEmpty}
                            variant="primary"
                            className="text-center h1 w-100 p-5 animate__animated animate__rubberBand"
                        >
                            <i className="fa fa-hourglass-o" aria-hidden="true"></i>&nbsp; Empty...
                        </Alert>
                    </div>

                    <HistoryCardList items={historyItems} onDetailsClick={this.showDetails} />
                </div>

                <Modal show={isOpen} onHide={this.closeModal} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Researching details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <HistoryTable tableData={tableData} hideTable={hideTable} hideNotFound={hideNotFound} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default HistoryPage;

import React, { Component } from "react";
import DomainSearchBar from "../components/DomainSearchBar.tsx";
import ExecutionAlert from "../components/ExecutionAlert.tsx";
import ResultsTable from "../components/ResultsTable.tsx";
import StatusModal from "../components/StatusModal.tsx";
import { TableData, HomePageState } from "../types/domain";

class HomePage extends Component<{}, HomePageState> {
    tableData: TableData = { columnNames: ['#'], body: [] };

    constructor(props: {}) {
        super(props);
        this.state = {
            hideTable: true,
            hideNotFound: true,
            excuteTime: 0,
            modalState: { isOpen: false, modalMsg: "", variant: "danger" },
        };
    }

    searchDomain = async (domain: string) => {
        if (!domain) {
            this.showModal("Please enter domain!", "danger");
            return;
        }

        const isValidDomain = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g.test(
            domain
        );
        if (!isValidDomain) {
            this.showModal("Invalid domain!", "danger");
            return;
        }

        try {
            this.showModal("Researching domain...", "primary");
            const response = await fetch(`http://localhost:8080/domain-data?domain=${domain}`);
            const data = await response.json();

            this.tableData.body = [];
            this.tableData.columnNames = ['#'];
            this.setState({ excuteTime: (data.executeTime / 1000).toFixed(2) });

            for (const items of data.items) {
                for (const [key, values] of Object.entries(items)) {
                    if (values.length > 0) {
                        this.tableData.columnNames.push(key.toUpperCase());
                        this.tableData.body.push(...values.map((val: string) => ({ data: val })));
                    }
                }
            }

            this.setState({
                hideTable: this.tableData.body.length === 0,
                hideNotFound: this.tableData.body.length === 0,
            });

            this.showModal("Research complete.", "success");
        } catch {
            this.showModal("Something went wrong, please try later.", "danger");
        }
    };

    showModal = (message: string, variant: string) => {
        this.setState({ modalState: { isOpen: true, modalMsg: message, variant } });
    };

    closeModal = () => {
        this.setState({ modalState: { isOpen: false, modalMsg: "", variant: "" } });
    };

    render() {
        const { hideTable, hideNotFound, excuteTime, modalState } = this.state;

        return (
            <div className="container min-vh-100 d-flex flex-column my-5">
                <h1 className="text-center text-white mb-5">Type domain name</h1>
                <DomainSearchBar
                    onSearch={this.searchDomain}
                    onKeyPress={(e) => e.key === "Enter" && this.searchDomain(e.currentTarget.value)}
                />
                <a href="/History">
                    <button className="btn btn-outline-light my-3">
                        <i className="fa fa-history" aria-hidden="true"></i>&nbsp; History
                    </button>
                </a>
                <ExecutionAlert hideTable={hideTable} hideNotFound={hideNotFound} excuteTime={excuteTime} />
                <ResultsTable tableData={this.tableData} hideTable={hideTable} />
                <StatusModal modalState={modalState} onClose={this.closeModal} />
            </div>
        );
    }
}

export default HomePage;

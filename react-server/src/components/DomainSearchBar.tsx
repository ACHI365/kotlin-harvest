import React, { useRef } from "react";

interface DomainSearchBarProps {
    onSearch: (domain: string) => void;
    onKeyPress: (event: React.KeyboardEvent) => void;
}

const DomainSearchBar: React.FC<DomainSearchBarProps> = ({ onSearch, onKeyPress }) => {
    const domainInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        if (domainInputRef.current) {
            onSearch(domainInputRef.current.value.trim());
        }
    };

    return (
        <div className="row">
            <div className="col col-lg-10">
                <div className="input-group input-group-lg">
                    <input
                        ref={domainInputRef}
                        onKeyUp={onKeyPress}
                        type="search"
                        className="form-control rounded"
                        placeholder="Domain"
                    />
                </div>
            </div>
            <div className="col col-lg-2">
                <button
                    onClick={handleSearch}
                    type="button"
                    className="btn btn-primary btn-lg w-100 d-flex"
                    style={{maxWidth:"150px"}}
                >
                    <i className="fa fa-search my-1" aria-hidden="true"></i>
                    <span className="px-3">Search</span>
                </button>
            </div>
        </div>
    );
};

export default DomainSearchBar;

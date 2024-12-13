import React from "react";
import { HistoryItem } from "../types/history";
import HistoryCard from "./HistoryCard.tsx";

interface HistoryCardListProps {
    items: HistoryItem[];
    onDetailsClick: (details: string) => void;
}

const HistoryCardList: React.FC<HistoryCardListProps> = ({ items, onDetailsClick }) => (
    <div className="d-flex flex-row row  my-5">
        {items.map((item) => (
            <div key={item.id} className="col">
                <HistoryCard item={item} onDetailsClick={onDetailsClick} />
            </div>
        ))}
    </div>
);

export default HistoryCardList;

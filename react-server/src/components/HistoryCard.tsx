import React from "react";
import { Card, Button } from "react-bootstrap";
import { HistoryItem } from "../types/history";

interface HistoryCardProps {
  item: HistoryItem | null;
  onDetailsClick: (details: string) => void;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ item, onDetailsClick }) => (
  <Card className="text-center my-3 mw-50" style={{minWidth: "250px"}}>
    <Card.Header>
      <i className="fa fa-search" aria-hidden="true"></i>&nbsp; Research
    </Card.Header>

    <Card.Body>
      <Card.Title className="shadow p-2 rounded">
        <b>{item.domain}</b>
      </Card.Title>

      <Card.Body className="mb-1">
        <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp; Execute:{" "}
        <b>{(item.executeTime / 1000).toFixed(2)}</b> sec.
      </Card.Body>

      <Button
        onClick={() => onDetailsClick(item.details)}
        variant="primary"
        className="w-100"
      >
        <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp; Details
        &nbsp;
      </Button>
    </Card.Body>

    <Card.Footer className="text-muted">
      <i className="fa fa-calendar-check-o" aria-hidden="true"></i>&nbsp;
      {/* Current Day-Month-Year */}
      <span>
        {new Date().toLocaleDateString(undefined, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </span>
      &nbsp;|&nbsp;
      {/* Conditional Display of Time */}
      {new Date().getDate() === new Date(item.date).getDate()
        ? new Date(item.date).toLocaleTimeString()
        : new Date(item.date).toLocaleString()}
    </Card.Footer>
  </Card>
);

export default HistoryCard;

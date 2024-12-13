import React from "react";
import { Alert } from "react-bootstrap";

interface ExecutionAlertProps {
  excuteTime: number;
  hideTable: boolean;
  hideNotFound: boolean;
}

const ExecutionAlert: React.FC<ExecutionAlertProps> = ({
  excuteTime,
  hideTable,
  hideNotFound,
}) => (
  <>
    <Alert hidden={hideTable} variant="primary" className="text-center h3 my-3">
      <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp; Execute time:{" "}
      <b>{excuteTime}</b> seconds.
    </Alert>
    {hideNotFound ? (
      <Alert hidden={!hideNotFound} variant="primary" className="text-center h3">
        Nothing found...
      </Alert>
    ) : (
      <></>
    )}
  </>
);

export default ExecutionAlert;

import React from "react";
import { Table } from "semantic-ui-react";

export default function TableWrapper({ columnNames = [], content = [] }) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {columnNames.map((cn) => (
            <Table.HeaderCell key={cn}>{cn}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {content.map((row) => (
          <Table.Row key={row[0]}>{row.map((cell) => cell)}</Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

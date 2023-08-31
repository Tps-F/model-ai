"use client"
import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

interface BugsProps {
  bugs: Array<{ id: number; content: string }>; 
}

const BugsTable: React.FC<BugsProps> = ({ bugs }) => {
  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>BUG</TableColumn>
        </TableHeader>
        <TableBody>
          {bugs.map((bug) => (
            <TableRow key={bug.id}>
              <TableCell>{bug.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BugsTable;

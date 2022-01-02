import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import moment from 'moment'

const columns = [
  {
    id: 'createdDate',
    label: 'Order Date',
  },
  {
    id: 'documentID',
    label: 'Order ID',
  },
  {
    id: 'orderTotal',
    label: 'Amount',
  },
];

const styles = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '10%',
};

const formatText = (columnName, columnValue) => {
    switch (columnName) {
        case 'orderTotal':
            return `€${columnValue}`
        case 'createdDate':
            return moment(columnValue).format('DD/MM/YYYY')
        default:
            return columnValue
    }
}

const OrderHistory = ({ orders }) => {
  return (
    <TableContainer>
      <Table>

        <TableHead>
          <TableRow>
            {columns.map((column, pos) => {
              const { label } = column;
              return (
                <TableCell key={pos} styles={styles}>
                  {label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>


          {Array.isArray(orders) &&
            orders.length > 0 &&
            orders.map((row, pos) => {
              return (
                <TableRow key={pos}>
                  {columns.map((column, pos) => {
                      console.log(column, 'COLUMN')
                    const columnName = column.id;
                    const columnValue = row[columnName];
                    const formattedText = formatText(columnName, columnValue)

                    return (
                      <TableCell key={pos} styles={styles}>
                        {formattedText}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}


        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderHistory;

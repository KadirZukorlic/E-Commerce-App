import React from 'react';
import {
  TableContainer, Table, TableHead,
  TableRow, TableBody, TableCell
} from '@mui/material';
import moment from 'moment';

const columns = [
  {
    id: 'createdDate',
    lable: 'Order Date'
  },
  {
    id: 'documentID',
    lable: 'Order ID'
  },
  {
    id: 'orderTotal',
    lable: 'Amount'
  }
];

const styles = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '10%'
};

const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case 'orderTotal':
      return `£${columnValue}`;
    case 'createdDate':
      return moment(columnValue.nano).format('DD/MM/YYYY')
    default:
      return columnValue;
  }
};

const OrderHistory = ({ orders }) => {

  return (
    <TableContainer>
      <Table>

        <TableHead>
          <TableRow>
            {columns.map((column, pos) => {
              const { lable } = column;

              return (
                <TableCell
                  key={pos}
                  style={styles}
                >
                  {lable}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>

        <TableBody>

          {(Array.isArray(orders) && orders.length > 0) && orders.map((row, pos) => {

              console.log(orders, 'orders') 
              console.log(row, 'row') //undefined -- row is an array of objects, and it should be only objects so i can access properties
            return (
              <TableRow
                key={pos}
              >

                {columns.map((column, pos) => {
                  const columnName = column.id;
                  const columnValue = row[columnName];
                  const formattedText = formatText(columnName, columnValue);

                  return (
                    <TableCell
                      key={pos}
                      style={styles}
                    >
                      {formattedText}
                    </TableCell>
                  )
                })}

              </TableRow>
            )
          })}

        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default OrderHistory;
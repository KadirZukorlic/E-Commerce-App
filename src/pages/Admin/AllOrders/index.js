import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { getAllOrdersStart } from './../../../redux/Orders/orders-actions';

import { firestore } from '../../../firebase/utils';

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
      return `£${columnValue}`;
    case 'createdDate':
      return moment(columnValue.nano).format('DD/MM/YYYY');
    default:
      return columnValue;
  }
};

const getOrders = async () => {
  await firestore
    .collection('orders')
    .get()
    .then((snapshot) => {
      const orders = snapshot.docs.map((doc) => doc.data());
      console.log(orders, 'orders?');
    });
};

const AllOrders = ({ orders }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersStart());
    getOrders();
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, pos) => {
              const { label } = column;

              return (
                <TableCell key={pos} style={styles}>
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
              const { documentID } = row;

              return (
                <TableRow key={pos}>
                  {columns.map((column, pos) => {
                    const columnName = column.id;
                    const columnValue = row[columnName];
                    const formattedText = formatText(columnName, columnValue);

                    return (
                      <TableCell
                        key={pos}
                        style={styles}
                        onClick={() => history.push(`/order/${documentID}`)}
                      >
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

export default AllOrders;

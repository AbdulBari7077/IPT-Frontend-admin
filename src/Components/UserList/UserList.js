/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getAllUsers } from '../../api/api';
import image from "../../../src/assets/avatar.jpg"
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [state, setState] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await getAllUsers();
      console.log(response, "RESPONSE")
      let userList = [];
      if (!response.data?.code) {
        response.data.map((user) => {
          const userRow = {
            id: user.UserId,
            avatar: image,
            username: user.Name,
            email: user.Email,
            Subscription: user.Subscription,
            transaction: `$${(Math.floor(Math.random() * 90 + 10))}`
          }
          return userList.push(userRow);
        })
        setState(userList);
      }
    }
    fetchData();
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('userData'))) {
      navigate('/admin/login');
    }
  }, []);
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'User', headerName: 'Name', renderCell: (cellValues) => {
        return (
          <div className="user__list__user">
            <img className="user__list__img" src={cellValues.row.avatar} alt={cellValues.row.username} />
            {cellValues.row.username}
          </div>
        )
      }, width: 200
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'Subscription',
      headerName: 'Subscription',
      renderCell: (cellValues) => <>
        <div className={"status " + cellValues.row.Subscription} />
        <div style={{ marginLeft: "5px" }}>{cellValues.row.Subscription}</div>
      </>
      ,
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (cellValues) =>
        <>
          <DeleteOutlineIcon className="user__delete" />
        </>,
      width: 120,
    }
  ];

  return (
    <div className="user__list">
      <DataGrid rows={state} disableSelectionOnClick columns={columns} pageSize={9} rowsPerPageOptions={[9]} />
    </div>
  )
}

export default UserList;
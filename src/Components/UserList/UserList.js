import React from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const UserList =()=> {
  
        const columns = [
            { field: 'id', headerName: 'ID', width: 90 },
            { field: 'User', headerName: 'Name', renderCell:(cellValues)=>{
                return (
                    <div className="user__list__user">
                        <img className = "user__list__img" src = {cellValues.row.avatar} alt = {cellValues.row.username}/>
                        {cellValues.row.username}
                    </div>
                )
            }, width: 200 },
            { field: 'email', headerName: 'Email', width: 200 },
            {
              field: 'status',
              headerName: 'Status',
              renderCell: (cellValues) => <div className = {"status " + cellValues.row.status} />,
              width: 120,
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
                    <DeleteOutlineIcon className = "user__delete"/>
                </>,
                width: 120,
            }
          ];
          
          const rows = [
            { id: 1, username: 'John Wick', avatar:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif", email:"JohnWick@gmail.com",status:"Active",transaction:"$120"},
            { id: 2, username: 'John Wick', avatar:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif", email:"JohnWick@gmail.com",status:"NotActive",transaction:"$120"},
            { id: 3, username: 'John Wick', avatar:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif", email:"JohnWick@gmail.com",status:"Active",transaction:"$120"},
            { id: 4, username: 'John Wick', avatar:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif", email:"JohnWick@gmail.com",status:"Active",transaction:"$120"},
            { id: 5, username: 'John Wick', avatar:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif", email:"JohnWick@gmail.com",status:"NotActive",transaction:"$120"},
          ];

        return (
            <div className = "user__list">
                <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
            </div>
        )
}

export default UserList;
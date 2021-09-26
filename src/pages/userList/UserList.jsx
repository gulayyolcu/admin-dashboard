import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from "../../dummyData"
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
    const [data,setData]=useState(userRows)

const handleDelete=(id)=>{
    setData(data.filter((item)=>item.id!==id))
}

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 150,renderCell:(params)=>{
            return(
                <div style={{display:"flex",alignItems:"center"}}>
                    <img src={params.row.avatar} alt="" style={{width:"30px",height:"30px",objectFit:"cover",marginRight:"10px",borderRadius:"50%"}}/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 150
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,renderCell:(params)=>{
                return(
          
                        <>
                          <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                          </Link>
                          <DeleteOutlineIcon
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                          />
                        </>
                )
            }
          },
      ];
      
    
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

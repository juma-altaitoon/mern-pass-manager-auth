import React, { useState } from 'react';
import Axios from 'axios';
import { Typography, Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import CredCreate from './components/CredCreate';
import CredEdit from './components/CredEdit';
import Cred from './components/Cred';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'accountName', headerName: 'Account name', width: 130 },
    { field: 'username', headerName: 'username', width: 130 },
    {
      field: 'age',
      headerName: 'Password Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'password',
      headerName: 'Password',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  

export default function Creds(props){

    const [ creds, setCreds ] = useState([]);
    const [ selectedCred, setSelectedCred ] = useState({});
    const [ isEdit, setIsEdit ] = useState(false)

    const getCredsList = () => {
        Axios.get("credential/list")
        .then((res) => {
            console.log(res);
            // setCreds(res)
        })
        .catch(error =>{
            console.log("Error loading Creds!", error)
        })
    }

    const credentials = creds.map((credential, index) => (
        <Cred key={index} {...credential} edit={viewCred} delete={deleteCred}/>
    ))
    
    const getCred = (id) => {
        Axios.get("credential/readone", id)
        .then((res) => {
            console.log("Single Cred retrieved!", res);
        })
        .catch(error => {
            console.log("Failed Single Cred Retrieval", error);
        })
    }

    const getPassword = (id) => {
        Axios.get("credential/password", id)
        .then((res) => {
            console.log("Successful Password Retrieval!", res);
        })
        .catch(error => {
            console.log("Failed Password Retrieval!", error);
        })
    }

    const addCred = (cred) => {
        Axios.post("/credential/create", cred)
        .then((res) => {
            console.log("Succesful Cred Entry!");
            getCredsList();
        })
        .catch(error => {
            console.log("Failed Cred Entry", error);
        })
    }
    const viewCred = (id) => {
        Axios.get("credential/readone", id)
        .then((res) => {
            let cred = res
            setIsEdit(true);
            setSelectedCred(cred)
        })
    }
    const editCred = (cred) => {
        Axios.put("credential/update", cred)
        .then((res) => {
            console.log("Successful Cred Update!")
            getCredsList();
        })
        .catch(error => {
            console.log("Failed Cred Update!", error);
        })
    }

    const deleteCred = (id) => {
        Axios.delete("credential/delete", id)
        .then((res) => {
            console.log("Successful Cred Deletion!");
            getCredsList();
        })
        .catch(error => {
            console.log("Failed Cred Deletion!", error)
        })
    }

    return(
        <>
            <Typography component="h1" variant="h3">
                Creds
            </Typography>
            <Box sx={{display: 'flex', flexwrap: 'wrap' }}>
                {credentials}
            </Box>
            
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={creds}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
            
            <div>
            {!isEdit && (
                <CredCreate add={addCred}/>
            )}
            </div>
            <div>
            {isEdit && (
                <CredEdit key={selectedCred.id} cred={selectedCred} edit={editCred} setIsEdit={setIsEdit} />
            )}
            </div>
        </>
    )
}
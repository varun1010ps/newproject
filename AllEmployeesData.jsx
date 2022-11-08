import { useEffect, useState, users } from "react"; //Hooks
import { TableCell, Table, TableHead, TableBody, TableRow, styled, Button } from "@mui/material";

import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const styledTable = styled(Table)`
widht: 90%
margin: 50px auto 0 auto;

`;

const Thead = styled(TableRow)`
background: #000;
& > th {
    color: #fff;
    font-size: 60px
}

`
const TBody = styled(TableRow)`
& > td {
    font-size: 20px
}

`

const AllEmployeesData = () => {

    const [users, setUsers] = useState([]);
    useEffect(()  => {
        getUsersDetails();
    }, [])

    const getUsersDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }
    const deleteUserData  = async (id) => {
       await deleteUser(id);
       getUsersDetails();
    
}

 
    return (
        <styledTable>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Salary</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
               users.map(user => (
                    <TBody>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.Name}</TableCell>
                        <TableCell>{user.Age}</TableCell>
                        <TableCell>{user.Salary}</TableCell>
                        <TableCell>
                            <Button variant="contained" style={{ marginRight: 10}} component={ Link } to={`/edit/${user.id}`}>Edit</Button>
                            <Button variatn="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                        </TableCell>
                    </TBody>
               ))
            
            }
            </TableBody>
        </styledTable>
     
    )
}

export default AllEmployeesData;
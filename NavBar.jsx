

import { AppBar , Toolbar, styled } from "@mui/material";
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`

`

const Tabs = styled(NavLink)`
   font-size: 20px;
   margin-right: 300px;
   color: inherit;
   text-decoration:
   
   `
   


const NavBar = () => {
    return (
       <Header position= "static" > 
        <Toolbar>
        <Tabs> EmpData</Tabs>
        <Tabs to="/add">Add Employee </Tabs>
        <Tabs to="/all">All Employees Data</Tabs>
        </Toolbar>
       </Header>
    )
}

export default NavBar;

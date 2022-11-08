import { useState } from 'react'; //Hooks
import { FormControl, FormGroup, InputLabel, Input, Button, styled, Typography} from "@mui/material";


import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';



const Container = styled(FormGroup)`
   width: 50%;
   margin: 5% auto 0 auto;
   & > div (
    margin-top: 20px
   )
   
 


`

const initialValues = {
    id: '',
    Name: '',
    Age: '',
    Salary:'',
}

const AddEmployee = () => {
    const [user, setuser] = useState(initialValues);
    const navigate = useNavigate();

const onValueChange = (e) => {
    console.log(e.target.name, e.target.value)
    const key = e.target.name
    const value = e.target.value
    setuser({ ...user, [key]: value})

}

const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');

}
    
    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="id" />
                
                
          </FormControl>
          <FormControl>
                <InputLabel>Name</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="Name" />
                
                
          </FormControl>
          <FormControl>
                <InputLabel>Age</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="Age" />
                
                
          </FormControl>
          <FormControl>
                <InputLabel>Salary</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="Salary" />
                
                
          </FormControl>
          <FormControl>
              <Button onClick={() => addUserDetails()} variant="contained">Add User</Button>

          </FormControl>

        </Container>
    )
}

export default AddEmployee;
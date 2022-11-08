import { useState, useEffect } from 'react'; //Hooks
import { FormControl, FormGroup, InputLabel, Input, Button, styled, Typography} from "@mui/material";


import { useNavigate, useParams } from 'react-router-dom';
import { getUser, editUser } from '../service/api';



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

const EditUser = () => {
    const [user, setuser] = useState(initialValues);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() =>  {
        getUserData();
    }, [])

    const  getUserData = async () => {
       let response = await getUser(id);
       setuser(response.data);
    }
const onValueChange = (e) => {
    console.log(e.target.name, e.target.value)
    const key = e.target.name
    const value = e.target.value
    setuser({ ...user, [key]: value})

}

const EditUser = async () => {
    await editUser(user, id);
    navigate('/all');

}
    
    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="id" value={user.id} />
                
                
          </FormControl>
          <FormControl>
                <InputLabel>Name</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="Name" value={user.Name} />
                
                
          </FormControl>
          <FormControl>
                <InputLabel>Age</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="Age" value={user.Age} />
                
                
          </FormControl>
          <FormControl>
                <InputLabel>Salary</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="Salary" value={user.Salary} />
                
                
          </FormControl>
          <FormControl>
              <Button onClick={() => EditUser()} variant="contained"> Edit User</Button>

          </FormControl>

        </Container>
    )
}

export default EditUser;
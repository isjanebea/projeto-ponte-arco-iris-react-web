
import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const Input = styled.input`
    padding: 20px;
    border-radius: 5px;
    border: 1px silver solid;
    background: white;
    width: 100%;
    height: 2vh;
    color: rgb(100,100,100);
    padding-left: 30px;
    margin-left: -30px;
`

const Card = styled.div`
    width: 50vh;
    padding 10px;
    border-radius: 5px;
    padding-bottom: 40px;
`

const FormGroup = styled.div`
    display: flex;

`


const Button = styled.button`
    background: green;
    color: white;
    height: 42px;
    margin-top: 8px;
    margin-left: -50px;
    border-radius: 5px;
    border: 0px black solid;
    width: 50px;
    cursor: pointer;
    &:hover {
        color: white;
        background: rgb(0,100,0);
      }
    
`

const UserIcon = styled(AccountCircleIcon)`
  color: silver;
  margin-top: 16px;
  z-index: 5;
`;

const FormItem = ({ type, placeholder, handle, Icon }) => (
    <FormGroup>
        <Icon />
        <Input type={type} placeholder={placeholder} />
        <Button onClick={handle}><ArrowForwardIcon style={{ fontSize: '30px' }} /></Button>
    </FormGroup>
)



export {
    FormItem,
    UserIcon,
    Card
}
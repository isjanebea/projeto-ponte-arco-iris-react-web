
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';


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
    margin-bottom: 1vh;

`


const Button = styled.button`
    background: green;
    color: white;
    height: 42px;
    border-radius: 5px;
    border: 0px black solid;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
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

const LockIconUi = styled(LockIcon)`
  color: silver;
  margin-top: 16px;
  z-index: 5;
`;

const FormItem = ({ type, placeholder, handle, Icon }) => (
    <FormGroup>
        <Icon />
        <Input type={type} placeholder={placeholder} onChange={handle} />
    </FormGroup>
)



export {
    FormItem,
    UserIcon,
    Card,
    LockIconUi,
    Button
}

import React, { useContext } from 'react';
import { Typography } from '@material-ui/core'
import { Center } from '../../components/page'
import { Context } from '../../context'
import {
    FormItem,
    UserIcon,
    Card,
    LockIconUi,
    Button
} from '../../components/form';


const Login = props => {
    const { handleLoggin } = useContext(Context)

    return (

        <Center>
            <Card>
                <Typography>Prossiga as etapas para efetuar o login</Typography>
                <FormItem type="text" Icon={UserIcon} placeholder="Usuario" handle={handleLoggin} />
                <FormItem type="text" Icon={LockIconUi} placeholder="Senha" handle={handleLoggin} />
                <Button>Entrar</Button>
            </Card>
        </Center>
    )
}


export default Login;
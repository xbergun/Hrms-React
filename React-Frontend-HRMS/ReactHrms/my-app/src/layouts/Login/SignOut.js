import React from 'react'
import { Button,Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
export default function SignOut({SignIn}) {
    return (
        <div>
            {/* <Menu.Item color="red">
           <Button basic color="white" onClick={SignIn} >Log In</Button>
            <Button basic color="white" as={NavLink} to="/login"> Kayıt Ol </Button>
            </Menu.Item> */}
   <Menu.Item >
    <Button.Group color="white">
    <Button  color="red" onClick={SignIn}>Giriş Yap</Button>
    <Button.Or />
    <Button color="red"  as={NavLink} to="/login">Kayıt Ol</Button>
  </Button.Group>
  </Menu.Item>
        </div>
    )
}

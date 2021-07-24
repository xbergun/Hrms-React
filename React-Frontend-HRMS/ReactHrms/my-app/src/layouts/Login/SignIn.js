import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'
export default function SignIn({signout}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"/>
                <Dropdown pointing="top left" text="Berkay">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signout}  text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

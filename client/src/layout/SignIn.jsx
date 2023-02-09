import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/1000000?v=4" />
            <Dropdown pointing="top left" text='Ufuk'>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon = "sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
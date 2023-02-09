import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({signIn}) {
  return (
    <div>
        <Menu.Item>
            <Button primary onClick={signIn}>Log In</Button>
        </Menu.Item>
    </div>
  )
}
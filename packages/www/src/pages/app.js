import React, { useContext } from 'react'
import { Router, Link } from '@reach/router'
import { IdentityContext } from '../../identity-context'
let Dash = () => {
  const { user } = useContext(IdentityContext)
  return <div>Dash hasUser: {user && user.user_metadata.full_name}</div>
}

export default props => {
  return (
    <Router>
      <Dash path="/app"></Dash>
    </Router>
  )
}

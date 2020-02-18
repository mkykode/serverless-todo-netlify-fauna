import React from 'react'
import { Container, Heading, Button, Flex } from 'theme-ui'
export default props => {
  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', padding: 3 }}>
        <Heading as="h1">Get stuff done</Heading>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            alert('clicked')
          }}
        >
          Log in
        </Button>
      </Flex>
    </Container>
  )
}

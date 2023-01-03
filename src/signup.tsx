import React, { useState } from 'react'
import { signup } from './firebase'
import { Container, VStack, Input, Button } from '@chakra-ui/react';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmailChange = (event: {target: {value: React.SetStateAction<string>}}) => setEmail(event.target.value)
  const handlePasswordChange = (event: {target: {value: React.SetStateAction<string>}}) => setPassword(event.target.value)
  const handleSignup = async () => await signup(email, password);

  return (
    <Container>
      <VStack>
        <Input value={email} onChange={handleEmailChange} placeholder='Email' />
        <Input value={password} onChange={handlePasswordChange} placeholder='Password' />
        <Button colorScheme='teal' variant='solid' onClick={handleSignup}> Submit </Button>
      </VStack>
    </Container>
  )
}

export default SignUp

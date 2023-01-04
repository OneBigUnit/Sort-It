import React, { useState } from 'react'
import { signUp, logIn, logOut, useAuth } from './firebase'
import { Container, VStack, Input, Button, InputGroup, InputRightElement, Text, HStack } from '@chakra-ui/react';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const currentUser = useAuth();
  
  const handleShowPassword = () => setShowPassword(!showPassword)
  const handleEmailChange = (event: {target: {value: React.SetStateAction<string>}}) => setEmail(event.target.value)
  const handlePasswordChange = (event: {target: {value: React.SetStateAction<string>}}) => setPassword(event.target.value)

  // TODO: Handle errors (Weak passwords, etc)
  const handleSignup = async () => {
    setLoading(true);
    try {
      await signUp(email, password);
    } catch {

    }
    setLoading(false);
  }
  const handleLogin = async () => {
    setLoading(true);
    try {
      await logIn(email, password);
    } catch {

    }
    setLoading(false);
  }
  const handleLogout = async () => {
    setLoading(true);
    try {
      await logOut();
    } catch {

    }
    setLoading(false);
  }

  return (
    <Container>
      <VStack>
        <Text> {currentUser ? `Currently logged in as ${currentUser?.email}` : "Not currently logged in"} </Text>
        <Input value={email} onChange={handleEmailChange} placeholder='Email' isRequired={true} />
        <InputGroup size='md'>
          <Input pr='4.5rem' type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} placeholder='Password' isRequired={true} />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <HStack>
          <Button isDisabled={loading || currentUser !== null} colorScheme={loading || currentUser ? 'blackAlpha' : 'teal'} variant='solid' onClick={handleSignup}> Sign Up </Button>
          <Button isDisabled={loading || currentUser !== null} colorScheme={loading || currentUser ? 'blackAlpha' : 'teal'} variant='solid' onClick={handleLogin}> Log In </Button>
          <Button isDisabled={loading || currentUser === null} colorScheme={loading || !currentUser ? 'blackAlpha' : 'teal'} variant='solid' onClick={handleLogout}> Log Out </Button>
        </HStack>
      </VStack>
    </Container>
  )
}

export default SignUp

import React from 'react'
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth/auth.api';
import {useToast} from '@chakra-ui/react'
import { useEffect } from 'react';

function LoginPage() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const authState = useSelector((state) => state.auth)
  const { isLoading} = authState;
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e) => {
    if (!isLoading) {
      e.preventDefault();
      dispatch(login(
        {
          email,
          password
        }
      ));
    }
  }
  
  useEffect(() => {
    if (authState.error) {
      toast({
        title: `Some thing went wrong`,
        status: "error",
        isClosable: true,
      })
    }
  }, [toast, authState]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange = {(e)=>setEmail(e.currentTarget.value)} 
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange = {(e)=>setPassword(e.currentTarget.value)}
        />
        <div>
          <button type='submit'>
            {isLoading ? "Loading..." : " Login "}
          </button>
        </div>
      </form>
    </div>
  )
}
export default LoginPage
import * as React from 'react';
import { authApi } from '../api-client';

export default function LoginPpage () {

    async function login(){
        try {
            await authApi.login({
                username: 'demon',
                password: '123456',
            })
        } catch (error) {
            console.log(error)
        }
    }
    async function getProfile(){
        try {
            await authApi.getProfile()
        } catch (error) {
            console.log(error)
        }
    }
    async function logout(){
        try {
            await authApi.logout()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={login}>Login</button>
      <button onClick={getProfile}>Get profile</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

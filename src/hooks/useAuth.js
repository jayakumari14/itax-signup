'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import useClient from './useClient';
import { getCookie, deleteCookie } from 'cookies-next';

export default function UseAuth() {
  const router = useRouter();

  //   const currentUser = {
  //     token: useClient(() => getCookie("token")),
  //     user: useClient(() => JSON.parse(getCookie("currentUser") || "{}")),
  // };

  const token = useClient(() => getCookie('token'));

  const currentUser = useClient(() =>
    JSON.parse(getCookie('currentUser') || '{}'),
  );

  const handleLogin = async (fromData) => {
    try {
      const response = await axios.post('/users/login', {
        email: fromData.email,
        password: fromData.password,
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleSignup = async (fromData) => {
    try {
      const response = await userAxios.post('/user/sign-up', {
        ...FormData,
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleLogOut = async () => {
    deleteCookie('currentUser');
    deleteCookie('token');
    router.replace('/login');
  };

  return {
    token,
    currentUser,
    handleLogin,
    handleSignup,
    handleLogOut,
  };
}
import axios from 'axios';
import store from '../store'

const loginApi = async (email:string, password:string) => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_POSTKEY}/users/sign-in`;
    const response = await axios.post(apiUrl, {
      email : store.userStore.email,
      password : store.userStore.password,
    });
    const { token } = response.data;
    document.cookie = `jwtToken=${token}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;

    console.log('로그인 성공!', response.data);

    return true;
  } catch (error) {
    console.error('로그인 오류:', error);
    return false;
  }
};

export default loginApi;
import axios from 'axios';
import { useRouter} from 'next/router';
import store from '../store'

const signUpApi = async () => {
    const router = useRouter();
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_POSTKEY}/users/sign-up`;

    const response = await axios.post(apiUrl, {
      nickname: store.signStore.nickName,
      password: store.signStore.password,
      email: store.signStore.email,
      phone: store.signStore.phone,
    });
      console.log('가입 성공!', response.data);
      router.push('/user')
      return response
  } catch (error) {
      console.error("삐빅", error)
      throw new Error('API 호출 중 에러 발생');
  }
};

export default signUpApi;
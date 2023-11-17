import instance from '../utils/CallApi';
import { isVaildUrl } from '../utils/validationUrl';

const sendUrlToBackend = async (urlAddress, router) => {
  try {
    if (isVaildUrl(urlAddress)) {
      const response = await instance.post('/shorten', { urlAddress });
      const shortUrl = response.data.shortUrl;
    } else if (urlAddress.length === 0) {
      window.confirm("URL 주소를 입력해주세요.");
    } else {
      window.confirm("올바르지 않은 URL 주소입니다.");
    }
  } catch (error) {
    console.error('API 호출 중 에러 발생:', error);
  }
};

export default sendUrlToBackend;
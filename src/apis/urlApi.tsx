import axios from 'axios';

const createShortenUrl = async (urlAddress: string): Promise<string> => {
  const urlAddressPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.[^\s]{2,}(\/|$)/;
  console.log("dfdf", urlAddress)
  console.log('sf;jsdf', typeof urlAddress)
  if (urlAddress.length===0) {
    throw new Error('URL 주소를 입력해주세요.');
  }

  if (!urlAddressPattern.test(urlAddress)) {
    throw new Error('올바르지 않은 URL 주소입니다.');
  }

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_POSTKEY}/shorten` || '',
      { originalUrl: urlAddress }
    );
    console.log(response)
    return response.data.originalUrl;
  } catch (error) {
    console.error("삐빅", error)
    throw new Error('API 호출 중 에러 발생');
  }
};

export default createShortenUrl;
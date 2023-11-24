// interface MessageStateType {
//   nickName: string;
//   password: string;
//   email: string;
//   phone: string;
// }

// const initialState: MessageStateType = {
//   nickName: '',
//   password: '',
//   email: '',
//   phone: '',
// };

//  const userNicknameCheckedFuction = (value: string) => {
//     const nicknameRegex = /^[a-zA-Z가-힣0-9]{2,4}$/;
//     if (nicknameRegex.test(value)) {
//       return  setErrorMessages1((prevMessages) => ({ ...prevMessages, phone: '' }));
//     } else {
//       return setErrorMessages1((prevMessages) => ({ ...prevMessages, phone: '올바르지 않은 닉네임 형식입니다.' }));
//     }
//   }

//     const userPasswordCheckedFuction = (value: string) => {
//       const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
//       if (passwordRegex.test(value)) {
//         return setErrorMessages2((prevMessages) => ({ ...prevMessages, phone: '' }));
//       } else {
//         return setErrorMessages2((prevMessages) => ({ ...prevMessages, phone: '올바르지 않은 비밀번호 형식입니다.' }));
//       }
//   }
  
//   const userEmailCheckedFuction = (value: string) => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (emailRegex.test(value)) {
//       return setErrorMessages3((prevMessages) => ({ ...prevMessages, phone: '' }));
//     } else {
//       return setErrorMessages3((prevMessages) => ({ ...prevMessages, phone: '올바르지 않은 이메일 형식입니다.' }));
//     }
//   }
  

//   const userPhoneCheckedFuction = (value: string) => {
//     const regNumber = /^(01[0-1697])\d{7,8}$/;
//     if (regNumber.test(value)) {
//       return  setErrorMessages4((prevMessages) => ({ ...prevMessages, phone: '' }));
//     } else {
//       return setErrorMessages4((prevMessages) => ({ ...prevMessages, phone: '올바르지 않은 전화번호 형식입니다.' }));
//     }
//   };


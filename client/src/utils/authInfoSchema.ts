import * as Yup from 'yup';

const authInfoSchema = {
  signIn: Yup.object().shape({
    email: Yup.string()
      .email('이메일 형식으로 작성해주세요')
      .required('필수 입력입니다.'),
    password: Yup.string().required('필수 입력입니다.'),
  }),
  mailCheck: Yup.object().shape({
    email: Yup.string()
      .email('이메일 형식으로 작성해주세요')
      .required('필수 입력입니다.'),
  }),
};

export default authInfoSchema;

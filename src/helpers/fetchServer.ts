import { correctValues } from '../constants';

const checkValues = (
  login: string,
  password: string
): { correct: boolean; message?: string } => {
  const isLoginCorrect = login === correctValues.LOGIN;
  const isPasswordCorrect = password === correctValues.PASSWORD;

  if (!isLoginCorrect) {
    return {
      correct: false,
      message: `Пользователя ${login} не существует`,
    };
  }

  if (!isPasswordCorrect) {
    return {
      correct: false,
      message: 'Неверный пароль',
    };
  }

  return {
    correct: true,
  };
};

export const fetchServer = (
  login: string,
  password: string
): Promise<{ correct: boolean; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = checkValues(login, password);
      resolve(result);
    }, 2000);
  });
};

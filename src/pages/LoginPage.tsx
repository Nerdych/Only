import styled from 'styled-components';
import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { TextField } from '../components/ui/TextField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { fetchServer } from '../helpers/fetchServer';
import { useNavigate } from 'react-router-dom';
import { routes } from '../router/routes';
import { Error } from '../components/ui/Error';
import { UserContext } from '../context';

const Form = styled.form`
  max-width: 640px;
  margin: 200px auto 0;
`;

const FormTextField = styled(TextField)`
  margin-bottom: 20px;
`;

const FormButton = styled(Button)`
  margin-top: 40px;
`;

const FormError = styled(Error)`
  margin-bottom: 20px;
`;

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

export const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    setLoading(true);

    const { correct, message } = await fetchServer(email, password);

    if (correct) {
      login(email);
      navigate(routes.PROFILE);
    } else {
      setError(message!);
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && <FormError text={error} />}
      <FormTextField
        error={errors.email?.message}
        type="email"
        label="Логин"
        {...register('email', {
          required: 'Обязательное поле',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Неверный формат email',
          },
        })}
      />
      <FormTextField
        error={errors.password?.message}
        type="password"
        label="Пароль"
        {...register('password', {
          required: 'Обязательное поле',
          minLength: {
            value: 5,
            message: 'Минимальный размер пароля - 5 символов',
          },
        })}
      />
      <Checkbox
        id="remember"
        label="Запомнить пароль"
        {...register('remember')}
      />
      <FormButton accent disabled={loading} type="submit">
        Войти
      </FormButton>
    </Form>
  );
};

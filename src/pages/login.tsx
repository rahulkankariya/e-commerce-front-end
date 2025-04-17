import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../pages/logo';
import {
  TextField,
  Button,
  Paper,
  Typography
} from '@mui/material';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Login Data:', data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4" style={{ backgroundColor: '#c7ae6a' }}>
      <Paper elevation={3} className="p-8 w-full max-w-md">
        <Logo/>

        <Typography variant="h5" align="center" gutterBottom color="#2b3d5f" fontWeight={700}>
          Login to your Dashboard
        </Typography>

        <p className="text-center text-[#2b3d5f] font-light text-[13px] leading-[18px] font-poppins mb-4">
          Log in with your data that you entered during your registration
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Enter a valid email'
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Minimum 6 characters'
              }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;

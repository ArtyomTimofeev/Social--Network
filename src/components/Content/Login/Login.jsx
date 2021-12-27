import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Checkbox, Container, FormControlLabel } from '@mui/material';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="xs" sx={{ paddingY: '20%' }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin="dense"
          autoFocus
          fullWidth
          id="email"
          name="email"
          label="Email"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
        />
        <TextField
          margin="dense"
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          required
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
          margin="dense"
          type="checkbox"
          id="checkbox"
          name="checkbox"
          onChange={formik.handleChange}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;

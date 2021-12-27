import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';

const NewMessageForm = ({ addMessage }) => {
  const validationSchema = yup.object({
    message: yup.string('Enter your message'),
  });
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newMessageBody = values.message;
      addMessage(newMessageBody);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        margin="dense"
        autoFocus
        fullWidth
        id="message"
        name="message"
        label="Enter your message"
        onBlur={formik.handleBlur}
        value={formik.values.message}
        onChange={formik.handleChange}
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        disabled={!formik.values.message}
      >
        Send
      </Button>
    </form>
  );
};

export default NewMessageForm;

import React from 'react';
import s from './NewPost.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const NewPost = ({ addPost }) => {
  const validationSchema = yup.object({
    postText: yup.string('Enter your postText'),
  });
  const formik = useFormik({
    initialValues: {
      postText: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newPostText = values.postText;
      addPost(newPostText);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        multiline="true"
        margin="dense"
        autoFocus
        fullWidth
        id="postText"
        name="postText"
        label="Enter your post text"
        onBlur={formik.handleBlur}
        value={formik.values.postText}
        onChange={formik.handleChange}
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        disabled={!formik.values.postText}
      >
        Add
      </Button>
    </form>
  );
};
export default NewPost;

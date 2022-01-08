import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const ProfileStatus = ({ profileStatusText, updateProfileStatusTK }) => {
  const [editMode, setEditMode] = useState(false);

  const validationSchema = yup.object({
    statusText: yup.string('Enter your status text'),
  });
  const formik = useFormik({
    initialValues: {
      statusText: profileStatusText,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newStatusText = values.statusText;
      disabledEditMode(newStatusText);
    },
  });

  const activateEditMode = () => {
    setEditMode(true);
  };

  const disabledEditMode = (newStatusText) => {
    setEditMode(false);
    updateProfileStatusTK(newStatusText);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>Status: {profileStatusText}</span>
        </div>
      )}
      {editMode && (
        <form onSubmit={formik.handleSubmit}>
          <TextField
            multiline="true"
            margin="dense"
            autoFocus
            fullWidth
            id="statusText"
            name="statusText"
            label="Enter your status text"
            onBlur={formik.handleBlur}
            value={formik.values.statusText}
            onChange={formik.handleChange}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Add
          </Button>
        </form>
      )}
    </>
  );
};

export default ProfileStatus;

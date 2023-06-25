const Reset = () => {
  const forgotPasswordSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await forgotPassword(values.email);
      console.log(response);
      resetForm();
      setErrorMessage({
        error: false,
        message: 'A mail for resetting your password has been sent!',
      });
    } catch (err) {
      setErrorMessage({
        error: true,
        message: 'Failed to send a mail for resetting your password!',
      });
    } finally {
      setSubmitting(false);
    }
  };
};

export default Reset;

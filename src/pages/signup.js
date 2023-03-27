import React from 'react';

const AsyncSignUpForm = React.lazy(() => import('../modules/SignUpForm/index'));

export default function SignUpForm() {
  return <AsyncSignUpForm />;
}

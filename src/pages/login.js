import React from 'react';

const AsyncLoginForm = React.lazy(() => import('../modules/LoginForm/index'));

export default function LoginForm() {
  return <AsyncLoginForm />;
}

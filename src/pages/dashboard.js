import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Auth } from '@supabase/auth-ui-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Form from '../modules/Documentation/components/Form';

const AsyncDashboard = React.lazy(() => import('../modules/Dashboard/index'));

export default function Dashboard() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      {!session ? (
        <Form>
          <Auth
            providers={[]}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        </Form>
      ) : (
        <AsyncDashboard />
      )}
    </>
  );
}

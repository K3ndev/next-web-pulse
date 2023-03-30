// import '../shared/styles/globals.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// export default function App({ Component, pageProps }) {
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         retryDelay: 1250,
//         staleTime: 1000 * 60 * 10,
//       },
//     },
//   });

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Component {...pageProps} />
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// }

import '../shared/styles/globals.css';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
export default MyApp;

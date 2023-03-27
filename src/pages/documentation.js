import React from 'react';

const AsyncDocumentation = React.lazy(() =>
  import('../modules/Documentation/index')
);

export default function Documentation() {
  return <AsyncDocumentation />;
}

import * as React from 'react';

export default () => (
  <header>
    Header
    {/* language=PostCSS */}
    <style jsx>{`
      header {
        border-bottom: solid black;
      }
    `}</style>
  </header>
);

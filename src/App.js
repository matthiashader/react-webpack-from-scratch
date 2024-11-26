import { IxActionCard } from '@siemens/ix-react';
import React from 'react';
import { iconRefresh } from '@siemens/ix-icons/icons';

const App = () => {
  return (
    <div>
      <h1>Hello, React with Webpack!</h1>
      <IxActionCard></IxActionCard>
      <ix-action-card
        icon="refresh"
        heading="Scan for new devices"
        subheading="Secondary text"
        variant="insight"
      ></ix-action-card>      
      <ix-action-card
        icon={iconRefresh}
        heading="Scan for new devices"
        subheading="Secondary text"
        variant="insight"
      ></ix-action-card>
    </div>
  );
};

export default App;
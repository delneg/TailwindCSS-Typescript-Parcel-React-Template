import React from 'react';
import Card from './components/Card';
import Router from './routes/Router';
import './index.pcss';

const App = (): React.ReactElement => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card
        title="TailwindCSS Typescript Parcel React Template"
        image="https://placekitten.com/200/300"
        imageAlt="Architectureee"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Fusce sit amet mattis augue. Pellentesque tempor tortor eu diam efficitur hendrerit a ac sem. 
Mauris sit amet tellus cursus, convallis diam.`}
        tags={["#parcel", "#typescript", "#react", "#tailwind"]}
      />
      <Router/>
    </div>
  );
};

export default App;

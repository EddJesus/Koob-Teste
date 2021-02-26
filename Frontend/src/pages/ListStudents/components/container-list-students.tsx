import React from 'react';

import Students from './students';

import '../styles.css';

const components: React.FC = () => {
  return (
    <>
      <div className="container-students">
        <Students/>
      </div>
    </>
  );
}

export default components;
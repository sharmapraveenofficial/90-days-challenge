import React from 'react';
import WithoutContextComponent from './component/withoutContext';
import UsingContextTask from './component/usingContext';
import StatusBar from './component/reusable/statusBar';

export default function App() {
  
  return (
    <>
     {/* <WithoutContextComponent /> */}
     <StatusBar />
     <UsingContextTask />
    </>
  );
}
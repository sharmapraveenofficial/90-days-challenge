import React from 'react';
import { useOnlineStatus } from '../../hooks/useOnline';

function StatusBar(): JSX.Element {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

export default StatusBar;

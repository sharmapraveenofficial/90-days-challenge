import React from 'react';
import { useOnlineStatus } from '../../hooks/useOnline';

function SaveButton(): JSX.Element {
  const isOnline = useOnlineStatus();

  function handleSaveClick(): void {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default SaveButton;

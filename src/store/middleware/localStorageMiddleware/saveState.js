function saveState({ storageKey, state }) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storageKey, serializedState);
  } catch (err) {
    // Log the error for debugging purposes
    console.error(
      `Error saving state to localStorage for key "${storageKey}":`,
      err
    );
  }
}

export default saveState;

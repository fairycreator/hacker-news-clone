function loadState({ storageKey }) {
  try {
    const serializedState = localStorage.getItem(storageKey);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    // Optionally log the error for debugging purposes
    console.error(
      `Error loading state from localStorage for key "${storageKey}":`,
      err
    );
    return undefined;
  }
}

export default loadState;

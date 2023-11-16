const STORAGE_TYPE = "localStorage";

const hasLocalStorage = (storageType = STORAGE_TYPE) => {
  try {
    const storage = window?.[storageType];
    if (!storage) return false;

    const testKey = `storage_${storageType}_test`;
    storage.setItem(testKey, "test");
    storage.getItem(testKey);
    storage.removeItem(testKey);

    return true;
  } catch (e) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
      console.warn(
        `redux-persist ${storageType} test failed, persistence will be disabled.`,
        e
      );
    }

    return false;
  }
};

export default hasLocalStorage;

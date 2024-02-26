import parsePath from "./parsePath";

const updateDataAtPath = (path, value, editableData) => {
  const keys = parsePath(path);
  let updatedData = { ...editableData };
  let current = updatedData;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key] || typeof current[key] !== "object") {
      current[key] = typeof keys[i + 1] === "number" ? [] : {};
    }
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return updatedData;
};

export default updateDataAtPath;

const parsePath = (path) => {
  return path.split(".").reduce((acc, key) => {
    if (key.includes("[")) {
      const [arrayKey, arrayIndex] = key.split(/\[(\d+)\]/).filter(Boolean);
      acc.push(arrayKey, parseInt(arrayIndex));
    } else {
      acc.push(key);
    }
    return acc;
  }, []);
};
export default parsePath;

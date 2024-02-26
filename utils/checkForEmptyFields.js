const checkForEmptyFields = (data, fields, parentKey = "") => {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (fields.includes(fullKey)) continue;
      if (value === "") return true;

      if (typeof value === "object" && value !== null) {
        const isEmpty = checkForEmptyFields(value, fields, fullKey);
        if (isEmpty) {
          return true;
        }
      }
    }
  }
  return false;
};

export default checkForEmptyFields;

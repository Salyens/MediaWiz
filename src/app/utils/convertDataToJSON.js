const convertDataToJSON = (data) => {
  const jsonData = {};

  const processData = (obj, path = []) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (value instanceof File) {
      } else if (value && typeof value === "object") {
        processData(value, path.concat(key));
      } else {
        jsonData[path.concat(key).join(".")] = value;
      }
    });
  };

  processData(data);
  return JSON.stringify(jsonData);
};
export default convertDataToJSON;

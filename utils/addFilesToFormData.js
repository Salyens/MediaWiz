const addFilesToFormData = (formData, data, path = []) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(path.concat(key).join("."), value, value.name);
    } else if (value && typeof value === "object") {
      addFilesToFormData(formData, value, path.concat(key));
    }
  });
};
export default addFilesToFormData;

import addFilesToFormData from "./addFilesToFormData";
import convertDataToJSON from "./convertDataToJSON";

const createFormData = (data, fieldsToRemove) => {
  const formData = new FormData();
  formData.append("doc", convertDataToJSON(data));

  addFilesToFormData(formData, data);

  if (fieldsToRemove.length > 0) {
    formData.append("fieldsToRemove", JSON.stringify(fieldsToRemove));
  }

  return formData;
};

export default createFormData;

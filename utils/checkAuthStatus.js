const { default: ApiService } = require("@/services/ApiService");

const checkAuthStatus = async () => {
  try {
    await ApiService.getAdminInfo();
    return true;
  } catch (error) {
    return false;
  }
};

export default checkAuthStatus;

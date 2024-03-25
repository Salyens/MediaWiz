import axios from "axios";

class ApiService {
  static apiBase = process.env.API_URL;

  static init() {
    axios.defaults.baseURL = this.apiBase;
  }

  static async login(data) {
    const response = await axios.post(`/admin/login`, data);
    localStorage.setItem("token", response.data.accessToken);
  }

  static async getAdminInfo() {
    const response = await axios.get(`/admin/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const { isActive } = response.data;
    return isActive;
  }

  static async getFeedbacks() {
    const response = await axios.get("/admin", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  }

  static async createFeedback(data) {
    const response = await axios.post(`/main`, data);

    return response.data[0];
  }

  static async getPageData(param) {
    const config = {
      headers: {
        "Cache-Control": "no-store",
      },
    };
    const response = await axios.get(`/${param}`, config);
    return response.data;
  }

  static async updatePageData(data, param) {
    const config = {
      headers: {
        "Cache-Control": "no-store",
      },
    };
    const response = await axios.patch(`/admin/${param}`, data, config);
    return response.data;
  }
}
ApiService.init();
export default ApiService;

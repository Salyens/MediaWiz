import axios from "axios";

class ApiService {
  static apiBase = process.env.URL;

  static async login(data) {
    const response = await axios.post(
      `http://localhost:3001/admin/login`,
      data
    );
    localStorage.setItem("token", response.data.accessToken);
  }

  static async getFeedbacks() {
    const response = await axios.get(`http://localhost:3001/admin`);
    return response.data;
  }

  static async createFeedback(data) {
    const response = await axios.post(`http://localhost:3001/main`, data);

    return response.data[0];
  }

  static async getPageData(param) {
    const response = await axios.get(`http://localhost:3001/admin${param}`);

    return response.data;
  }

  static async updatePageData(data, param) {
    const response = await axios.patch(
      `http://localhost:3001/admin${param}`,
      data
    );
    return response.data;
  }
}

export default ApiService;

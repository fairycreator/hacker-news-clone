import axios from "axios";

// Default API
const API_ROOT = process.env.URL || "http://localhost:3000/";
const TIMEOUT = 20000;
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

class ApiService {
  constructor({
    baseURL = API_ROOT,
    timeout = TIMEOUT,
    headers = HEADERS,
    auth,
  }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth,
    });

    client.interceptors.response.use(
      (response) => this.handleSuccess(response),
      (error) => this.handleError(error)
    );

    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  async get(path) {
    try {
      const response = await this.client.get(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(path, payload) {
    try {
      const response = await this.client.post(path, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put(path, payload) {
    try {
      const response = await this.client.put(path, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async patch(path, payload) {
    try {
      const response = await this.client.patch(path, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(path) {
    try {
      const response = await this.client.delete(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiService;

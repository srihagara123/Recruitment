import axios from "axios";

const API = "http://localhost:5000/api/students";

export const getStudents = () => axios.get(API);

export const getStudentById = (id) => axios.get(`${API}/${id}`);

export const addStudent = async (student) => {
  console.log("POST URL:", API);
  console.log("Sending Data:", student);

  return axios.post(API, student);
};

export const updateStudent = (id, student) =>
  axios.put(`${API}/${id}`, student);

export const deleteStudent = (id) =>
  axios.delete(`${API}/${id}`);

export const getStudentStats = () =>
  axios.get(`${API}/stats`);

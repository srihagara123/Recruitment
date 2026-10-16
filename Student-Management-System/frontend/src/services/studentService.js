import axios from "axios";

const API = "http://localhost:5000/api/students";

// Get all students
export const getStudents = () => {
  return axios.get(API);
};

// Get student by ID
export const getStudentById = (id) => {
  return axios.get(`${API}/${id}`);
};

// Add student
export const addStudent = (student) => {
  return axios.post(API, student);
};

// Update student
export const updateStudent = (id, student) => {
  return axios.put(`${API}/${id}`, student);
};

// Delete student
export const deleteStudent = (id) => {
  return axios.delete(`${API}/${id}`);
};

// Get dashboard statistics
export const getStudentStats = () => {
  return axios.get(`${API}/stats`);
};
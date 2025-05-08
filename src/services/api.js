// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:9090',
});

export const getAllPatients = () => API.get('/patients');

export const addPatient = (patient) => API.post('/patients', patient);

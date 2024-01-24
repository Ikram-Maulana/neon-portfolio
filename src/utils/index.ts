"use server";

import axios from "axios";

export async function getAllExperiences() {
  try {
    const response = await axios.get(`${process.env.API_URL}/experiences`);
    return response.data;
  } catch (error) {
    console.error("Error fetching experiences: ", error);
    // Handle the error based on your application's needs
  }
}

export async function getAllProjects() {
  try {
    const response = await axios.get(`${process.env.API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects: ", error);
    // Handle the error based on your application's needs
  }
}

export async function getProfile() {
  try {
    const response = await axios.get(`${process.env.API_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile: ", error);
    // Handle the error based on your application's needs
  }
}

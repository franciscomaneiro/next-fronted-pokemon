import axios from 'axios';



const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchData = async (url: string, options = {}): Promise<any> => {
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};
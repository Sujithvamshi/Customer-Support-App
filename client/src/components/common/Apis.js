import axios from 'axios';

export const UnAuthApi = axios.create({
	baseURL: 'http://localhost:8081/api'
});

export const AuthApi = axios.create({
	baseURL: 'http://localhost:8081/api',
	headers: {
		'Authorization': `Bearer ${localStorage.getItem('token')}`
	}
})
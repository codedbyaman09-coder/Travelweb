const fallbackApiBase =
  typeof window !== 'undefined'
    ? `http://${window.location.hostname || '127.0.0.1'}:8000/api`
    : 'http://127.0.0.1:8000/api';

export const API_BASE_URL = (import.meta.env.VITE_API_URL || fallbackApiBase).replace(/\/$/, '');

export const apiUrl = (path = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
};

export const getAuthToken = () => localStorage.getItem('indeora_token');

export const authHeaders = (headers = {}) => {
  const token = getAuthToken();
  return token ? { ...headers, Authorization: `Bearer ${token}` } : headers;
};

export const apiRequest = async (path, options = {}) => {
  const isFormData = options.body instanceof FormData;
  const headers = isFormData
    ? authHeaders(options.headers || {})
    : authHeaders({ 'Content-Type': 'application/json', ...(options.headers || {}) });

  const response = await fetch(apiUrl(path), {
    ...options,
    headers
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
};

export const listFromResponse = (data, preferredKeys = []) => {
  for (const key of preferredKeys) {
    if (Array.isArray(data?.[key])) return data[key];
  }

  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.blogs)) return data.blogs;
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.files)) return data.files;

  const firstArray = Object.values(data || {}).find(Array.isArray);
  return firstArray || [];
};

export const apiList = async (path, preferredKeys = []) => {
  const data = await apiRequest(path);
  return listFromResponse(data, preferredKeys);
};

export const fetchSettings = async () => {
  const data = await apiRequest('/settings');
  return data.data || {};
};

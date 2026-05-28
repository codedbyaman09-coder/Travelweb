import React, { createContext, useState, useEffect, useContext } from 'react';
import { apiRequest, apiUrl } from '../lib/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verify token on initial load
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('indeora_token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(apiUrl('/auth/profile'), {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.success) {
          setUser(data.user);
        } else {
          localStorage.removeItem('indeora_token');
        }
      } catch (err) {
        console.error('Auth verification failed:', err);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  // Login handler
  const login = async (email, password) => {
    try {
      const response = await fetch(apiUrl('/auth/login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('indeora_token', data.token);
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      return { success: false, message: 'Erreur de connexion avec le serveur.' };
    }
  };

  // Register handler
  const register = async (name, email, password) => {
    try {
      const response = await fetch(apiUrl('/auth/register'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      if (data.success) {
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      return { success: false, message: 'Erreur de connexion avec le serveur.' };
    }
  };

  // Logout handler
  const logout = () => {
    localStorage.removeItem('indeora_token');
    setUser(null);
  };

  const refreshUser = async () => {
    const data = await apiRequest('/auth/profile');
    if (data.success) setUser(data.user);
    return data.user;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

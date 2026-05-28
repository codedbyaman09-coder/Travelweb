import React, { useEffect, useState } from 'react';
import { apiRequest } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

const ProfileManager = () => {
  const { user, refreshUser } = useAuth();
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) setProfile({ name: user.name || '', email: user.email || '' });
  }, [user]);

  const saveProfile = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');
    try {
      const data = await apiRequest('/users/profile', {
        method: 'PUT',
        body: JSON.stringify(profile)
      });
      await refreshUser();
      setMessage(data.message || 'Profile updated successfully.');
    } catch (err) {
      setError(err.message || 'Unable to update profile.');
    }
  };

  const changePassword = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }

    try {
      const data = await apiRequest('/users/change-password', {
        method: 'PUT',
        body: JSON.stringify({
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword
        })
      });
      setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setMessage(data.message || 'Password changed successfully.');
    } catch (err) {
      setError(err.message || 'Unable to change password.');
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Account
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Users / Admin Profile</h2>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100">{message}</div>}
      {error && <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100">{error}</div>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form onSubmit={saveProfile} className="bg-white p-8 shadow-sm border border-slate-200 rounded-xl space-y-5">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Admin Profile</h3>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Name</label>
            <input required value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Email</label>
            <input required type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all">
            Update Profile
          </button>
        </form>

        <form onSubmit={changePassword} className="bg-white p-8 shadow-sm border border-slate-200 rounded-xl space-y-5">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Change Password</h3>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Current Password</label>
            <input required type="password" value={passwords.currentPassword} onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">New Password</label>
            <input required type="password" value={passwords.newPassword} onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Confirm New Password</label>
            <input required type="password" value={passwords.confirmPassword} onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileManager;

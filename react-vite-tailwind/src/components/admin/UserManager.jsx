import React, { useState, useEffect } from 'react';
import { apiList, apiRequest } from '../../lib/api';
import { Users, UserPlus, Mail, Shield, CheckCircle, XCircle, Edit2, Trash2 } from 'lucide-react';
import ConfirmModal from './ConfirmModal';

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('list'); // 'list', 'create', 'edit'
  
  // Forms
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'admin', status: 'active' });
  const [editingUserId, setEditingUserId] = useState(null);
  
  // Messages
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const rows = await apiList('/users');
      setUsers(rows);
    } catch (err) {
      console.error(err);
      setError('Erreur lors du chargement des utilisateurs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError(''); setSuccess(''); setIsSubmitting(true);
    try {
      const data = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });
      if (data.success) {
        setSuccess('Utilisateur créé avec succès !');
        fetchUsers();
        setTimeout(() => { setCurrentTab('list'); setSuccess(''); }, 1500);
      } else {
        setError(data.message || 'Erreur lors de la création');
      }
    } catch (err) {
      setError('Erreur réseau');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError(''); setSuccess(''); setIsSubmitting(true);
    try {
      const data = await apiRequest(`/users/${editingUserId}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          status: formData.status
        })
      });
      if (data.success) {
        setSuccess('Utilisateur modifié avec succès !');
        fetchUsers();
        setTimeout(() => { setCurrentTab('list'); setSuccess(''); setEditingUserId(null); }, 1500);
      } else {
        setError(data.message || 'Erreur lors de la modification');
      }
    } catch (err) {
      setError('Erreur réseau');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!userToDelete) return;
    try {
      const data = await apiRequest(`/users/${userToDelete}`, { method: 'DELETE' });
      if (data.success) {
        setSuccess('Utilisateur supprimé.');
        fetchUsers();
        setTimeout(() => setSuccess(''), 2000);
      }
    } catch (err) {
      setError('Erreur réseau lors de la suppression.');
    }
  };

  const startEdit = (user) => {
    setFormData({ name: user.name, email: user.email, password: '', role: user.role || 'admin', status: user.status || 'active' });
    setEditingUserId(user.id);
    setCurrentTab('edit');
  };

  const openCreate = () => {
    setFormData({ name: '', email: '', password: '', role: 'admin', status: 'active' });
    setCurrentTab('create');
  };

  if (loading && users.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-600" />
            Gestion des Utilisateurs
          </h2>
          <p className="text-slate-500 text-sm mt-1">Gérez les accès administrateurs et les rôles du système.</p>
        </div>
        
        {currentTab === 'list' ? (
          <button
            onClick={openCreate}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
          >
            <UserPlus size={16} />
            Ajouter un utilisateur
          </button>
        ) : (
          <button
            onClick={() => setCurrentTab('list')}
            className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            Retour à la liste
          </button>
        )}
      </div>

      {/* Notifications */}
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-sm">
          <div className="flex items-center">
            <XCircle className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        </div>
      )}
      {success && (
        <div className="mb-6 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg shadow-sm">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
            <p className="text-sm text-emerald-700 font-medium">{success}</p>
          </div>
        </div>
      )}

      {/* USER LIST TAB */}
      {currentTab === 'list' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">Utilisateur</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">Rôle</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">Date d'ajout</th>
                  <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                          {u.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="font-medium text-slate-800">{u.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-slate-500 gap-1.5">
                        <Mail size={14} />
                        {u.email}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-slate-600 gap-1.5">
                        <Shield size={14} className={u.email === 'admin@indeora.com' ? "text-amber-500" : "text-indigo-500"} />
                        <span className="capitalize">{u.role || 'Admin'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${u.status === 'inactive' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {u.status === 'inactive' ? 'Inactif' : 'Actif'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">
                      {new Date(u.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {u.email !== 'admin@indeora.com' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => startEdit(u)} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Modifier">
                            <Edit2 size={16} />
                          </button>
                          <button onClick={() => handleDeleteClick(u.id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Supprimer">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2.5 py-1 rounded-md">Système</span>
                      )}
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-500">Aucun utilisateur trouvé</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CREATE / EDIT TAB */}
      {(currentTab === 'create' || currentTab === 'edit') && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden max-w-2xl mx-auto">
          <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
            <h3 className="font-semibold text-slate-800 text-lg">
              {currentTab === 'create' ? 'Ajouter un nouvel administrateur' : 'Modifier l\'utilisateur'}
            </h3>
          </div>
          <form onSubmit={currentTab === 'create' ? handleCreate : handleUpdate} className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Nom complet</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Adresse Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                  placeholder="jean@indeora.com"
                />
              </div>
            </div>

            {currentTab === 'create' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Mot de passe</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                  placeholder="Minimum 6 caractères"
                />
              </div>
            )}

            {currentTab === 'edit' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Rôle</label>
                  <select
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                  >
                    <option value="admin">Administrateur</option>
                    <option value="editor">Éditeur</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Statut</label>
                  <select
                    value={formData.status}
                    onChange={e => setFormData({ ...formData, status: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                  >
                    <option value="active">Actif</option>
                    <option value="inactive">Inactif</option>
                  </select>
                </div>
              </div>
            )}

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 mt-6">
              <button
                type="button"
                onClick={() => setCurrentTab('list')}
                className="px-5 py-2.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
              >
                {isSubmitting ? 'Chargement...' : (currentTab === 'create' ? 'Créer l\'utilisateur' : 'Enregistrer')}
              </button>
            </div>
          </form>
        </div>
      )}

      <ConfirmModal 
        isOpen={deleteModalOpen}
        title="Supprimer l'utilisateur"
        message="Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est définitive et ne peut pas être annulée."
        onConfirm={handleConfirmDelete}
        onCancel={() => {
          setDeleteModalOpen(false);
          setUserToDelete(null);
        }}
        confirmText="Oui, supprimer"
        cancelText="Annuler"
      />
    </div>
  );
};

export default UserManager;

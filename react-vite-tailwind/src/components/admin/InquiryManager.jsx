import React, { useState, useEffect } from 'react';
import { apiList, apiRequest } from '../../lib/api';

const InquiryManager = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', source: 'admin', status: 'new' });

  const API_PATH = '/inquiries';

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const rows = await apiList(API_PATH);
      setInquiries(rows);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const data = await apiRequest(`${API_PATH}/${id}/status`, {
        method: 'PUT',
        body: JSON.stringify({ status: newStatus })
      });
      if (data.success) {
        setMessage('Statut mis à jour avec succès!');
        fetchInquiries();
        setTimeout(() => setMessage(''), 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await apiRequest(API_PATH, {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      if (data.success) {
        setMessage('Demande créée avec succès!');
        setErrorMsg('');
        setFormData({ name: '', email: '', phone: '', message: '', source: 'admin', status: 'new' });
        fetchInquiries();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setErrorMsg(data.message || "Erreur lors de l'enregistrement.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Erreur réseau");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cette demande ?")) return;
    try {
      await apiRequest(`${API_PATH}/${id}`, { method: 'DELETE' });
      fetchInquiries();
    } catch (err) {
      console.error(err);
    }
  };

  const getStatusColor = (status) => {
    if (status === 'new') return 'bg-red-100 text-red-700';
    if (status === 'read') return 'bg-yellow-100 text-yellow-700';
    if (status === 'replied') return 'bg-green-100 text-green-700';
    return 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-5">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Communications
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Demandes de Contact (Inquiries)</h2>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">✨</span> {message}</div>}
      {errorMsg && <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100 flex items-center gap-3"><span className="text-xl">⚠️</span> {errorMsg}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 bg-white p-8 shadow-sm border border-slate-200 rounded-xl h-fit">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Ajouter une Demande</h3>
          <form onSubmit={handleSubmit} className="space-y-5 text-sm">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Nom du client</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" placeholder="Ex: Jean Dupont" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Email</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" placeholder="jean@email.com" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Téléphone</label>
              <input type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" placeholder="+33 6..." />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Message</label>
              <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none h-28 resize-none" placeholder="Détails de la demande..."></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Enregistrer
            </button>
          </form>
        </div>

        <div className="md:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
          {loading ? <div className="p-12 text-center text-slate-400 italic font-serif">Chargement...</div> : (
            <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Date</th>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Nom & Contact</th>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200 w-1/2">Message</th>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Statut</th>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inquiries.map(inq => (
                  <tr key={inq.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 text-xs font-medium text-slate-500">{new Date(inq.created_at).toLocaleDateString('fr-FR')}</td>
                    <td className="p-5">
                      <div className="font-serif text-base text-slate-800">{inq.name}</div>
                      <div className="text-[11px] font-medium text-slate-500 mt-1">{inq.email}</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">{inq.phone || '-'}</div>
                    </td>
                    <td className="p-5 text-[11px] text-slate-500 line-clamp-3 leading-relaxed mt-2">{inq.message}</td>
                    <td className="p-5">
                      <select
                        value={inq.status}
                        onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                        className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full outline-none border transition-colors ${getStatusColor(inq.status).replace('text-', 'border-').replace('100', '200')} ${getStatusColor(inq.status)}`}
                      >
                        <option value="new">Nouveau</option>
                        <option value="read">Lu</option>
                        <option value="replied">Répondu</option>
                      </select>
                    </td>
                    <td className="p-5 text-right">
                      <button onClick={() => handleDelete(inq.id)} className="text-red-500 hover:text-red-700 font-medium text-xs transition-colors">Suppr.</button>
                    </td>
                  </tr>
                ))}
                {inquiries.length === 0 && <tr><td colSpan="5" className="p-12 text-center text-slate-400 italic font-serif">Aucune demande trouvée</td></tr>}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryManager;

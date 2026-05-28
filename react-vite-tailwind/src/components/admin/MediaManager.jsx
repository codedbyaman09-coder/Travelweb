import React, { useState, useEffect } from 'react';
import { apiList, apiRequest } from '../../lib/api';

const MediaManager = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchFiles = async () => {
    try {
      const rows = await apiList('/media');
      setFiles(rows);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async (e) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    try {
      const data = await apiRequest('/media/upload', {
        method: 'POST',
        body: formData
      });
      if (data.success) {
        setMessage(`${selectedFiles.length > 1 ? 'Fichiers uploadés' : 'Fichier uploadé'} avec succès!`);
        fetchFiles();
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (filename) => {
    if (!window.confirm("Supprimer ce fichier ?")) return;
    try {
      await apiRequest(`/media/${encodeURIComponent(filename)}`, { method: 'DELETE' });
      fetchFiles();
    } catch (err) {
      console.error(err);
    }
  };

  const copyToClipboard = (url) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url)
        .then(() => alert('URL copiée dans le presse-papier!'))
        .catch(err => console.error('Erreur lors de la copie', err));
    } else {
      // Fallback for non-HTTPS (like http://127.0.0.1)
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        alert('URL copiée dans le presse-papier!');
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Chargement...</div>;

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Ressources
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Médiathèque</h2>
        </div>
        <div className="relative">
          <input type="file" id="fileUpload" className="hidden" onChange={handleUpload} accept="image/*" multiple />
          <label htmlFor="fileUpload" className="px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 bg-indigo-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer inline-block">
            {uploading ? 'Upload en cours...' : 'Ajouter un média'}
          </label>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">✨</span> {message}</div>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {files.map(file => (
          <div key={file.name} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
            <div className="h-40 bg-slate-50 flex items-center justify-center overflow-hidden relative">
              <img src={file.url} alt={file.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 bg-white relative z-10">
              <p className="text-[11px] font-mono text-slate-500 mb-3 truncate" title={file.name}>{file.name}</p>
              <div className="flex justify-between items-center">
                <button onClick={() => copyToClipboard(file.url)} className="text-[10px] font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors">Copier l'URL</button>
                <button onClick={() => handleDelete(file.name)} className="text-[10px] font-bold uppercase tracking-wider text-red-500 hover:text-red-700 transition-colors">Suppr.</button>
              </div>
            </div>
          </div>
        ))}
        {files.length === 0 && <div className="col-span-full text-center p-16 bg-white shadow-sm border border-slate-200 rounded-xl text-slate-400 italic font-serif">Aucun média trouvé. Uploadez des images pour les utiliser dans vos blogs et destinations.</div>}
      </div>
    </div>
  );
};

export default MediaManager;

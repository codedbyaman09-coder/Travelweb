import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';
import { RefreshCw, Layout, Settings, Image as ImageIcon, Type, Plus, Edit2, Trash2, ChevronDown, ChevronUp, Save, Eye } from 'lucide-react';

const HomeManager = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  // State for editing section/theme/items
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [activeTab, setActiveTab] = useState('content'); // 'content', 'layout', 'colors', 'spacing', 'media', 'advanced'
  
  const [editingSection, setEditingSection] = useState(null);
  const [editingTheme, setEditingTheme] = useState(null);
  
  // New section form
  const [showAddSection, setShowAddSection] = useState(false);
  const [newSectionForm, setNewSectionForm] = useState({ section_key: '', title: '', status: 'active' });

  // Items CRUD state
  const [itemForm, setItemForm] = useState(null);
  const [isEditingItem, setIsEditingItem] = useState(false);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const res = await apiRequest('/home-dynamic/admin/sections');
      if (res && res.data && Array.isArray(res.data)) {
        setSections(res.data);
      } else if (res && Array.isArray(res)) {
        setSections(res);
      } else {
        setSections([]);
      }
    } catch (err) {
      console.error('Fetch sections error:', err);
      setMessage('Failed to load sections');
      setSections([]);
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleSelectSection = (sec) => {
    setActiveSectionId(sec.id);
    setEditingSection({ ...sec });
    setEditingTheme({ ...sec.theme });
    setActiveTab('content');
    setItemForm(null);
  };

  const handleSaveSection = async () => {
    try {
      await apiRequest(`/home-dynamic/admin/sections/${editingSection.id}`, {
        method: 'PUT',
        body: JSON.stringify(editingSection)
      });
      await apiRequest(`/home-dynamic/admin/sections/${editingSection.id}/theme`, {
        method: 'PUT',
        body: JSON.stringify(editingTheme)
      });
      showMessage('Section saved successfully');
      fetchSections();
    } catch (err) {
      showMessage('Error saving section');
    }
  };

  const handleAddSection = async (e) => {
    e.preventDefault();
    if (!newSectionForm.section_key) return alert('Section key is required');
    try {
      await apiRequest('/home-dynamic/admin/sections', {
        method: 'POST',
        body: JSON.stringify(newSectionForm)
      });
      showMessage('Section added');
      setShowAddSection(false);
      setNewSectionForm({ section_key: '', title: '', status: 'active' });
      fetchSections();
    } catch (err) {
      showMessage('Error adding section');
    }
  };

  const handleDeleteSection = async () => {
    if (!window.confirm('Are you sure you want to delete this section? This cannot be undone.')) return;
    try {
      await apiRequest(`/home-dynamic/admin/sections/${activeSectionId}`, {
        method: 'DELETE'
      });
      showMessage('Section deleted');
      setActiveSectionId(null);
      setEditingSection(null);
      fetchSections();
    } catch (err) {
      showMessage('Error deleting section');
    }
  };

  const handleSaveItem = async (e) => {
    e.preventDefault();
    try {
      if (isEditingItem) {
        await apiRequest(`/home-dynamic/admin/items/${itemForm.id}`, {
          method: 'PUT',
          body: JSON.stringify(itemForm)
        });
        showMessage('Item updated');
      } else {
        await apiRequest(`/home-dynamic/admin/sections/${activeSectionId}/items`, {
          method: 'POST',
          body: JSON.stringify(itemForm)
        });
        showMessage('Item added');
      }
      setItemForm(null);
      setIsEditingItem(false);
      fetchSections();
    } catch (err) {
      showMessage('Error saving item');
    }
  };

  const handleDeleteItem = async (itemId) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await apiRequest(`/home-dynamic/admin/items/${itemId}`, {
        method: 'DELETE'
      });
      showMessage('Item deleted');
      fetchSections();
    } catch (err) {
      showMessage('Error deleting item');
    }
  };

  const moveSection = async (index, direction) => {
    const newSections = [...sections];
    if (direction === 'up' && index > 0) {
      [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
    } else if (direction === 'down' && index < newSections.length - 1) {
      [newSections[index + 1], newSections[index]] = [newSections[index], newSections[index + 1]];
    } else {
      return;
    }
    
    // update order numbers
    const updated = newSections.map((s, i) => ({ id: s.id, display_order: i + 1 }));
    try {
      await apiRequest('/home-dynamic/admin/sections/reorder', {
        method: 'POST',
        body: JSON.stringify({ items: updated })
      });
      fetchSections();
      showMessage('Order updated');
    } catch (err) {
      showMessage('Error updating order');
    }
  };

  const handleResetAllThemes = async () => {
    if (window.confirm("Voulez-vous vraiment réinitialiser le design de TOUTES les sections aux couleurs par défaut d'origine ?")) {
      try {
        setLoading(true);
        for (const sec of sections) {
          await apiRequest(`/home-dynamic/admin/sections/${sec.id}/theme`, {
            method: 'PUT',
            body: JSON.stringify({})
          });
        }
        showMessage('Design réinitialisé avec succès');
        fetchSections();
      } catch (err) {
        showMessage('Erreur lors de la réinitialisation');
        setLoading(false);
      }
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="space-y-6 animate-fadeIn pb-20">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dynamic Home Page Manager</h2>
            <p className="text-slate-500 text-sm mt-1">Manage complete frontend design, sections, and content dynamically without breaking the UI.</p>
          </div>
          <button 
            onClick={handleResetAllThemes}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Réinitialiser le Design
          </button>
        </div>
        {message && (
          <div className="mt-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200">
            {message}
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar: Sections List */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-700 uppercase tracking-wider text-sm flex items-center gap-2">
                <Layout size={16} /> Sections
              </h3>
              <button onClick={() => setShowAddSection(!showAddSection)} className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded hover:bg-indigo-100 flex items-center gap-1">
                <Plus size={12} /> Add
              </button>
            </div>
            
            {showAddSection && (
              <form onSubmit={handleAddSection} className="p-3 bg-slate-50 border border-slate-200 rounded-lg mb-4 space-y-2">
                <input type="text" placeholder="Unique Key (e.g. hero, footer_banner)" value={newSectionForm.section_key} onChange={e => setNewSectionForm({...newSectionForm, section_key: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" required />
                <input type="text" placeholder="Display Title" value={newSectionForm.title} onChange={e => setNewSectionForm({...newSectionForm, title: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" />
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 bg-indigo-600 text-white text-xs font-bold py-1.5 rounded">Save</button>
                  <button type="button" onClick={() => setShowAddSection(false)} className="flex-1 bg-slate-200 text-slate-700 text-xs font-bold py-1.5 rounded">Cancel</button>
                </div>
              </form>
            )}

            <div className="space-y-2">
              {sections && sections.length > 0 ? (
                sections.map((sec, idx) => (
                  <div key={sec.id} className={`p-3 rounded-lg border transition-all cursor-pointer flex justify-between items-center ${activeSectionId === sec.id ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`} onClick={() => handleSelectSection(sec)}>
                    <div>
                      <div className="font-bold text-sm text-slate-800">{sec.title || sec.section_key}</div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-400 mt-0.5 flex flex-wrap gap-2 items-center">
                        <span>{sec.section_key} - {sec.status}</span>
                        {sec.created_at && <span className="border-l border-slate-300 pl-2">Created: {new Date(sec.created_at).toLocaleDateString()}</span>}
                        {sec.updated_at && <span className="border-l border-slate-300 pl-2">Updated: {new Date(sec.updated_at).toLocaleDateString()}</span>}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button onClick={(e) => { e.stopPropagation(); moveSection(idx, 'up'); }} disabled={idx === 0} className="p-1 text-slate-400 hover:text-slate-800"><ChevronUp size={14} /></button>
                      <button onClick={(e) => { e.stopPropagation(); moveSection(idx, 'down'); }} disabled={idx === sections.length - 1} className="p-1 text-slate-400 hover:text-slate-800"><ChevronDown size={14} /></button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-sm text-slate-500 bg-slate-50 rounded-lg border border-slate-200 font-serif italic">
                  No Home Sections Found
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        {activeSectionId && editingSection && editingTheme && (
          <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-slate-200 bg-slate-50 p-2">
              {[
                { id: 'content', label: 'Content', icon: Type },
                { id: 'items', label: 'Items (Cards)', icon: Layout },
                { id: 'layout', label: 'Layout & Grid', icon: Layout },
                { id: 'colors', label: 'Colors', icon: Settings },
                { id: 'spacing', label: 'Spacing', icon: Settings },
                { id: 'advanced', label: 'Advanced', icon: Settings }
              ].map(t => {
                const Icon = t.icon;
                return (
                  <button key={t.id} onClick={() => setActiveTab(t.id)} className={`flex items-center gap-2 px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg ${activeTab === t.id ? 'bg-white text-indigo-600 shadow-sm border border-slate-200' : 'text-slate-500 hover:bg-slate-100'}`}>
                    <Icon size={14} /> {t.label}
                  </button>
                )
              })}
            </div>

            <div className="p-6">
              {/* CONTENT TAB */}
              {activeTab === 'content' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700">Section Content</h3>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Status</label>
                    <select value={editingSection.status} onChange={e => setEditingSection({...editingSection, status: e.target.value})} className="w-full p-2 border border-slate-200 rounded bg-white text-slate-900">
                      <option value="active">Active (Show)</option>
                      <option value="inactive">Inactive (Hide)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Title</label>
                    <input type="text" value={editingSection.title} onChange={e => setEditingSection({...editingSection, title: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-sm bg-white text-slate-900" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Subtitle</label>
                    <input type="text" value={editingSection.subtitle} onChange={e => setEditingSection({...editingSection, subtitle: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-sm bg-white text-slate-900" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Main Description / Short Text</label>
                    <textarea value={editingSection.description || ''} onChange={e => setEditingSection({...editingSection, description: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs h-24 bg-white text-slate-900" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Extra Text / Quote (Modal)</label>
                    <textarea value={editingSection.extra_text || ''} onChange={e => setEditingSection({...editingSection, extra_text: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs h-24 bg-white text-slate-900" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Full Modal Paragraphs (One big text)</label>
                    <textarea value={editingSection.modal_text || ''} onChange={e => setEditingSection({...editingSection, modal_text: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs h-40 bg-white text-slate-900" placeholder="Paste all paragraphs here..." />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Section Image URL</label>
                    <input type="text" value={editingSection.image_url || ''} onChange={e => setEditingSection({...editingSection, image_url: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-sm bg-white text-slate-900" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Section Video URL (Youtube / File)</label>
                    <input type="text" value={editingSection.video_url || ''} onChange={e => setEditingSection({...editingSection, video_url: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-sm bg-white text-slate-900" placeholder="https://www.youtube.com/embed/..." />
                  </div>
                  {(editingSection.image_url || editingSection.video_url) && (
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Media Preview</label>
                      <div className="flex flex-wrap gap-4">
                        {editingSection.image_url && <img src={editingSection.image_url} alt="preview" className="h-24 w-auto rounded object-cover shadow-sm" />}
                        {editingSection.video_url && (
                          <div className="h-24 w-40 bg-black rounded shadow-sm overflow-hidden flex items-center justify-center relative">
                            {editingSection.video_url.includes('youtu') ? (
                              <iframe src={editingSection.video_url.replace('watch?v=', 'embed/')} className="w-full h-full pointer-events-none" frameBorder="0" />
                            ) : (
                              <video src={editingSection.video_url} className="w-full h-full object-cover" muted />
                            )}
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-indigo-600 pl-1">▶</div></div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Button Text</label>
                      <input type="text" value={editingSection.button_text || ''} onChange={e => setEditingSection({...editingSection, button_text: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-sm bg-white text-slate-900" />
                    </div>
                    <div className="flex-1">
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Button Link</label>
                      <input type="text" value={editingSection.button_link || ''} onChange={e => setEditingSection({...editingSection, button_link: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-sm bg-white text-slate-900" />
                    </div>
                  </div>
                </div>
              )}

              {/* ITEMS TAB */}
              {activeTab === 'items' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-700">Section Items (Cards/Images/Reviews)</h3>
                    <button onClick={() => { setItemForm({ title: '', subtitle: '', description: '', image_url: '', video_url: '', button_text: '', link: '', display_order: 0 }); setIsEditingItem(false); }} className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded text-xs font-bold flex items-center gap-1">
                      <Plus size={14} /> Add Item
                    </button>
                  </div>
                  
                  {itemForm && (
                    <form onSubmit={handleSaveItem} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                      <h4 className="font-bold text-sm text-slate-700">{isEditingItem ? 'Edit Item' : 'New Item'}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <input placeholder="Title" value={itemForm.title} onChange={e => setItemForm({...itemForm, title: e.target.value})} className="p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" />
                        <input placeholder="Subtitle" value={itemForm.subtitle} onChange={e => setItemForm({...itemForm, subtitle: e.target.value})} className="p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" />
                        <input placeholder="Image URL" value={itemForm.image_url || ''} onChange={e => setItemForm({...itemForm, image_url: e.target.value})} className="p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" />
                        <input placeholder="Video URL" value={itemForm.video_url || ''} onChange={e => setItemForm({...itemForm, video_url: e.target.value})} className="p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" />
                        <input placeholder="Link" value={itemForm.link || ''} onChange={e => setItemForm({...itemForm, link: e.target.value})} className="p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" />
                        <input placeholder="Button/Read More Text" value={itemForm.button_text} onChange={e => setItemForm({...itemForm, button_text: e.target.value})} className="p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" />
                      </div>
                      <textarea placeholder="Description" value={itemForm.description} onChange={e => setItemForm({...itemForm, description: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs h-20 bg-white text-slate-900" />
                      <div className="flex gap-2">
                        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded text-xs font-bold">Save Item</button>
                        <button type="button" onClick={() => setItemForm(null)} className="bg-slate-200 text-slate-700 px-4 py-2 rounded text-xs font-bold">Cancel</button>
                      </div>
                    </form>
                  )}

                  <div className="space-y-2">
                    {sections.find(s => s.id === activeSectionId)?.items.map(item => (
                      <div key={item.id} className="flex justify-between items-center p-3 border border-slate-200 rounded-lg bg-white">
                        <div className="flex items-center gap-3">
                          {item.image_url && <img src={item.image_url} alt="img" className="w-10 h-10 rounded object-cover" />}
                          <div>
                            <div className="font-bold text-xs">{item.title || 'Untitled'}</div>
                            <div className="text-[10px] text-slate-500 flex flex-wrap gap-2 items-center mt-1">
                              <span>{item.subtitle}</span>
                              {item.created_at && <span className="border-l border-slate-300 pl-2">Created: {new Date(item.created_at).toLocaleDateString()}</span>}
                              {item.updated_at && <span className="border-l border-slate-300 pl-2">Updated: {new Date(item.updated_at).toLocaleDateString()}</span>}
                            </div>
                            {item.description && <div className="text-[10px] text-slate-400 mt-1 line-clamp-1 italic max-w-md">{item.description}</div>}
                            <div className="flex gap-4 mt-0.5">
                              {item.link && <div className="text-[10px] text-indigo-400 font-medium">🔗 {item.link}</div>}
                              {item.video_url && <div className="text-[10px] text-indigo-400 font-medium">▶ Video: {String(item.video_url).substring(0,25)}...</div>}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => { setItemForm({...item}); setIsEditingItem(true); }} className="text-blue-500 hover:bg-blue-50 p-1.5 rounded"><Edit2 size={14}/></button>
                          <button onClick={() => handleDeleteItem(item.id)} className="text-red-500 hover:bg-red-50 p-1.5 rounded"><Trash2 size={14}/></button>
                        </div>
                      </div>
                    ))}
                    
                    {sections.find(s => s.id === activeSectionId)?.items.length === 0 && (
                      <div className="p-8 text-center text-sm text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300 font-medium">
                        No items found for this section. <br />
                        <span className="text-xs text-slate-400 font-normal mt-2 block">Use this tab to add repeatable elements like slides, cards, text lines, or team members.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* COLORS TAB */}
              {activeTab === 'colors' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 mb-4">Color Settings</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['bg_color', 'text_color', 'heading_color', 'button_color', 'button_hover_color', 'overlay_color'].map(f => (
                      <div key={f} className="flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50">
                        <label className="text-[10px] font-bold uppercase text-slate-500">{f.replace('_', ' ')}</label>
                        <div className="flex gap-2 items-center">
                          <input type="text" value={editingTheme[f] || ''} onChange={e => setEditingTheme({...editingTheme, [f]: e.target.value})} className="w-20 p-1 border border-slate-200 rounded text-xs font-mono bg-white text-slate-900" placeholder="#ffffff" />
                          <input type="color" value={editingTheme[f] || '#ffffff'} onChange={e => setEditingTheme({...editingTheme, [f]: e.target.value})} className="w-6 h-6 border-0 p-0 cursor-pointer rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SPACING TAB */}
              {activeTab === 'spacing' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 mb-4">Spacing & Margin</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['padding_top', 'padding_bottom', 'padding_left', 'padding_right', 'margin_top', 'margin_bottom', 'margin_left', 'margin_right'].map(f => (
                      <div key={f}>
                        <label className="text-[9px] font-bold uppercase text-slate-500 block mb-1">{f.replace('_', ' ')}</label>
                        <input type="text" value={editingTheme[f] || ''} onChange={e => setEditingTheme({...editingTheme, [f]: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="e.g. 20px, 4rem" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LAYOUT TAB */}
              {activeTab === 'layout' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 mb-4">Layout & Grid Config</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Alignment</label>
                      <select value={editingTheme.alignment || 'center'} onChange={e => setEditingTheme({...editingTheme, alignment: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900">
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Grid Columns</label>
                      <input type="text" value={editingTheme.grid_columns || ''} onChange={e => setEditingTheme({...editingTheme, grid_columns: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="e.g. 1fr 1fr (for 2 cols)" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Gap Between Items</label>
                      <input type="text" value={editingTheme.gap_between_items || ''} onChange={e => setEditingTheme({...editingTheme, gap_between_items: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="e.g. 24px or 2rem" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Width / Height</label>
                      <div className="flex gap-2">
                        <input type="text" value={editingTheme.width || ''} onChange={e => setEditingTheme({...editingTheme, width: e.target.value})} className="flex-1 p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="W: 100%" />
                        <input type="text" value={editingTheme.height || ''} onChange={e => setEditingTheme({...editingTheme, height: e.target.value})} className="flex-1 p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="H: auto" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ADVANCED TAB */}
              {activeTab === 'advanced' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 mb-4">Advanced Styling</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Font Family</label>
                      <input type="text" value={editingTheme.font_family || ''} onChange={e => setEditingTheme({...editingTheme, font_family: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="e.g. 'Inter', sans-serif" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Font Size</label>
                      <input type="text" value={editingTheme.font_size || ''} onChange={e => setEditingTheme({...editingTheme, font_size: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="e.g. 16px" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Border Radius</label>
                      <input type="text" value={editingTheme.border_radius || ''} onChange={e => setEditingTheme({...editingTheme, border_radius: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="e.g. 8px" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Box Shadow</label>
                      <input type="text" value={editingTheme.box_shadow || ''} onChange={e => setEditingTheme({...editingTheme, box_shadow: e.target.value})} className="w-full p-2 border border-slate-200 rounded text-xs bg-white text-slate-900" placeholder="e.g. 0 4px 6px rgba(0,0,0,0.1)" />
                    </div>
                    <div className="flex items-center gap-4 col-span-2 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={editingTheme.animation_enabled || false} onChange={e => setEditingTheme({...editingTheme, animation_enabled: e.target.checked})} className="w-4 h-4 rounded text-indigo-600" />
                        <span className="text-xs font-bold text-slate-700">Enable Animations</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={editingTheme.hover_effects || false} onChange={e => setEditingTheme({...editingTheme, hover_effects: e.target.checked})} className="w-4 h-4 rounded text-indigo-600" />
                        <span className="text-xs font-bold text-slate-700">Enable Hover Effects</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

            </div>
            
            {/* Action Bar */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center">
              <button onClick={handleDeleteSection} className="flex items-center gap-1 px-4 py-2 text-red-600 hover:bg-red-50 rounded text-xs font-bold transition-colors">
                <Trash2 size={14} /> Delete Section
              </button>
              <button onClick={handleSaveSection} className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-colors">
                <Save size={16} /> Save Settings
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default HomeManager;

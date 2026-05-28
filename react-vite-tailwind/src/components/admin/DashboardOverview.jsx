import { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';
import { Users, Globe, FileText, Mail, TrendingUp, Clock } from 'lucide-react';

const DashboardOverview = () => {
  const [stats, setStats] = useState({ users: 0, blogs: 0, inquiries: 0, destinations: 0 });
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await apiRequest('/dashboard/stats');
        if (data.success) {
          setStats(data.data.stats);
          setRecentInquiries(data.data.recentInquiries);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>
  );

  const statCards = [
    { label: 'Utilisateurs', count: stats.users, icon: Users, color: 'bg-blue-50 text-blue-600 border-blue-100', iconBg: 'bg-blue-100' },
    { label: 'Destinations', count: stats.destinations, icon: Globe, color: 'bg-amber-50 text-amber-600 border-amber-100', iconBg: 'bg-amber-100' },
    { label: 'Articles', count: stats.blogs, icon: FileText, color: 'bg-violet-50 text-violet-600 border-violet-100', iconBg: 'bg-violet-100' },
    { label: 'Demandes', count: stats.inquiries, icon: Mail, color: 'bg-emerald-50 text-emerald-600 border-emerald-100', iconBg: 'bg-emerald-100' }
  ];

  return (
    <div className="animate-fadeIn space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-indigo-600" />
          Vue d'ensemble
        </h2>
        <p className="text-slate-500 text-sm mt-1">Bienvenue dans votre tableau de bord. Voici un aperçu rapide.</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`bg-white rounded-xl border ${stat.color.split(' ')[2]} p-5 shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color.split(' ')[1]}`} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-slate-800">{stat.count}</h3>
              <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Inquiries */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-slate-800 text-lg">Dernières Demandes</h3>
          </div>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider bg-white px-3 py-1 rounded-md border border-slate-200">Récents</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider border-b border-slate-200">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider border-b border-slate-200">Nom</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider border-b border-slate-200">Email</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider border-b border-slate-200">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentInquiries.map(inq => (
                <tr key={inq.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-slate-500 text-sm">{new Date(inq.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">{inq.name}</td>
                  <td className="px-6 py-4 text-slate-500">{inq.email}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${inq.status === 'new' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                      {inq.status === 'new' ? 'Nouveau' : 'Traité'}
                    </span>
                  </td>
                </tr>
              ))}
              {recentInquiries.length === 0 && <tr><td colSpan="4" className="px-6 py-12 text-center text-slate-400">Aucune demande récente.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

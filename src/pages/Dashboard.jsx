
import React, { useState, useEffect, useMemo } from 'react';
import DelegateDetailsModal from '../components/DelegateDetailsModal';

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
    <div className="text-4xl text-primary mr-4">{icon}</div>
    <div>
      <h4 className="text-gray-500 font-semibold">{title}</h4>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [delegates, setDelegates] = useState([]);
  const [filteredDelegates, setFilteredDelegates] = useState([]);
  const [delegatesFilter, setDelegatesFilter] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedDelegate, setSelectedDelegate] = useState(null);

  const passwordList = ['DeleGATEsRuimun26', 'CoSMainRuimun26', 'EdMainRuimun26', 'SecRETariaTRuimun26'];

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/delegates')
        .then(res => res.json())
        .then(data => {
          if (data.data) {
            setDelegates(data.data);
            setFilteredDelegates(data.data);
          }
        });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setFilteredDelegates(
      delegates.filter(delegate =>
        Object.values(delegate).some(val =>
          String(val).toLowerCase().includes(delegatesFilter.toLowerCase())
        )
      )
    );
  }, [delegatesFilter, delegates]);

  const stats = useMemo(() => ({
    total: delegates.length,
    redeemers: delegates.filter(d => d.affiliation?.toLowerCase().includes('redeemer')).length,
    nigerian: delegates.filter(d => d.delegate_type === 'Nigerian').length,
    foreign: delegates.filter(d => d.delegate_type === 'Foreign').length,
  }), [delegates]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordList.includes(password)) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      return;
    }
    const allKeys = data.reduce((keys, item) => {
      Object.keys(item).forEach(key => {
        if (!keys.includes(key)) {
          keys.push(key);
        }
      });
      return keys;
    }, []);

    const csvContent = "data:text/csv;charset=utf-8,"
      + allKeys.join(",") + "\n"
      + data.map(e => allKeys.map(key => e[key] || '').join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handlePasswordSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Admin Access</h2>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter access password"
            className="shadow-inner appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-4 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Admin Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Delegates" value={stats.total} icon="👥" />
          <StatCard title="Redeemer's University" value={stats.redeemers} icon="🎓" />
          <StatCard title="Nigerian Delegates" value={stats.nigerian} icon="🇳🇬" />
          <StatCard title="Foreign Delegates" value={stats.foreign} icon="🌍" />
        </div>

        {/* Delegates Table */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <input
              type="text"
              placeholder="Filter delegates..."
              value={delegatesFilter}
              onChange={e => setDelegatesFilter(e.target.value)}
              className="shadow-inner appearance-none border rounded-lg w-full sm:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button onClick={() => exportToCSV(filteredDelegates, "delegates.csv")} className="w-full sm:w-auto bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              Export to CSV
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  {['Name', 'Email', 'Phone', 'Affiliation', 'Actions'].map(key => 
                    <th key={key} className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">{key}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredDelegates.map(delegate => (
                  <tr key={delegate._id || delegate.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-gray-700">{delegate.name}</td>
                    <td className="py-3 px-4 border-b text-gray-700">{delegate.email}</td>
                    <td className="py-3 px-4 border-b text-gray-700">{delegate.phone}</td>
                    <td className="py-3 px-4 border-b text-gray-700">{delegate.affiliation}</td>
                    <td className="py-3 px-4 border-b">
                      <button onClick={() => setSelectedDelegate(delegate)} className="text-primary hover:underline font-semibold">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DelegateDetailsModal delegate={selectedDelegate} onClose={() => setSelectedDelegate(null)} />
    </div>
  );
};

export default Dashboard;

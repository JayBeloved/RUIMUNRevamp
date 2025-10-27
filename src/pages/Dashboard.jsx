
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [delegates, setDelegates] = useState([]);
  const [filteredDelegates, setFilteredDelegates] = useState([]);
  const [delegatesFilter, setDelegatesFilter] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const passwordList = ['DeleGATEsRuimun26', 'CoSMainRuimun26', 'EdMainRuimun26', 'SecRETariaTRuimun26'];

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/delegates')
        .then(res => res.json())
        .then(data => {
          setDelegates(data.data);
          setFilteredDelegates(data.data);
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

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordList.includes(password)) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const exportToCSV = (data, filename) => {
    if (data.length === 0) {
      return;
    }
    const csvContent = "data:text/csv;charset=utf-8,"
      + Object.keys(data[0]).join(",") + "\n"
      + data.map(e => Object.values(e).join(",")).join("\n");
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
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handlePasswordSubmit} className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Enter Password</h2>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

      {/* Delegates Table */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Delegates Registrations</h3>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Filter delegates..."
            value={delegatesFilter}
            onChange={e => setDelegatesFilter(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button onClick={() => exportToCSV(filteredDelegates, "delegates.csv")} className="bg-primary text-white font-bold py-2 px-4 rounded ml-4">
            Export to CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {delegates.length > 0 && Object.keys(delegates[0]).map(key => <th key={key} className="py-2 px-4 border-b">{key}</th>)}
              </tr>
            </thead>
            <tbody>
              {filteredDelegates.map(delegate => (
                <tr key={delegate.id}>
                  {Object.values(delegate).map((val, i) => <td key={i} className="py-2 px-4 border-b">{String(val)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

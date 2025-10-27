import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [officials, setOfficials] = useState([]);
  const [delegates, setDelegates] = useState([]);
  const [filteredOfficials, setFilteredOfficials] = useState([]);
  const [filteredDelegates, setFilteredDelegates] = useState([]);
  const [officialsFilter, setOfficialsFilter] = useState('');
  const [delegatesFilter, setDelegatesFilter] = useState('');

  useEffect(() => {
    fetch('/api/officials')
      .then(res => res.json())
      .then(data => {
        setOfficials(data.data);
        setFilteredOfficials(data.data);
      });

    fetch('/api/delegates')
      .then(res => res.json())
      .then(data => {
        setDelegates(data.data);
        setFilteredDelegates(data.data);
      });
  }, []);

  useEffect(() => {
    setFilteredOfficials(
      officials.filter(official =>
        Object.values(official).some(val =>
          String(val).toLowerCase().includes(officialsFilter.toLowerCase())
        )
      )
    );
  }, [officialsFilter, officials]);

  useEffect(() => {
    setFilteredDelegates(
      delegates.filter(delegate =>
        Object.values(delegate).some(val =>
          String(val).toLowerCase().includes(delegatesFilter.toLowerCase())
        )
      )
    );
  }, [delegatesFilter, delegates]);

  const exportToCSV = (data, filename) => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + Object.keys(data[0]).join(",") + "\n"
      + data.map(e => Object.values(e).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

      {/* Officials Table */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Officials Registrations</h3>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Filter officials..."
            value={officialsFilter}
            onChange={e => setOfficialsFilter(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button onClick={() => exportToCSV(filteredOfficials, "officials.csv")} className="bg-primary text-white font-bold py-2 px-4 rounded ml-4">
            Export to CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {officials.length > 0 && Object.keys(officials[0]).map(key => <th key={key} className="py-2 px-4 border-b">{key}</th>)}
              </tr>
            </thead>
            <tbody>
              {filteredOfficials.map(official => (
                <tr key={official.id}>
                  {Object.values(official).map((val, i) => <td key={i} className="py-2 px-4 border-b">{String(val)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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

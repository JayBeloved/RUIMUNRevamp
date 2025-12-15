import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [registrations, setRegistrations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const storedRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];
        setRegistrations(storedRegistrations);
    }, []);

    const handleStatusChange = (id, newStatus) => {
        const updatedRegistrations = registrations.map(reg => {
            if (reg.id === id) {
                return { ...reg, status: newStatus };
            }
            return reg;
        });
        setRegistrations(updatedRegistrations);
        localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));
    };

    const filteredRegistrations = registrations.filter(reg => {
        const searchTermLower = searchTerm.toLowerCase();
        const matchesSearch = (
            reg.name.toLowerCase().includes(searchTermLower) ||
            reg.email.toLowerCase().includes(searchTermLower) ||
            reg.id.toLowerCase().includes(searchTermLower)
        );

        const matchesFilter = filter === 'All' || reg.status === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="container mx-auto p-4">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md shadow-md mb-6" role="alert">
                <p className="font-bold">System Maintenance</p>
                <p>We are currently performing updates to improve our services. Some features may be temporarily unavailable. We appreciate your patience.</p>
            </div>

            <h1 className="text-3xl font-bold mb-6 text-primary">Admin Dashboard</h1>

            <div className="mb-6 flex flex-col md:flex-row gap-4 items-center">
                <input
                    type="text"
                    placeholder="Search by name, email, or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="shadow-sm appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="shadow-sm border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                    <option>All</option>
                    <option>Pending</option>
                    <option>Paid</option>
                    <option>Cancelled</option>
                </select>
            </div>

            <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Committee</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {filteredRegistrations.map(reg => (
                            <tr key={reg.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap">{reg.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{reg.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{reg.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{reg.committee1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${reg.status === 'Paid' ? 'bg-green-100 text-green-800' : reg.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                        {reg.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <select 
                                        value={reg.status}
                                        onChange={(e) => handleStatusChange(reg.id, e.target.value)}
                                        className="shadow-sm border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    >
                                        <option>Pending</option>
                                        <option>Paid</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredRegistrations.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-500">No registrations found.</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

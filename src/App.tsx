import React, { useState, useMemo } from 'react';
import { Database } from 'lucide-react';
import { voters } from './data';
import VoterTable from './components/VoterTable';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVoters = useMemo(() => {
    return voters.filter((voter) =>
      Object.values(voter).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Database className="text-blue-400" size={40} />
            <h1 className="text-4xl font-bold text-white">
              Bangladesh Voter Database by APT28 - Fancy Bear
            </h1>
          </div>
          <p className="text-gray-400">
            Comprehensive voter information management system
          </p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl shadow-2xl">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">
                Voter Records
              </h2>
              <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                {filteredVoters.length} voters found
              </span>
            </div>
          </div>

          <VoterTable
            voters={filteredVoters}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
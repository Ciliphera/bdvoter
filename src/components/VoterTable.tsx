import React from 'react';
import { Search } from 'lucide-react';
import { Voter } from '../data';

interface VoterTableProps {
  voters: Voter[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function VoterTable({ voters, searchTerm, onSearchChange }: VoterTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xl">
      <div className="mb-4 flex items-center gap-2 bg-gray-800/50 p-4 rounded-t-lg">
        <Search className="text-blue-400" size={20} />
        <input
          type="text"
          placeholder="Search voters..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-transparent border-none focus:ring-2 focus:ring-blue-500 rounded-md text-white placeholder-gray-400"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Father's Name</th>
              <th className="p-4">Date of Birth</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Division</th>
              <th className="p-4">District</th>
              <th className="p-4">Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {voters.map((voter) => (
              <tr 
                key={voter.id}
                className="bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
              >
                <td className="p-4 text-blue-400">{voter.name}</td>
                <td className="p-4 text-gray-300">{voter.fatherName}</td>
                <td className="p-4 text-gray-300">{voter.dob}</td>
                <td className="p-4 text-gray-300">{voter.gender}</td>
                <td className="p-4 text-gray-300">{voter.phone}</td>
                <td className="p-4 text-gray-300">{voter.division}</td>
                <td className="p-4 text-gray-300">{voter.district}</td>
                <td className="p-4 text-gray-300">{voter.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
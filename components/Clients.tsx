"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import UpdateClient from "./UpdateClient";
import CreateClient from "./CreateClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  saveClientsToLocalStorage,
  getClientsFromLocalStorage,
} from "utils/localstorage";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  abonnement: string;
  statut: string;
  dateInscription: string;
}

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [isCreateClientOpen, setIsCreateClientOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedClients = getClientsFromLocalStorage();
    setClients(storedClients);
  }, []);

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm) ||
      client.abonnement.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.statut.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateClient = (newClient: Client) => {
    const updatedClients = [...clients, newClient];
    setClients(updatedClients);
    saveClientsToLocalStorage(updatedClients);
  };

  const handleUpdateClient = (updatedClient: Client) => {
    const updatedClients = clients.map((client) =>
      client.id === updatedClient.id ? updatedClient : client
    );
    setClients(updatedClients);
    saveClientsToLocalStorage(updatedClients);
    setSelectedClient(null);
  };

  const handleDeleteClient = (clientId: number) => {
    const updatedClients = clients.filter((client) => client.id !== clientId);
    setClients(updatedClients);
    saveClientsToLocalStorage(updatedClients);
    setSelectedClient(null);
  };

  return (
    <div className="w-full h-full p-8 pt-0">
      <div className="flex justify-between mb-4">
        <Input
          placeholder="Rechercher par nom, email, téléphone, abonnement, statut..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2"
        />
        <Button
          onClick={() => setIsCreateClientOpen(true)}
          className="bg-black text-white py-2 px-4 rounde dark:bg-white dark:text-black"
        >
          Ajouter un Client
        </Button>
      </div>
      <Table>
        <TableHeader className="bg-slate-100 dark:bg-slate-800">
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Téléphone</TableCell>
            <TableCell>Abonnement</TableCell>
            <TableCell>Statut</TableCell>
            <TableCell>Date d'inscription</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <TableRow
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-900"
              >
                <TableCell className="text-sm">{client.name}</TableCell>
                <TableCell className="text-sm">{client.email}</TableCell>
                <TableCell className="text-sm">{client.phone}</TableCell>
                <TableCell className="text-sm">{client.abonnement}</TableCell>
                <TableCell className="text-sm">{client.statut}</TableCell>
                <TableCell className="text-sm">
                  {client.dateInscription}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-500 py-4">
                Aucun client trouvé
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {selectedClient && (
        <UpdateClient
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
          onUpdate={handleUpdateClient}
          onDelete={handleDeleteClient}
        />
      )}
      {isCreateClientOpen && (
        <CreateClient
          onClose={() => setIsCreateClientOpen(false)}
          onCreate={handleCreateClient}
        />
      )}
    </div>
  );
};

export default Clients;

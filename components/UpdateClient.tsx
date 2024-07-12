"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const UpdateClient: React.FC<{
  client: any;
  onClose: () => void;
  onUpdate: (client: any) => void;
  onDelete: (clientId: number) => void;
}> = ({ client, onClose, onUpdate, onDelete }) => {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [phone, setPhone] = useState(client.phone);
  const [abonnement, setAbonnement] = useState(client.abonnement);
  const [statut, setStatut] = useState(client.statut);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(name !== "" && email !== "" && phone !== "");
  }, [name, email, phone]);

  const handleUpdate = () => {
    if (!isValid) return;
    const updatedClient = { ...client, name, email, phone, abonnement, statut };
    onUpdate(updatedClient);
    onClose();
  };

  const handleDelete = () => {
    onDelete(client.id);
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Mettre à jour le client</DialogTitle>
        <DialogDescription>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Téléphone
            </label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="abonnement"
              className="block text-sm font-medium text-gray-700"
            >
              Abonnement
            </label>
            <Select onValueChange={setAbonnement} value={abonnement}>
              <SelectTrigger>
                <button className="w-full text-left py-2 px-3 rounded">
                  {abonnement}
                </button>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Premium">Premium</SelectItem>
                <SelectItem value="Standard">Standard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-2">
            <label
              htmlFor="statut"
              className="block text-sm font-medium text-gray-700"
            >
              Statut
            </label>
            <Select onValueChange={setStatut} value={statut}>
              <SelectTrigger>
                <button className="w-full text-left py-2 px-3 rounded">
                  {statut}
                </button>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Actif">Actif</SelectItem>
                <SelectItem value="Inactif">Inactif</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between mt-4">
            <Button
              onClick={handleUpdate}
              className={`py-2 px-4 rounded ${isValid ? "bg-green-700 text-white" : "bg-gray-300 text-gray-500"}`}
              disabled={!isValid}
            >
              Modifier
            </Button>
            <Button
              onClick={handleDelete}
              className="bg-red-700 text-white py-2 px-4 rounded"
            >
              Supprimer
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateClient;

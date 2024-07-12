"use client";

import React, { useEffect, useState } from "react";
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

const CreateClient: React.FC<{
  onClose: () => void;
  onCreate: (client: any) => void;
}> = ({ onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [abonnement, setAbonnement] = useState("Premium");
  const [statut, setStatut] = useState("Actif");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(name !== "" && email !== "" && phone !== "");
  }, [name, email, phone]);

  const handleCreate = () => {
    if (!isValid) return;
    const newClient = {
      id: Date.now(),
      name,
      email,
      phone,
      abonnement,
      statut,
      dateInscription: new Date().toISOString().split("T")[0],
    };
    onCreate(newClient);
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Ajouter un Client</DialogTitle>
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
          <Button
            onClick={handleCreate}
            className={`mt-4 py-2 px-4 rounded ${isValid ? "bg-green-700 text-white" : "bg-gray-300 text-gray-500"}`}
            disabled={!isValid}
          >
            Ajouter
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default CreateClient;

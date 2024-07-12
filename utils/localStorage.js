export const saveClientsToLocalStorage = (clients) => {
  localStorage.setItem("clients", JSON.stringify(clients));
};

export const getClientsFromLocalStorage = () => {
  const clients = localStorage.getItem("clients");
  return clients ? JSON.parse(clients) : [];
};

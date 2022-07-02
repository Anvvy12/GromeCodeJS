export const withdraw = (clients, balances, client, amount) => {
  const personIndex = clients.indexOf(client);
  const balanc = balances[personIndex];

  if (personIndex === -1) return null;

  if (balanc < amount) {
    return -1;
  }
  return balanc - amount;
};

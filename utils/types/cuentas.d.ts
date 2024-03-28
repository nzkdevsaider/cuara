interface Account {
  id: number;
  type: number;
  cid: string;
  primary: boolean;
  hasCard: boolean;
  name: string;
  balance: number;
}

interface Accounts {
  accounts: Account[];
}

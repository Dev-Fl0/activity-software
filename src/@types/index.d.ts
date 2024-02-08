export interface UserType {
  firstname: string;
  lastname: string;
  mail: string;
  password: string;
  phone: string;
  role: string;
}

export interface TaskType {
  id: number;
  userId: number;
  clientId: number;
  name: string;
  startAt: Date;
  duration: string; // Durée en minutes
  price: number;
  technician: UserType | null;
  client: ClientType | null;
}

export interface ClientType {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

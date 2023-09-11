import { randomUUID } from 'node:crypto';

export class Property {
  readonly id: string;
  quantidadeQuartos: number;
  valor: number;
  cidade: string;
  fotos?: string[] | null;
  userId: string;
  created_at?: Date;
  tipo: string;

  constructor() {
    this.id = randomUUID();
    this.fotos = [];
  }
}

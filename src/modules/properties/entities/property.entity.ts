import { randomUUID } from 'node:crypto';

export class Property {
  readonly id: string;
  titulo: string;
  descricao: string;
  banheiros: number;
  tamanho: number;
  quartos: number;
  bairro: string;
  valor: number;
  cidade: string;
  vagas_garagem: number;
  fotos?: string[] | null;
  userId: string;
  created_at?: Date;
  tipo: string;

  constructor() {
    this.id = randomUUID();
    this.fotos = [];
  }
}

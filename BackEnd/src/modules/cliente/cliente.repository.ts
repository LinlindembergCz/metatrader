import { Repository, EntityRepository } from "typeorm";
import { Cliente } from "./cliente.entity";

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente>
{ } 

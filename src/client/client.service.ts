import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  findAll(her: any) {
    if (!her.authorization || her.authorization === '')
      throw new ForbiddenException('Usuário não autorizado');

    return [
      {
        name: 'Liz Isabelly Rita Ramos',
        identity: '470.996.503-00',
      },
      {
        name: 'Lucas Ruan Theo Porto',
        identity: '566.081.992-36',
      },
      {
        name: 'Jennifer Kamilly Stella dos Santos',
        identity: '959.982.913-10',
      },
      {
        name: 'Gabriela Rita Almeida',
        identity: '599.830.354-72',
      },
    ];
  }
}

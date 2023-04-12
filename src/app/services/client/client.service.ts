import { Injectable } from '@angular/core';
import {ClientControllerService} from "../../api/services/client-controller.service";
import {Observable} from "rxjs";
import {ClientDto} from "../../api/models/client-dto";
import {PageClientDto} from "../../api/models/page-client-dto";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private clientService : ClientControllerService
  ) { }

  findAllPaginated(page: number, size: number):Observable<PageClientDto>{
    return this.clientService.findAllPaginated1({page,size});
  }

  add(client : ClientDto):Observable<ClientDto>{
    return this.clientService.save2({body:client});
  }

  findAll():Observable<ClientDto[]>{
    return this.clientService.findAll2()
  }
}

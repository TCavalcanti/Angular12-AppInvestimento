import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../shared/client.model';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.css']
})
export class ClientsNewComponent implements OnInit {

  public formClient:FormGroup;

  @Output() newClient:EventEmitter<Client> = new EventEmitter();

  constructor(private fb:FormBuilder, private clientsService:ClientsService, private toastr:ToastrService) { 
    this.formClient = this.buildFormClient();
  }

  ngOnInit(): void {
  }


  private buildFormClient():FormGroup{
    return this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  public isFormControlInvalid(controlName:string):boolean{
    return !!(this.formClient.get(controlName)?.invalid && this.formClient.get(controlName)?.touched)
  }


  public saveNewClient():void{

    const newClient:Client = this.formClient.value as Client;

    this.clientsService.saveNew(newClient).subscribe(
      res => {
        this.toastr.success("Novo cliente salvo com sucesso!");
        this.formClient.reset();
        this.newClient.emit(res);
      },
      err =>{
        console.log(err);
        this.toastr.error("Falha ao salvar novo cliente");
      }
    )

    console.log(this.formClient.value);
  }

}

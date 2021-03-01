import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-form-pokemon',
  templateUrl: './form-pokemon.component.html',
  styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBilder: FormBuilder
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }
  savePokemon(event: Event){
    event.preventDefault()
    //obtengo los datos del formulario
    console.log(this.form.value)
  }

  private buildForm(){
    this.form = this.formBilder.group({
      id:['', [Validators.required]],
      name:['', [Validators.required]],
      level:['0', [Validators.required]],
      abilities:['', [Validators.required]],
      
    })
  }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace meliPOS.models
{
    public class Persona
    {
        public string firstName {get;set;}
        public string lastName {get;set;}
        public string apPaterno  {get;set;}
        public string apMaterno  {get;set;} 
        public string foto {get;set;}
    }

    public class PersonaData
    {
        public int id  {get;set;}
        public string fechaNacimiento  {get;set;}
        public DateTime fechaAlta {get;set;}
        public string ine_ife  {get;set;}
        public string curp  {get;set;}
        public string rfc  {get;set;}
        public string direccion  {get;set;}
    }
}
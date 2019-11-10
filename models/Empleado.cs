using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace meliPOS.models
{
    public class Empleado : Persona
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idEmpleado {get;set;}

        public string codeBarId {get;set;}
        public ICollection<EmpleadoData> datos {get;set;}
    }
    public class EmpleadoData : PersonaData
    {
        public int idEmpleado  {get;set;}
        public Double sueldo {get;set;}
        public string NSS {get;set;}
        public string infonavit {get;set;}

    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace meliPOS.models
{
    public class usuarioLogin
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id {get;set;}
        public string password {get;set;}
        public string nombre {get;set;}
        public string token {get;set;}
    }
}
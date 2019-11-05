
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using meliPOS.models;


namespace meliPOS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class loginController : ControllerBase
    {

        [HttpPost("{id}")]
        public usuarioLogin Post(string id,[FromBody] string password)
        {
            Console.WriteLine( String.Format("Usuario: {0} password: {1} ", id,password));

            return new usuarioLogin{
                id=id,
                nombre="nombre",
                password=password
            };
        }

        [HttpGet]
        public string Get(string nombre)
        {
            return "hola "+ nombre;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using meliPOS.models;


namespace meliPOS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class loginController : ControllerBase
    {
        private readonly MeliPOSDbContext _context;
        public loginController(MeliPOSDbContext context )
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<usuarioLogin>>> Get()
        {
            var usuarioLogin = _context.UsuariosLogin.ToListAsync();

            return await usuarioLogin;

        }
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
    }
}
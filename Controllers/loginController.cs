
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
        public async Task<ActionResult<usuarioLogin>> Post(int id,[FromBody] string password)
        {
            Console.WriteLine( String.Format("Usuario: {0} password: {1} ", id,password));
            var usuario = await _context.UsuariosLogin.FindAsync(id);
            if(usuario!=null&& usuario.password==password)
            {
                usuario.token = new Codificar().Crear(String.Format("clave:{0}-{1}",
                    usuario.nombre,DateTime.Now ));

                _context.Entry(usuario).State = EntityState.Modified;
                await _context.SaveChangesAsync(); 

                usuario.password="UNDEFINED";

                return usuario;
            }
            return null;
        }
        
    }
}

/*
OTksMTA4LDk3LDExOCwxMDEsNTg
OTksMTA4LDk3LDExOCwxMDEsNTg
OTksMTA4LDk3LDExOCwxMDEsNTgsNjUsMTAwLDEwOSwxMDUsMTEwLDQ1LDQ5LDUwLDQ3LDQ5LDQ5LDQ3LDQ5LDU3LDMyLDQ5LDU0LDU4LDUwLDUzLDU4LDQ4LDU2
OTksMTA4LDk3LDExOCwxMDEsNTgsNjUsMTAwLDEwOSwxMDUsMTEwLDQ1LDQ5LDUwLDQ3LDQ5LDQ5LDQ3LDQ5LDU3LDMyLDQ5LDU0LDU4LDUwLDUzLDU4LDUxLDU1
OTksMTA4LDk3LDExOCwxMDEsNTgsMTAzLDk3LDEwMSwxMDgsNDUsNDksNTAsNDcsNDksNDksNDcsNDksNTcsMzIsNDksNTQsNTgsNTAsNTQsNTgsNTEsNTI
OTksMTA4LDk3LDExOCwxMDEsNTgsMTA4LDEwNSwxMDAsMTA1LDk3LDMyLDk3LDExMCw5NywxMDgsMTIxLDMyLDExOCwxMDUsMTA4LDEwOCwxMDEsMTAzLDk3LDExNSwzMiwxMTIsOTcsMTEwLDExNiwxMTEsMTA2LDk3LDQ1LDQ5LDUwLDQ3LDQ5LDQ5LDQ3LDQ5LDU3LDMyLDQ5LDU0LDU4LDUxLDQ4LDU4LDQ5LDU2
*/
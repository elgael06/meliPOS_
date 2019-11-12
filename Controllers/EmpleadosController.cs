using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using meliPOS.models;

namespace meliPOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadosController : Controller
    {
        private readonly MeliPOSDbContext _context;
        public EmpleadosController(MeliPOSDbContext context)
        {
            _context = context;
        }
        // GET: api/<controller>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleado>>> Get()
        {
            return await _context.Empleados.Include(e=>e.datos).ToListAsync();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Empleado>> Get(int id)
        {
            var Empleado = await _context.Empleados.Include(e=>e.datos).ToListAsync();
            var res = Empleado.Find(e=>e.idEmpleado== id);
            if(res==null)
            {
                return  NotFound();
            }

            return res;
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<ActionResult<int>> Post([FromBody]Empleado value)
        {
            value.datos.Select(e=>{
                e.fechaAlta = DateTime.Now;
                return e;
            });
            _context.Add(value);
            try{
                await _context.SaveChangesAsync();
                AddUsuarioLogin(value);
                return value.idEmpleado;
            }catch{
                return 0;
            }
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Boolean>> Put(int id, [FromBody]Empleado value)
        {
            if(id != value.idEmpleado)
            {
                return false;
            }
            try
            {
                value.datos.Select(e=>e);
                _context.Entry(value).State = EntityState.Modified;
                await _context.SaveChangesAsync(); 
                UpdateUsuarioLogin(value);
                return true;
            }catch
            {
                return false;
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        /*Modoficaciones de UsuarioLogin*/
        private void AddUsuarioLogin(Empleado e)
        {
            var usrLog = new usuarioLogin{
                id=e.idEmpleado,
                nombre= string.Format("{0} {1} {2} {3}",
                 e.firstName,e.lastName,e.apPaterno,e.apMaterno),
                password="123456789"
            };            
            _context.Add(usrLog);
            _context.SaveChangesAsync();
        }
        private void UpdateUsuarioLogin(Empleado e)
        {
            _context.Entry(e).State = EntityState.Modified;
            _context.SaveChangesAsync();
        }
    }
}
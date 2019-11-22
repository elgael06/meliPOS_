
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
    public class UserDataController : ControllerBase
    {
        private readonly MeliPOSDbContext _context;
        public UserDataController(MeliPOSDbContext context )
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmpleadoData>>> Get()
        {   
            return await  _context.EmpleadoData.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<EmpleadoData>> Get(int id)
        {
            var datos = await _context.EmpleadoData.FindAsync(id);
            if(datos!=null)
            {
                return datos;
            }
            return new EmpleadoData();
        }     
        [HttpPost] 
        public async Task<ActionResult<int>> Post([FromBody] EmpleadoData value)
        {
            _context.Add(value);
            await _context.SaveChangesAsync();
            return value.idEmpleado;
        }  
        [HttpPut("{id}")]
        public async Task<ActionResult<Boolean>> Put(int id,[FromBody] EmpleadoData value)
        {
            if(id != value.idEmpleado )
                return false;
            _context.Entry(value).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;

        }
        
    }
}
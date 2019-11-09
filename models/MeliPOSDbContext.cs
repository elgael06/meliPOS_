using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Sqlite;

namespace meliPOS.models
{
    public class MeliPOSDbContext : DbContext
    {  
        public MeliPOSDbContext (DbContextOptions<MeliPOSDbContext> options) : base (options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite("Data Source=local.db",options=>{
                    
                });
            }
        }
         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");
        }

        public DbSet<usuarioLogin> UsuariosLogin  {get;set;} 
    }
}
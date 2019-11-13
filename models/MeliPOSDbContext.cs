using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Sqlite;

namespace meliPOS.models
{
    public class MeliPOSDbContext : DbContext
    {  
        public MeliPOSDbContext (DbContextOptions<MeliPOSDbContext> options) : base (options) {}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlite("Filename=local.db" );
                optionsBuilder.UseMySql("Server=localhost;Database=meliPOS;User=gael;Password=Algn1121@@**;");
            }
        }
         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");
        }

        public DbSet<usuarioLogin> UsuariosLogin  {get;set;} 
        public DbSet<Empleado> Empleados {get;set;}
        public DbSet<EmpleadoData> EmpleadoData {get;set;}
    }
}
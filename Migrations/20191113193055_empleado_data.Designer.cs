﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using meliPOS.models;

namespace meliPOS.Migrations
{
    [DbContext(typeof(MeliPOSDbContext))]
    [Migration("20191113193055_empleado_data")]
    partial class empleado_data
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("meliPOS.models.Empleado", b =>
                {
                    b.Property<int>("idEmpleado")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("apMaterno");

                    b.Property<string>("apPaterno");

                    b.Property<string>("codeBarId");

                    b.Property<string>("firstName");

                    b.Property<string>("foto");

                    b.Property<string>("lastName");

                    b.HasKey("idEmpleado");

                    b.ToTable("Empleados");
                });

            modelBuilder.Entity("meliPOS.models.EmpleadoData", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("NSS");

                    b.Property<string>("curp");

                    b.Property<string>("direccion");

                    b.Property<DateTime>("fechaAlta");

                    b.Property<string>("fechaNacimiento");

                    b.Property<int>("idEmpleado");

                    b.Property<string>("ine_ife");

                    b.Property<string>("infonavit");

                    b.Property<string>("rfc");

                    b.Property<double>("sueldo");

                    b.HasKey("id");

                    b.HasIndex("idEmpleado");

                    b.ToTable("EmpleadoData");
                });

            modelBuilder.Entity("meliPOS.models.usuarioLogin", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("nombre");

                    b.Property<string>("password");

                    b.Property<string>("token");

                    b.HasKey("id");

                    b.ToTable("UsuariosLogin");
                });

            modelBuilder.Entity("meliPOS.models.EmpleadoData", b =>
                {
                    b.HasOne("meliPOS.models.Empleado")
                        .WithMany("datos")
                        .HasForeignKey("idEmpleado")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}

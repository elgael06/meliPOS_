using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace meliPOS.Migrations
{
    public partial class empleados : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Empleados",
                columns: table => new
                {
                    idEmpleado = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    firstName = table.Column<string>(nullable: true),
                    lastName = table.Column<string>(nullable: true),
                    apPaterno = table.Column<string>(nullable: true),
                    apMaterno = table.Column<string>(nullable: true),
                    foto = table.Column<string>(nullable: true),
                    codeBarId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empleados", x => x.idEmpleado);
                });

            migrationBuilder.CreateTable(
                name: "EmpleadoData",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    fechaNacimiento = table.Column<string>(nullable: true),
                    fechaAlta = table.Column<DateTime>(nullable: false),
                    ine_ife = table.Column<string>(nullable: true),
                    curp = table.Column<string>(nullable: true),
                    rfc = table.Column<string>(nullable: true),
                    direccion = table.Column<string>(nullable: true),
                    idEmpleado = table.Column<int>(nullable: false),
                    sueldo = table.Column<double>(nullable: false),
                    NSS = table.Column<string>(nullable: true),
                    infonavit = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmpleadoData", x => x.id);
                    table.ForeignKey(
                        name: "FK_EmpleadoData_Empleados_idEmpleado",
                        column: x => x.idEmpleado,
                        principalTable: "Empleados",
                        principalColumn: "idEmpleado",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EmpleadoData_idEmpleado",
                table: "EmpleadoData",
                column: "idEmpleado",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmpleadoData");

            migrationBuilder.DropTable(
                name: "Empleados");
        }
    }
}

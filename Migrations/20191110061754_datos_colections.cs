using Microsoft.EntityFrameworkCore.Migrations;

namespace meliPOS.Migrations
{
    public partial class datos_colections : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_EmpleadoData_idEmpleado",
                table: "EmpleadoData");

            migrationBuilder.CreateIndex(
                name: "IX_EmpleadoData_idEmpleado",
                table: "EmpleadoData",
                column: "idEmpleado");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_EmpleadoData_idEmpleado",
                table: "EmpleadoData");

            migrationBuilder.CreateIndex(
                name: "IX_EmpleadoData_idEmpleado",
                table: "EmpleadoData",
                column: "idEmpleado",
                unique: true);
        }
    }
}

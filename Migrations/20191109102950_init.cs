using Microsoft.EntityFrameworkCore.Migrations;

namespace meliPOS.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UsuariosLogin",
                columns: table => new
                {
                    id = table.Column<string>(nullable: false),
                    password = table.Column<string>(nullable: true),
                    nombre = table.Column<string>(nullable: true),
                    token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsuariosLogin", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UsuariosLogin");
        }
    }
}

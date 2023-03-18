using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AvaliacaoDuettSoftware.Api.Migrations
{
    /// <inheritdoc />
    public partial class RemoveResultado : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Resultado",
                table: "Frutas");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Resultado",
                table: "Frutas",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace CombatTracker.Domain.Migrations
{
    public partial class creatureStatusAddition : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Creatures",
                nullable: false,
                defaultValue: 2);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Creatures");
        }
    }
}

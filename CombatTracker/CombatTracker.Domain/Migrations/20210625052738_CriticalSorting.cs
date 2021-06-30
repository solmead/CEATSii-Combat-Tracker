using Microsoft.EntityFrameworkCore.Migrations;

namespace CombatTracker.Domain.Migrations
{
    public partial class CriticalSorting : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SortOrder",
                table: "CriticalAffects",
                type: "int",
                nullable: false,
                defaultValue: 0);
            migrationBuilder.Sql("UPDATE \"CriticalAffects\" SET \"SortOrder\" = \"Id\"");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SortOrder",
                table: "CriticalAffects");
        }
    }
}

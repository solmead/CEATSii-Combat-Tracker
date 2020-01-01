using Microsoft.EntityFrameworkCore.Migrations;

namespace CombatTracker.Domain.Migrations
{
    public partial class security : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OwnerID",
                table: "Creatures",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Creatures_OwnerID",
                table: "Creatures",
                column: "OwnerID");

            migrationBuilder.AddForeignKey(
                name: "FK_Creatures_AspNetUsers_OwnerID",
                table: "Creatures",
                column: "OwnerID",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Creatures_AspNetUsers_OwnerID",
                table: "Creatures");

            migrationBuilder.DropIndex(
                name: "IX_Creatures_OwnerID",
                table: "Creatures");

            migrationBuilder.DropColumn(
                name: "OwnerID",
                table: "Creatures");
        }
    }
}

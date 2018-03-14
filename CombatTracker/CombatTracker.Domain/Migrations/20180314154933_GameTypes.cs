using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace CombatTracker.Domain.Migrations
{
    public partial class GameTypes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "GameType",
                table: "Games",
                defaultValue: "RMSS",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<string>(
                name: "GameType",
                table: "Creatures",
                defaultValue: "RMSS",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GameType",
                table: "Characters",
                defaultValue: "RMSS",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GameType",
                table: "Creatures");

            migrationBuilder.DropColumn(
                name: "GameType",
                table: "Characters");

            migrationBuilder.AlterColumn<int>(
                name: "GameType",
                table: "Games",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}

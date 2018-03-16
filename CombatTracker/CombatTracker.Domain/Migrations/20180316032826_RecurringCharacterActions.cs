using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace CombatTracker.Domain.Migrations
{
    public partial class RecurringCharacterActions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "CharacterAction",
                table: "ActorsActions",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Reoccuring",
                table: "ActorsActions",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CharacterAction",
                table: "ActorsActions");

            migrationBuilder.DropColumn(
                name: "Reoccuring",
                table: "ActorsActions");
        }
    }
}

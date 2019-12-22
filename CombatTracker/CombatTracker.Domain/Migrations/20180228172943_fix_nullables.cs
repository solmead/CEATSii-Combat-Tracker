using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace CombatTracker.Domain.Migrations
{
    public partial class fix_nullables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "RoundNumber",
                table: "PsychicRefractoryPeriodMod",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Mod",
                table: "PsychicRefractoryPeriodMod",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "LevelMin",
                table: "PsychicRefractoryPeriodMod",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "LevelMax",
                table: "PsychicRefractoryPeriodMod",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "RoundNumber",
                table: "PsychicRefractoryPeriodMod",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "Mod",
                table: "PsychicRefractoryPeriodMod",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "LevelMin",
                table: "PsychicRefractoryPeriodMod",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "LevelMax",
                table: "PsychicRefractoryPeriodMod",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}

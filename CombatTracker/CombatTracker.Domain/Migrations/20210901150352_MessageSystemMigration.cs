using Microsoft.EntityFrameworkCore.Migrations;

namespace CombatTracker.Domain.Migrations
{
    public partial class MessageSystemMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Game_ID = table.Column<int>(type: "int", nullable: false),
                    MessageType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GameTime = table.Column<double>(type: "float", nullable: false),
                    Whom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WhomColor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Action = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReverseOrder = table.Column<bool>(type: "bit", nullable: false),
                    BeginText = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BetweenText = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EndText = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Messages_Games_Game_ID",
                        column: x => x.Game_ID,
                        principalTable: "Games",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Messages_Game_ID",
                table: "Messages",
                column: "Game_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Messages");
        }
    }
}

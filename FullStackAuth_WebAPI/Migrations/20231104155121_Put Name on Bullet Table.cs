using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class PutNameonBulletTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6ba940c4-fb13-4bc1-a9be-093d65624ccf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d676b0ba-9fba-4990-a511-78ffcbb81e59");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Bullets",
                type: "longtext",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0efbe095-0ddf-4e68-804e-9f5d04e8e1ad", null, "User", "USER" },
                    { "77003b7c-67de-4616-a803-1810f63ec890", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0efbe095-0ddf-4e68-804e-9f5d04e8e1ad");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "77003b7c-67de-4616-a803-1810f63ec890");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Bullets");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6ba940c4-fb13-4bc1-a9be-093d65624ccf", null, "User", "USER" },
                    { "d676b0ba-9fba-4990-a511-78ffcbb81e59", null, "Admin", "ADMIN" }
                });
        }
    }
}

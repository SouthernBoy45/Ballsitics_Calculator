using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class addedImageModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0efbe095-0ddf-4e68-804e-9f5d04e8e1ad");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "77003b7c-67de-4616-a803-1810f63ec890");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "08ba70c1-18d4-4c44-8bcc-1dc540a22178", null, "Admin", "ADMIN" },
                    { "58873aa3-dd76-494e-9f6e-c6928eafd0c0", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "08ba70c1-18d4-4c44-8bcc-1dc540a22178");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "58873aa3-dd76-494e-9f6e-c6928eafd0c0");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0efbe095-0ddf-4e68-804e-9f5d04e8e1ad", null, "User", "USER" },
                    { "77003b7c-67de-4616-a803-1810f63ec890", null, "Admin", "ADMIN" }
                });
        }
    }
}

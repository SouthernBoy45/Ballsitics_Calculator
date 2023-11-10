using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRifle : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "744f7189-d685-4a6c-9067-6b9a3972643c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b108bbae-7f56-47f9-aeb1-738704308202");

            migrationBuilder.AlterColumn<double>(
                name: "ScopeHeight",
                table: "Rifles",
                type: "double",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "64ccbeb6-bc37-4866-a351-05cfbcdaea33", null, "Admin", "ADMIN" },
                    { "7a814244-3596-4155-b3d0-ef1791b09a7b", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "64ccbeb6-bc37-4866-a351-05cfbcdaea33");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7a814244-3596-4155-b3d0-ef1791b09a7b");

            migrationBuilder.AlterColumn<int>(
                name: "ScopeHeight",
                table: "Rifles",
                type: "int",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "double");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "744f7189-d685-4a6c-9067-6b9a3972643c", null, "User", "USER" },
                    { "b108bbae-7f56-47f9-aeb1-738704308202", null, "Admin", "ADMIN" }
                });
        }
    }
}

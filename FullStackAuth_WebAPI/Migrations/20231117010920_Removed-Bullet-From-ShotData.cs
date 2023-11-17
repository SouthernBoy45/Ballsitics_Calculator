using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace FullStackAuth_WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class RemovedBulletFromShotData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ShotDatas_Bullets_BulletId",
                table: "ShotDatas");

            migrationBuilder.DropIndex(
                name: "IX_ShotDatas_BulletId",
                table: "ShotDatas");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "64ccbeb6-bc37-4866-a351-05cfbcdaea33");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7a814244-3596-4155-b3d0-ef1791b09a7b");

            migrationBuilder.DropColumn(
                name: "BulletId",
                table: "ShotDatas");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "488159fa-b68e-4997-92a7-5472d9c6a95c", null, "Admin", "ADMIN" },
                    { "bf3426b2-1fa7-4f61-8fbb-838e8f7d921b", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "488159fa-b68e-4997-92a7-5472d9c6a95c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bf3426b2-1fa7-4f61-8fbb-838e8f7d921b");

            migrationBuilder.AddColumn<string>(
                name: "BulletId",
                table: "ShotDatas",
                type: "varchar(255)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "64ccbeb6-bc37-4866-a351-05cfbcdaea33", null, "Admin", "ADMIN" },
                    { "7a814244-3596-4155-b3d0-ef1791b09a7b", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ShotDatas_BulletId",
                table: "ShotDatas",
                column: "BulletId");

            migrationBuilder.AddForeignKey(
                name: "FK_ShotDatas_Bullets_BulletId",
                table: "ShotDatas",
                column: "BulletId",
                principalTable: "Bullets",
                principalColumn: "Id");
        }
    }
}

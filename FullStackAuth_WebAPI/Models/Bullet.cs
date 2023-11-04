using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace FullStackAuth_WebAPI.Models
{
    public class Bullet
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key()]
        public string Id { get; set; }
        public string Name { get; set; }
        public double MuzzleVelocity { get; set; }
        public double Caliber { get; set; }
        public double Weight { get; set; }
    }
}

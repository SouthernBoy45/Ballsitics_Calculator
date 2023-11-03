using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace FullStackAuth_WebAPI.Models
{
    public class Bullet
    {
        public int Id { get; set; }
        public double MuzzleVelocity { get; set; }
        public double Caliber { get; set; }
        public double Weight { get; set; }
    }
}

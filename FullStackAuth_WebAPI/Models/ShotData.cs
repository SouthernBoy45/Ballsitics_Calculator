
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
namespace FullStackAuth_WebAPI.Models
{
    public class ShotData
    {
        [Key]
        public int Id { get; set; }
        public int TargetRange { get; set; }
        [ForeignKey ("Rifle")]
        public string RifleId { get; set; }
        [ForeignKey ("User")]
        public string UserId { get; set; }
        public Rifle Rifle { get; set; }
        public User User { get; set; }
    }
}

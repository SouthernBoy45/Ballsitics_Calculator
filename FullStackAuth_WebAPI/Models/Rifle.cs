using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
namespace FullStackAuth_WebAPI.Models
{
    public class Rifle
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int ScopeHeight { get; set; }
        [ForeignKey ("User")]
        public string UserId { get; set; }
        public User User { get; set; }
        public ShotData ShotData { get; set; }
    }
}

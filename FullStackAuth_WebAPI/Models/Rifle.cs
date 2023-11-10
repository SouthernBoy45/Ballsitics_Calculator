using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
namespace FullStackAuth_WebAPI.Models
{
    public class Rifle
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public double ScopeHeight { get; set; }
        public double ZeroRange { get; set; }
        [ForeignKey ("User")]
        public string UserId { get; set; }
        public User User { get; set; }
        public ShotData ShotData { get; set; }
    }
}

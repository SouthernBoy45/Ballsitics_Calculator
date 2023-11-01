using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
namespace FullStackAuth_WebAPI.Models
{
    public class Rifle
    {
        [Key]
        public int Id { get; set; }
        public int Caliber { get; set; }
        public int ScopeHeight { get; set; }
        [ForeignKey ("User")]
        public string UserId { get; set; }
        [ForeignKey ("ShotData")]
        public string ShotDataId { get; set; }
    }
}

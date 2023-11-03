
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using FullStackAuth_WebAPI.DataTransferObjects;
using Microsoft.AspNetCore.Identity;
using Org.BouncyCastle.Tls;

namespace FullStackAuth_WebAPI.Models
{
    public class ShotData
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key()]
        public string Id { get; set; }
        public int TargetRange { get; set; }
        [ForeignKey ("Rifle")]
        public string RifleId { get; set; }
        public Rifle Rifle { get; set; }
        [ForeignKey ("User")]
        public string UserId { get; set; }
        public virtual User User { get; set; }
       
    }
}

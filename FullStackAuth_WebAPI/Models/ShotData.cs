﻿
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
        public string ShootingCondition { get; set; }
        public string Note { get; set; }
        [ForeignKey ("User")]
        public string UserId { get; set; }
        public User User { get; set; }
    }
}

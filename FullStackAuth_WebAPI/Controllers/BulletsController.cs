using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BulletsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BulletsController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<RiflesController>
        [HttpGet]
        public IActionResult GetAllBullets()
        {
            try
            {
                var bullets = _context.Bullets.Select(b => new Bullet
                {
                    Id = b.Id,
                    MuzzleVelocity = b.MuzzleVelocity,
                    Caliber = b.Caliber,
                    Weight = b.Weight
                }).ToList();

                return StatusCode(200, bullets);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
            
        }

        // GET api/<RiflesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RiflesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RiflesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RiflesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
}

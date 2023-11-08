using Azure.Identity;
using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RiflesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RiflesController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<RiflesController>
        [HttpGet]
        public IActionResult GetAllRifles()
        {
            try
            {
                string userId = User.FindFirstValue("id");

                var rifles = _context.Rifles.Select(r => new Rifle
                {
                    Name = r.Name,
                    ScopeHeight = r.ScopeHeight,
                    ZeroRange = r.ZeroRange
                }).ToList();
                return StatusCode(200, rifles);
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
        [HttpPost, Authorize]
        public IActionResult Post([FromBody] Rifle data)
        {
            try
            {
                string userId = User.FindFirstValue("id");

                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }

                data.UserId = userId;
                _context.Rifles.Add(data);

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();
                return StatusCode(201, data);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
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

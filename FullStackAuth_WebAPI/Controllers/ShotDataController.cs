using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShotDataController : ControllerBase

    {
        private readonly ApplicationDbContext _context;

        public ShotDataController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/<ShotDataController>
        [HttpGet]
        public IActionResult GetShotData()
        {
            try
            {
                var shotData = _context.ShotDatas.Select(s => new ShotData
                {
                    Id = s.Id,
                    TargetRange = s.TargetRange,
                    Rifle = new Rifle
                    {
                        Name = s.Rifle.Name
                    }
                }).ToList();
                return StatusCode(200, shotData);
            } catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
            
        }

        // GET api/<ShotDataController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ShotDataController>
        //[HttpPost, Authorize]
        //public IActionResult Post([FromBody] ShotData data)
        //{

        //}

        // PUT api/<ShotDataController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ShotDataController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

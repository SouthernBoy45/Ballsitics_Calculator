using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RiflesController : ControllerBase
    {
        // GET: api/<RiflesController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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

using AccessData;
using Entities;
using Logic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiAppReactLogin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        public UserController(IUserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("getUsers")]
        public async Task<IActionResult> GetUsers()
        {
            //"Data Source=87.106.205.159; Initial Catalog=api_finitripDB; User Id=us_api_DB; Password=7m^9m5Pw1"
            try
            {
                var rpta = await new Logic_User(_repo).GetUsers();
                return Ok(rpta);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }



        [HttpPost("LoginUser")]
        public async Task<IActionResult> LoginUser([FromBody] User value)
        {
            //"Data Source=87.106.205.159; Initial Catalog=api_finitripDB; User Id=us_api_DB; Password=7m^9m5Pw1"
            try
            {
                var rpta = await new Logic_User(_repo).LoginUser(value);
                return Ok(rpta);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }



        [HttpPost("DeleteUser")]
        public async Task<IActionResult> DeleteUser([FromBody] User value)
        {
            //"Data Source=87.106.205.159; Initial Catalog=api_finitripDB; User Id=us_api_DB; Password=7m^9m5Pw1"
            try
            {
                var rpta = await new Logic_User(_repo).DeleteUser(value);
                return Ok(rpta);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }


        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] User value)
        {
            //"Data Source=87.106.205.159; Initial Catalog=api_finitripDB; User Id=us_api_DB; Password=7m^9m5Pw1"
            try
            {
                var rpta = await new Logic_User(_repo).CreateUser(value);
                return Ok(rpta);
            }
            catch (Exception ex)
            {
                //log error
                return StatusCode(500, ex.Message);
            }
        }




        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<string> Get()
        {

            return new string[] { "value1", "value2" };
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

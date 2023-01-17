using System.Threading.Tasks;
using api.Entities;
using api.Service;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("User")]
    [ApiController]
    public class UserController : Controller
    {
        private IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpGet("List")]
        public ActionResult<UserEntity> GetAll()
        {
            var users = _userService.GetAll();

            if (users == null)
            {
                return BadRequest("User list is empty");
            }
            return Ok(users);
        }
        [HttpPost("Add")]
        public async Task<ActionResult<UserEntity>> Add(UserEntity user)
        {
            var result = await _userService.Add(user);
            return Ok(result);
        }
    }
    
}
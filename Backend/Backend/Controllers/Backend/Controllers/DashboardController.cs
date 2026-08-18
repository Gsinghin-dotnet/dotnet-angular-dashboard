using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        [HttpGet("stats")]
        public async Task<IActionResult> GetStats()
        {
            var stats = new { TotalUsers = 1500, ActiveSessions = 45 };
            return Ok(stats);
        }
    }
}


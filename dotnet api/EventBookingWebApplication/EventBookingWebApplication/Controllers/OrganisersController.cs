using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EventBookingWebApplication.Models;

namespace EventBookingWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganisersController : ControllerBase
    {
        private readonly LetcheckContext _context;

        public OrganisersController(LetcheckContext context)
        {
            _context = context;
        }

        // GET: api/Organisers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Organiser>>> GetOrganisers()
        {
            return await _context.Organisers.ToListAsync();
        }

        // GET: api/Organisers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Organiser>> GetOrganiser(int id)
        {
            var organiser = await _context.Organisers.FindAsync(id);

            if (organiser == null)
            {
                return NotFound();
            }

            return organiser;
        }

        // PUT: api/Organisers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrganiser(int id, Organiser organiser)
        {
            if (id != organiser.OrganiserId)
            {
                return BadRequest();
            }

            _context.Entry(organiser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrganiserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Organisers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Organiser>> PostOrganiser(Organiser organiser)
        {
            _context.Organisers.Add(organiser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrganiser", new { id = organiser.OrganiserId }, organiser);
        }

        // DELETE: api/Organisers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrganiser(int id)
        {
            var organiser = await _context.Organisers.FindAsync(id);
            if (organiser == null)
            {
                return NotFound();
            }

            _context.Organisers.Remove(organiser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrganiserExists(int id)
        {
            return _context.Organisers.Any(e => e.OrganiserId == id);
        }
    }
}

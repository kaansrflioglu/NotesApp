using Microsoft.AspNetCore.Mvc;
using NotesApp.Application.Interfaces;
using NotesApp.Application.DTO;
using NotesApp.Domain.Entities;

namespace NotesApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INoteRepository _noteRepository;

        public NotesController(INoteRepository noteRepository)
        {
            _noteRepository = noteRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Note>>> GetAll()
        {
            var notes = await _noteRepository.GetAllAsync();
            return Ok(notes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Note>> GetById(Guid id)
        {
            var note = await _noteRepository.GetByIdAsync(id);
            if (note == null) return NotFound();
            return Ok(note);
        }

        [HttpPost]
        public async Task<ActionResult<Note>> Create(NoteCreateDto dto)
        {
            var note = new Note
            {
                Title = dto.Title,
                Content = dto.Content
            };

            await _noteRepository.AddAsync(note);
            return CreatedAtAction(nameof(GetById), new { id = note.Id }, note);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, NoteUpdateDto dto)
        {
            var note = await _noteRepository.GetByIdAsync(id);
            if (note == null) return NotFound();

            note.Title = dto.Title;
            note.Content = dto.Content;

            await _noteRepository.UpdateAsync(note);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _noteRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}
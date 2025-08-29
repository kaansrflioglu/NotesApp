using NotesApp.Domain.Entities;

namespace NotesApp.Application.Interfaces
{
    public interface INoteRepository
    {
        Task<Note> GetByIdAsync(Guid id);
        Task<IEnumerable<Note>> GetAllAsync();
        Task AddAsync(Note note);
        Task UpdateAsync(Note note);
        Task DeleteAsync(Guid id);
    }
}
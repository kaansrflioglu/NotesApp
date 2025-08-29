namespace NotesApp.Application.DTO
{
    public class NoteCreateDto
    {
        public required string Title { get; set; }
        public string? Content { get; set; }
    }
}
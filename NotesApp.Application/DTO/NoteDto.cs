namespace NotesApp.Application.DTO
{
    public class NoteDto
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public string? Content { get; set; }
    }
}
namespace NotesApp.Application.DTO
{
    public class NoteUpdateDto
    {
        public required string Title { get; set; }
        public string? Content { get; set; }
    }
}
namespace NotesApp.Application.Service
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string message) : base(message) { }
    }
}
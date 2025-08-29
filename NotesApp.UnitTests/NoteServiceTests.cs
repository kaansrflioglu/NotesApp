using NotesApp.Application.Interfaces;
using NotesApp.Domain.Entities;
using Moq;
using Xunit;

namespace NotesApp.UnitTests
{
    public class NoteRepositoryTests
    {
        [Fact]
        public async Task AddNote_CallsAddAsync()
        {
            var mockRepo = new Mock<INoteRepository>();
            var note = new Note { Title = "New Note", Content = "Content" };

            await mockRepo.Object.AddAsync(note);

            mockRepo.Verify(r => r.AddAsync(note), Times.Once);
        }

        [Fact]
        public async Task UpdateNote_CallsUpdateAsync()
        {
            var mockRepo = new Mock<INoteRepository>();
            var note = new Note { Id = Guid.NewGuid(), Title = "Update", Content = "Content" };

            await mockRepo.Object.UpdateAsync(note);

            mockRepo.Verify(r => r.UpdateAsync(note), Times.Once);
        }

        [Fact]
        public async Task GetNoteById_ReturnsNote()
        {
            var id = Guid.NewGuid();
            var mockRepo = new Mock<INoteRepository>();
            mockRepo.Setup(r => r.GetByIdAsync(id))
                    .ReturnsAsync(new Note { Id = id, Title = "Test", Content = "Content" });

            var note = await mockRepo.Object.GetByIdAsync(id);
            Assert.NotNull(note);
            Assert.Equal(id, note.Id);
        }

        [Fact]
        public async Task DeleteNote_CallsDeleteAsync()
        {
            var id = Guid.NewGuid();
            var mockRepo = new Mock<INoteRepository>();

            await mockRepo.Object.DeleteAsync(id);

            mockRepo.Verify(r => r.DeleteAsync(id), Times.Once);
        }
    }
}
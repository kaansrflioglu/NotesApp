echo [1] Frontend baslatiliyor...
cd NotesApp.Frontend

if not exist node_modules (
    echo node_modules bulunamadi, npm install calistiriliyor...
    npm install
)

npm start

# .NET/Angular Not Uygulaması
Bu proje, .NET (C#) ve Angular kullanılarak geliştirilmiş basit bir Not Alma uygulamasıdır. Kullanıcılar not ekleyebilir, silebilir, güncelleyebilir ve listeleyebilir. Angular ile frontend tarafında modern ve dinamik bir kullanıcı arayüzü sağlanırken, backend tarafında .NET ile katmanlı mimari ve SOLID prensipleri uygulanmıştır. Veriler, SQLite veritabanında saklanmakta olup, uygulama CRUD işlemlerini REST API üzerinden gerçekleştirmektedir. Ayrıca backend tarafında xUnit ile birim testler yazılarak uygulamanın güvenilirliği ve sürdürülebilirliği sağlanmıştır.

## Projede Kullanılan Teknolojiler
* Angular
* SQLite
* .NET 8
* Bootstrap 5
* Swagger

## Uygulama Hakkında
Bu uygulama, kullanıcıların notlar oluşturmasını, düzenlemesini ve silmesini sağlar. Kullanıcı dostu Angular arayüzü ve sağlam .NET backend ile notların yönetimini ve takibini kolaylaştırır.

## Özellikler:
* Yeni not eklenebilir.
* Not içeriği düzenlenebilir ve silinebilir.

## Gereksinimler ve Kurulum

**Gereksinimler**  
Sisteminizde Angular kurulu olmalıdır.  
`ng version`  

Sisteminizde .NET8 kurulu olmalıdır.  
`dotnet --list-runtimes`  

Projeyi derlemek ve bağımlılıkları yönetmek için Node Package Manager (NPM) gereklidir.  
`npm -v`  

**Kurulum**  
**1-** Proje dizinine gidin:  
`cd /path/to/your/NotesApp`  

**2-** İlk kullanımda veritabanı için migration işlemlerini yapmalısınız:  
`'migration_update.bat' dosyasını çalıştırın.`  

**3-** Backend'i çalıştırmanız gerekli:  
`'start_backend.bat' dosyasını çalıştırın.`  

**4-** Frontend'i çalıştırmanız gerekli:  
`'start_frontend.bat' dosyasını çalıştırın.`  
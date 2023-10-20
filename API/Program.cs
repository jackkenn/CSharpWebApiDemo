using API;
using API.RouteBuilders.Users;
using API.Services.Users;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<IUserService, UserService>();

builder.Services.AddDbContext<PortalDbContext>(options =>
{
    var path = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
    options.UseSqlite($"Data Source={Path.Join(path, "WebMinRouteGroup.db")}");
});

var app = builder.Build();

using var scope = app.Services.CreateScope();
var db = scope.ServiceProvider.GetService<PortalDbContext>();
db?.Database.MigrateAsync();

app.MapGroup("/user").MapUserGroup().WithTags("User Endpoints");

app.MapGet("/", () => "Hello World!");

app.Run();

public partial class Program { }
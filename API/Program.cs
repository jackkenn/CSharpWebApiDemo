using API;
using API.RouteBuilders.Users;
using API.Services.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<PortalDbContext>(options =>
{
    var path = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
    options.UseSqlite($"Data Source={Path.Join(path, "WebMinRouteGroup.db")}");
});

builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => origin == "http://localhost:4200")
    .AllowCredentials());

// app.UseAuthentication();
// app.UseAuthorization();

using var scope = app.Services.CreateScope();
var db = scope.ServiceProvider.GetService<PortalDbContext>();
db?.Database.MigrateAsync();

app.MapGroup("/user").MapUserGroup().WithTags("User Endpoints");

app.Run();

public partial class Program { }
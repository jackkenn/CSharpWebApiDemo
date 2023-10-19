using API;
using API.RouteBuilders.Users;
using API.Services.Users;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<IUserService, UserService>();

//var connectionString = builder.Configuration.GetConnectionString("Portal") ?? "Data Source=Portal.db";
builder.Services.AddDbContext<PortalDbContext>(options => options.UseInMemoryDatabase("PortalDb"));

var app = builder.Build();

app.MapGroup("/user").MapUserGroup().WithTags("User Endpoints");

app.MapGet("/", () => "Hello World!");

app.Run();

public partial class Program { }
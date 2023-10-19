using API;
using API.RouteBuilders.Users;
using API.Services.Users;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IUserService, UserService>();

var connectionString = builder.Configuration.GetConnectionString("Portal") ?? "Data Source=Portal.db";
builder.Services.AddSqlite<PortalDbContext>(connectionString);

var app = builder.Build();

app.MapGroup("/user").MapUserGroup().WithTags("User Endpoints");

app.MapGet("/", () => "Hello World!");

app.Run();

public partial class Program { }
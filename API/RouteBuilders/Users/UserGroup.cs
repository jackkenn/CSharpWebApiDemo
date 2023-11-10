using API.Entites.Users;
using API.Services.Users;
using Microsoft.AspNetCore.Http.HttpResults;

namespace API.RouteBuilders.Users;

public static class UserGroup {
    public static RouteGroupBuilder  MapUserGroup(this RouteGroupBuilder group) {
        group.MapGet("/", GetAllUsers).WithOpenApi();
        group.MapPost("/", CreateUser).WithOpenApi();
        group.MapGet("/{id}", GetUser).WithOpenApi();

        return group;
    }

    public static async Task<Results<Ok<UserDto>, NotFound>> GetUser(int id, IUserService userService) {
        var user = await userService.Find(id);
        return user != null ? TypedResults.Ok(new UserDto(user)) : TypedResults.NotFound();
    }

    public static async Task<Ok<List<UserDto>>> GetAllUsers(IUserService userService) {
        var users = await userService.GetAll();
        return TypedResults.Ok(users.Select(x => new UserDto(x)).ToList());
    }

    public static async Task<Created<UserDto>> CreateUser(UserDto userDto, IUserService userService) {
        User user = new User {
            Email = userDto.Email,
            FirstName = userDto.FirstName,
            LastName = userDto.LastName,
            Role = userDto.Role,
            PortalAccess = userDto.PortalAccess,
            InvitedStatus = userDto.InvitedStatus,
            LastLogin = userDto.LastLogin
        };

        await userService.Add(user);

        return TypedResults.Created($"/user/{user.Id}", new UserDto(user));
    }
}
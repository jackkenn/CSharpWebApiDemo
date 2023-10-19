using API.Entites.Users;
using API.Services.Users;
using Microsoft.AspNetCore.Http.HttpResults;

namespace API.RouteBuilders.Users;

public static class UserGroup {
    public static RouteGroupBuilder  MapUserGroup(this RouteGroupBuilder group) {
        return group;
    }

    public static async Task<Results<Ok<User>, NotFound>> GetUser(int id, IUserService userService) {
        var user = await userService.Find(id);
        return user != null ? TypedResults.Ok(user) : TypedResults.NotFound();
    }
}
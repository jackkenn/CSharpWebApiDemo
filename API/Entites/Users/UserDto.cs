using System.Text.Json.Serialization;

namespace API.Entites.Users;

public class UserDto {
    public UserDto(User user) {
        this.Email = user.Email;
        this.FirstName = user.FirstName;
        this.LastName = user.LastName;
        this.Role = user.Role;
        this.PortalAccess = user.PortalAccess;
        this.InvitedStatus = user.InvitedStatus;
        this.LastLogin = user.LastLogin;
    }

    [JsonConstructor]
    public UserDto(){}
    public string Email { get; set; } = string.Empty;
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Role { get; set; }
    public bool? PortalAccess { get; set; }
    public string? InvitedStatus { get; set; }
    public int? LastLogin { get; set; }
}
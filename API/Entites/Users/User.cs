namespace API.Entites.Users;

public class User {
    public int Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Role { get; set; }
    public bool? PortalAccess { get; set; }
    public string? InvitedStatus { get; set; }
    public int? LastLogin { get; set; }
}
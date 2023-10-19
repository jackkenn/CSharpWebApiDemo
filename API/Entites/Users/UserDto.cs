namespace API.Entites.Users;

public class UserDto {
    public UserDto(User user) {
        this.Email = user.Email;
        this.FirstName = user.FirstName;
        this.LastName = user.LastName;
        this.role = user.role;
    }
    public string Email { get; set; } = string.Empty;
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? role { get; set; }
}
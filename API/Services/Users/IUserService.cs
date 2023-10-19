using API.Entites.Users;

namespace API.Services.Users;

public interface IUserService {
    Task<List<User>> GetAll();
    ValueTask<User?> Find(int Id);
    Task Add(User user);

}
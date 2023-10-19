using API.Entites.Users;

namespace API.Services.Users;

public class UserService : IUserService
{
    private readonly UserGroupDbContext _dbContext;

    public UserService(UserGroupDbContext dbContext) {
        _dbContext = dbContext;
    }
    public Task Add(User user)
    { 
        throw new NotImplementedException();
    }

    public ValueTask<User?> Find(int Id)
    {
        throw new NotImplementedException();
    }

    public Task<List<User>> GetAll()
    {
        throw new NotImplementedException();
    }
}
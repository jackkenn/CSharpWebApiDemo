using API.Entites.Users;
using Microsoft.EntityFrameworkCore;

namespace API.Services.Users;

public class UserService : IUserService
{
    private readonly PortalDbContext _dbContext;

    public UserService(PortalDbContext dbContext) {
        _dbContext = dbContext;
    }
    public async Task Add(User user)
    { 
        await _dbContext.Users.AddAsync(user);
        await _dbContext.SaveChangesAsync();
    }

    public async ValueTask<User?> Find(int Id)
    {
        return await _dbContext.Users.FindAsync(Id);
    }

    public async Task<List<User>> GetAll()
    {
        return await _dbContext.Users.ToListAsync();
    }
}
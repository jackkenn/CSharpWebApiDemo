using API.Entites.Users;
using Microsoft.EntityFrameworkCore;

namespace API;

public class PortalDbContext : DbContext {
    public DbSet<User> Users => Set<User>();

    public PortalDbContext(DbContextOptions<PortalDbContext> options) : base(options) {
        
    }
}

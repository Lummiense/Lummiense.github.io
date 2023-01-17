using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api
{
    public class DataContext:DbContext
    {
        public System.Data.Entity.DbSet<UserEntity> Users { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
    }
}
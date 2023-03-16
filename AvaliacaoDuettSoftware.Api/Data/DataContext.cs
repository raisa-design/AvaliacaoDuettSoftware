using AvaliacaoDuettSoftware.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace AvaliacaoDuettSoftware.Api.Data
{
        public class DataContext : DbContext
        {
            public DataContext(DbContextOptions<DataContext> options) : base(options) { }

            public DbSet<Fruta> Frutas { get; set; }

        }
    
}

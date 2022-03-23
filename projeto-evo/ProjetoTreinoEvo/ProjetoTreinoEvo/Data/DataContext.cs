namespace ProjetoTreinoEvo.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> option) : base(option) { }

        public DbSet<Funcionario> Funcionarios { get; set; }

        public DbSet<Departamento> Departamentos { get; set; }

    }
}

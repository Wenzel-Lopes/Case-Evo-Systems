
namespace ProjetoTreinoEvo
{
    public class Funcionario
    {
        public int Id { get; set; }

        public string Nome { get; set; } = string.Empty;

        public string Foto { get; set; } = string.Empty;

        public long Rg { get; set; }

        public Departamento Departamento { get; set; }


    }
}

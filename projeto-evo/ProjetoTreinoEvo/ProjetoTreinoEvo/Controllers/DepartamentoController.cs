using Microsoft.AspNetCore.Mvc;

namespace ProjetoTreinoEvo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartamentoController : Controller

    {
        private readonly DataContext context;

        public DepartamentoController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Departamento>>> Get()
        {
            return Ok(await context.Departamentos.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Departamento>>> Get(int id)
        {
            var departamento = await context.Departamentos.FindAsync(id);
            if (departamento == null)
                return BadRequest("Departamento não encontrado.");
            return Ok(departamento);
        }

        [HttpPost]
        public async Task<ActionResult<List<Departamento>>> AddDepartamento(Departamento func)
        {
            await context.Departamentos.AddAsync(func);
            await context.SaveChangesAsync();

            return Ok(await context.Departamentos.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Departamento>>> UpdateDepartamento(Departamento request)
        {
            var dbdepartamento = await context.Departamentos.FindAsync(request.Id);
            if (dbdepartamento == null)
                return BadRequest("Departamento não encontrado.");

            dbdepartamento.Nome = request.Nome;
            dbdepartamento.Sigla = request.Sigla;

            await context.SaveChangesAsync();

            return Ok(await context.Departamentos.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Departamento>>> Delete(int id)
        {
            var funcionario_join = await context.Funcionarios.Include(c => c.Departamento).ToListAsync();
            funcionario_join = funcionario_join.FindAll(c => c.Departamento.Id == id);
            var dbdepartamento = await context.Departamentos.FindAsync(id);
            if (dbdepartamento == null)
            {
                return BadRequest("Departamento não encontrado.");
            }
            if (funcionario_join.Count() == 1) 
            {
                return BadRequest("Não pode deletar o departamento pois contém funcionarios");
            }
            context.Departamentos.Remove(dbdepartamento);
            await context.SaveChangesAsync();

            return Ok(await context.Departamentos.ToListAsync());
        }
    }
}

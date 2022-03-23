using Microsoft.AspNetCore.Mvc;

namespace ProjetoTreinoEvo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext context;

        public FuncionarioController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Funcionario>>> Get()
        {
            return Ok(await context.Funcionarios.Include(c => c.Departamento).ToListAsync());
        }

        [Route("getById")]
        [HttpGet]
        public async Task<ActionResult<List<Funcionario>>> Get([FromQuery] int id)
        {
            var funcionario_join = await context.Funcionarios.Include(c => c.Departamento).ToListAsync();

            funcionario_join = funcionario_join.FindAll(c => c.Departamento.Id == id);

            if (funcionario_join == null)
                return BadRequest("Funcionário não encontrado.");

            return Ok(funcionario_join);
        }

        [HttpPost]
        public async Task<ActionResult<List<FuncionarioDTO>>> AddFuncionario(FuncionarioDTO func)
        {
            var dto = await context.Departamentos.FirstOrDefaultAsync(d => d.Id == func.IdDepartamento);

            var novo_func = new Funcionario();

            novo_func.Id = func.Id;
            novo_func.Nome = func.Nome;
            novo_func.Foto = func.Foto;
            novo_func.Rg = func.Rg;
            novo_func.Departamento = dto;

            await context.Funcionarios.AddAsync(novo_func);
            await context.SaveChangesAsync();

            return Ok(await context.Funcionarios.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<FuncionarioDTO>>> UpdateFuncionario(FuncionarioDTO request)
        {
            var dto = await context.Departamentos.FirstOrDefaultAsync(d => d.Id == request.IdDepartamento);

            var dbfuncionario = await context.Funcionarios.FindAsync(request.Id);
            if (dbfuncionario == null)
                return BadRequest("Funcionário não encontrado.");

            dbfuncionario.Nome = request.Nome;
            dbfuncionario.Foto = request.Foto;
            dbfuncionario.Rg = request.Rg;
            dbfuncionario.Departamento = dto;

            await context.SaveChangesAsync();

            return Ok(await context.Funcionarios.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Funcionario>>> Delete(int id)
        {
            var dbfuncionario = await context.Funcionarios.FirstOrDefaultAsync(f => f.Id == id);
            if (dbfuncionario == null)
                return BadRequest("Funcionário não encontrado.");

            context.Funcionarios.Remove(dbfuncionario);
            await context.SaveChangesAsync();

            return Ok(await context.Funcionarios.ToListAsync());
        }
    }
}

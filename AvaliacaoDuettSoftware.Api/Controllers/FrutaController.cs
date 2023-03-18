using AvaliacaoDuettSoftware.Api.Data;
using AvaliacaoDuettSoftware.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace AvaliacaoDuettSoftware.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FrutaController : ControllerBase
    {

        private readonly DataContext _context;

        public FrutaController(DataContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public List<Fruta> Get()
        {

            var cb = _context.Frutas.ToList();
            return cb;

        }

        [HttpGet("{id}")]
        public Fruta Get(int id)
        {
            var cb = _context.Frutas.FirstOrDefault(x => x.Id == id);
            return cb;
        }

        [HttpGet("dividir/{id}")]
        public double Dividir(int id)
        {
            var fruta = _context.Frutas.FirstOrDefault(x => x.Id == id);
            return fruta.Dividir();
;        }

        [HttpGet("multiplicar/{id}")]
        public double Multiplicarr(int id)
        {
            var fruta = _context.Frutas.FirstOrDefault(x => x.Id == id);
            return fruta.Multiplicar();
            
        }


        [HttpPost]
        public void Post(string descricao, int valorA, int valorB)
        {
            var fruta = new Fruta(descricao, valorA, valorB);
            _context.Frutas.Add(fruta);
            _context.SaveChanges();
        }

        
    }
}

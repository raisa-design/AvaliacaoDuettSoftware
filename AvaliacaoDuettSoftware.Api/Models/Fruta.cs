namespace AvaliacaoDuettSoftware.Api.Models
{
    public class Fruta
    {
        public int Id { get; set; }

        public int ValorA { get; set; }
        public int ValorB { get; set; }

        public double Resultado { get; set; }

        public void Dividir()
        {
            Resultado = ValorA / ValorB;
        }

        public void Multiplicar()
        {
            Resultado = ValorA * ValorB;
        }
    }
}

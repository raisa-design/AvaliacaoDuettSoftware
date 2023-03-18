﻿namespace AvaliacaoDuettSoftware.Api.Models
{
    public class Fruta
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public int ValorA { get; set; }
        public int ValorB { get; set; }
        

        public Fruta(string descricao, int valorA, int valorB)
        {
            Descricao = descricao;
            ValorA = valorA;
            ValorB = valorB;
        }

        public double Dividir()
        {
            return ValorA / ValorB;
        }

        public double Multiplicar()
        {
            return ValorA * ValorB;
        }
    }
}

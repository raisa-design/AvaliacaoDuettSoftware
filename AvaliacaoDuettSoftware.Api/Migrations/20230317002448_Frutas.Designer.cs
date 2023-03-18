﻿// <auto-generated />
using AvaliacaoDuettSoftware.Api.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AvaliacaoDuettSoftware.Api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230317002448_Frutas")]
    partial class Frutas
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.0-preview.2.23128.3");

            modelBuilder.Entity("AvaliacaoDuettSoftware.Api.Models.Fruta", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<double>("Resultado")
                        .HasColumnType("REAL");

                    b.Property<int>("ValorA")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ValorB")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Frutas");
                });
#pragma warning restore 612, 618
        }
    }
}
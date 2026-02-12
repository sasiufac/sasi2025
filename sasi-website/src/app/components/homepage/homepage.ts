import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  eventInfo = {
    title: "II SEMANA ACADÊMICA DE SISTEMAS DE INFORMAÇÃO",
    subtitle: "II SASI",
    date: "22 de Fevereiro a 27 de Fevereiro de 2026",
    location: "UFAC - Acre, Brasil",
    description:
      "Conectando Inteligência, Segurança e Desenvolvimento.",
    highlights: [
      "Palestras Inspiradoras sobre temas como Inteligência Artificial, Engenharia de Software, Dados e Inovação.",
      "Minicursos Práticos para você aprender novas ferramentas e linguagens.",
      "Competições para desafiar suas habilidades em maratonas de programação e hackathons.",
      " Networking ao conhecer profissionais da área e expandir sua rede de contatos.",
    ],
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 

interface Palestrante {
  id: string;
  name: string;
  enterprise: string | null;
  photo?: string;
}

interface SessaoConfig {
  startTime: string;
  title: string;
  speakerIds?: string[]; 
  type: "palestra" | "workshop" | "pausa" | "abertura" | "encerramento";
  description?: string | null;
}

interface DiaEventoConfig {
  date: string;
  day: string;
  sessions: SessaoConfig[];
}

// --- Banco de Dados de Palestrantes (Configuração) ---
// Chave = ID único (facilita a associação na agenda)
const PALESTRANTES_DB: Record<string, Palestrante> = {
  'algorithms_school': {
    id: 'algorithms_school',
    name: "Algorithms School",
    enterprise: "Algorithms School",
    photo: "assets/speakers/algorithms_school.png",
  },
  'altemir': {
    id: 'altemir',
    name: "Altemir da Silva Braga",
    enterprise: "UFAC",
    photo: "assets/speakers/altemir.jpeg",
  },
  'aws': {
    id: 'aws',
    name: "Amazon Web Services",
    enterprise: "Amazon",
    photo: "assets/speakers/aws.png",
  },
  'ana_pavic': {
    id: 'ana_pavic',
    name: "Ana Beatriz Alvarez Mamani",
    enterprise: "PAVIC",
    photo: "assets/speakers/ana_pavic.jpeg",
  },
  'antonio_aneurao': {
    id: 'antonio_aneurao',
    name: "Antonio Amauri Anerão Junior",
    enterprise: "Ministério Público do Estado do Acre",
    photo: "assets/speakers/antonio_aneurao.jpg",
  },
  'bruna': {
    id: 'bruna',
    name: "Bruna Soares Silva",
    enterprise: "UFAC",
    photo: "assets/speakers/bruna.jpeg",
  },
  'bruno_mestanza': {
    id: 'bruno_mestanza',
    name: "Bruno Monteiro Mestanza",
    enterprise: "Rocketseat",
    photo: "assets/speakers/bruno_mestanza.jpeg",
  },
  'crist': {
    id: "crist",
    name: "Cristiane Fernandez Rodrigues",
    enterprise: null,
  },
  'leo-bandeira': {
    id: "leo-bandeira",
    name: "Leonardo da Silva de Oliveira Bandeira",
    enterprise: 'SEBRAE'
  },
  'keneder': {
    id: "keneder",
    name: "Keneder Jesus Marino",
    enterprise: ''
  },
  'rob': {
    id: "rob",
    name: "Robert Adan Costa Silva",
    enterprise: null,
  },
  'leo': {
    id: "leo",
    name: "Leonardo Dias da Silva",
    enterprise: null,
  },
  'carlos_junior': {
    id: 'carlos_junior',
    name: "Carlos Alberto de Jesus Junior",
    enterprise: "RNP",
    photo: "assets/speakers/carlos_junior.gif",
  },
  'christopher': {
    id: 'christopher',
    name: "Christopher Alexander Ochoa Villanueva",
    enterprise: "PAVIC",
    photo: "assets/speakers/christopher.png",
  },
  'clecio': {
    id: 'clecio',
    name: "Clécio Elias Silva e Silva",
    enterprise: "PAVIC",
    photo: "assets/speakers/CLECIO.jpeg",
  },
  'douglas': {
    id: 'douglas',
    name: "Douglas Moura Araújo",
    enterprise: "UFAC - Web Academy",
    photo: "assets/speakers/douglas.jpeg",
  },
  'elane_almeida': {
    id: 'elane_almeida',
    name: "Elane Cristine Almeida da Silva",
    enterprise: "",
    photo: "assets/speakers/elane_almeida.jpeg",
  },
  'franceline': {
    id: 'franceline',
    name: "Franceline Amorim dos Santos",
    enterprise: "IEEE",
    photo: "assets/speakers/francilene.jpg",
  },
  'francisco': {
    id: 'francisco',
    name: "Francisco da Silva Passos",
    enterprise: "",
    photo: "assets/speakers/francisco.jpg",
  },
  'gabriel_scanferla': {
    id: 'gabriel_scanferla',
    name: "Gabriel Garcia Scanferla",
    enterprise: "Motorola",
    photo: "assets/speakers/gabriel_scanferla.jpg",
  },
  'gilberto_lobo': {
    id: 'gilberto_lobo',
    name: "Gilberto Mendes da Silveira Lobo",
    enterprise: "",
    photo: "assets/speakers/gilberto_lobo.jpeg",
  },
  'gustavo_ferreti': {
    id: 'gustavo_ferreti',
    name: "Gustavo de Souza Ferreti",
    enterprise: "PAVIC",
    photo: "assets/speakers/gustavo_ferreti.gif",
  },
  'gustavo': {
    id: 'gustavo',
    name: "Gustavo Gonçalves Cardial",
    enterprise: "IFAC",
    photo: "assets/speakers/gustavo.jpg",
  },
  'hanrry': {
    id: 'hanrry',
    name: "Hanrry Luis Malaquias e Silva",
    enterprise: "",
    photo: "assets/speakers/hanrry.jpg",
  },
  'joceli': {
    id: 'joceli',
    name: "Joceli Franco da Anunciação",
    enterprise: "UFAC - Web Academy",
    photo: "assets/speakers/joceli.jpg",
  },
  'julio': {
    id: 'julio',
    name: "Julio Sousa Martins",
    enterprise: "PAVIC",
    photo: "assets/speakers/julio.png",
  },
  'laura': {
    id: 'laura',
    name: "Laura Costa Sarkis",
    enterprise: "UFAC",
    photo: "assets/speakers/laura.png",
  },
  'lorena': {
    id: 'lorena',
    name: "Lorena Yanet Tomaya",
    enterprise: "UFAC",
    photo: "assets/speakers/lorena.jpeg",
  },
  'lucas_hidelbrando': {
    id: 'lucas_hidelbrando',
    name: "Lucas Hidelbrando Costa Carvalho",
    enterprise: "PAVIC",
    photo: "assets/speakers/lucas_hidelbrando.jpeg",
  },
  'lucas': {
    id: 'lucas',
    name: "Lucas Lima Rodrigues",
    enterprise: "UFAC",
    photo: "assets/speakers/lucas.png",
  },
  'luis_antonio': {
    id: 'luis_antonio',
    name: "Luís Antônio Santiago",
    enterprise: "TECHBIZ",
    photo: "assets/speakers/luis_antonio.jpg",
  },
  'clara': {
    id: 'clara',
    name: "Maria Clara de Souza Barroso",
    enterprise: "UFAC",
    photo: "assets/speakers/clara.jpeg",
  },
  'mateus': {
    id: 'mateus',
    name: "Mateus de Souza Lopes",
    enterprise: "UFAC - Web Academy",
    photo: "assets/speakers/mateus.jpeg",
  },
  'mayara': {
    id: 'mayara',
    name: "Mayara Silva de Sousa",
    enterprise: "UFAC",
    photo: "assets/speakers/mayara.jpeg",
  },
  'mirelle': {
    id: 'mirelle',
    name: "Mirelle Campos Góis",
    enterprise: "UFAC",
    photo: "assets/speakers/mirelle.jpeg",
  },
  'nasserala': {
    id: 'nasserala',
    name: "Prof. André Luiz Nasserala Pires",
    enterprise: "UFAC",
    photo: "assets/speakers/nasserala.jpeg",
  },
  'cleuton': {
    id: 'cleuton',
    name: "Prof. Cleuton de Menezes Almeida",
    enterprise: "UFAC",
    photo: "assets/speakers/cleuton.jpeg",
  },
  'prof_rodrigo': {
    id: 'prof_rodrigo',
    name: "Prof. Rodrigo Silva Souza",
    enterprise: "IFAC",
    photo: "assets/speakers/prof_rodrigo.jpeg",
  },
  'rafael': {
    id: 'rafael',
    name: "Rafael Alves Braga",
    enterprise: "UFAC - Web Academy",
    photo: "assets/speakers/rafael.png",
  },
  'salomao': {
    id: 'salomao',
    name: "Salomão Machado Mafalda",
    enterprise: "",
    photo: "assets/speakers/salomao.jpeg",
  },
  'santiago': {
    id: 'santiago',
    name: "Santiago Rocha",
    enterprise: "",
    photo: "assets/speakers/santiago.jpg",
  },
  'thalisson': {
    id: 'thalisson',
    name: "Thalisson Henrique Frota",
    enterprise: "",
    photo: "assets/speakers/thalisson.jpg",
  },
  'thauanne': {
    id: 'thauanne',
    name: "Thauanne da Silva Paixão",
    enterprise: "PAVIC",
    photo: "assets/speakers/thauanne.jpeg",
  },
  'wiliam': {
    id: 'wiliam',
    name: "Wiliam Pedrosa Maia",
    enterprise: "",
    photo: "assets/speakers/wiliam.jpg",
  },
  'xadrez': {
    id: 'xadrez',
    name: "Federação Acreana de Xadrez",
    enterprise:"",
    photo: "assets/speakers/xadrez.jpg"
  }
};

// --- Configuração da Agenda ---
// Aqui você apenas referencia os IDs definidos acima
const AGENDA_DATA: DiaEventoConfig[] = [
  {
    date: "22/02/2026",
    day: "Domingo",
    sessions: [
      {
        startTime: "14:00 - 18:00",
        title: "1º Campeonato de Robôs Fura-Balão – Sistemas de Informação UFAC",
        speakerIds: [
          "nasserala"
        ],
        type: "workshop",
        description: "4 horas / Via Verde Shopping (30 Pessoas)"
      }
    ]
  },
  {
    date: "23/02/2026",
    day: "Segunda-feira",
    sessions: [
      {
        startTime: "7:30 - 8:00",
        title: "Credenciamento",
        speakerIds: [],
        type: "abertura",
        description: "30 min / Teatro Universitário (800 Pessoas)"
      },
      {
        startTime: "8:00 - 8:10",
        title: "Abertura",
        speakerIds: [
          "cleuton"
        ],
        type: "abertura",
        description: "10 min / Teatro Universitário"
      },
      {
        startTime: "8:10 - 9:40",
        title: "Inovação nas Universidades: Portas Abertas para o Futuro Mercado de Trabalho",
        speakerIds: [
          "francisco",
          "gilberto_lobo"
        ],
        type: "palestra",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "9:40 - 10:00",
        title: "Coffe Break",
        speakerIds: [],
        type: "pausa",
        description: "| 20 min"
      },
      {
        startTime: "10:00 - 11:30",
        title: "Uso Assertivo de LLMs: Valor Real em Meio ao Barulho",
        speakerIds: [
          "gabriel_scanferla"
        ],
        type: "palestra",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "11:30 - 11:45",
        title: "Intervalo",
        speakerIds: [],
        type: "pausa",
        description: "| 15 min"
      },
      {
        startTime: "11:45 - 13:15",
        title: "Tecnologias em IA Aplicadas à Sistemas de Informação",
        speakerIds: [
          "lucas_hidelbrando",
          "clecio",
          "ana_pavic",
          "thauanne"
        ],
        type: "palestra",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "7:00 - 14:00",
        title: "Caminhão do Hospital do Câncer; Lojinhas e exposições no pátio do Centro de Convenções; Palco (Atrações)       7 horas",
        speakerIds: [],
        type: "palestra",
        description: null
      },
      {
        startTime: "14:00 - 16:00",
        title: "Introdução à Engenharia de Requisitos",
        speakerIds: [
          "douglas",
        ],
        type: "palestra",
        description: "2 horas / WebAcademy Lab 2 (30 Pessoas)"
      },
      {
        startTime: "16:00 - 18:00",
        title: "Acessibilidade Web e Neurodivergentes",
        speakerIds: [
          "joceli"
        ],
        type: "palestra",
        description: "2 horas / WebAcademy Lab 2 (30 Pessoas)"
      },
      {
        startTime: "13:45 - 15:45",
        title: "Crie sua Primeira Aplicação: Introdução Prática ao Mundo Java",
        speakerIds: [
          "mateus",
          "rafael"
        ],
        type: "workshop",
        description: "2 horas / WebAcademy Lab 1 (30 Pessoas)"
      },
      {
        startTime: "16:00 - 18:00",
        title: "2° Torneio de Programação - SASI 2025",
        speakerIds: [
          "algorithms_school"
        ],
        type: "workshop",
        description: "2 horas / WebAcademy Lab 1 (30 Pessoas)"
      }
    ]
  },
  {
    date: "24/02/2026",
    day: "Terça-feira",
    sessions: [
      {
        startTime: "7:30 - 8:00",
        title: "Credenciamento",
        speakerIds: [],
        type: "abertura",
        description: "30 min / Teatro Universitário (800 Pessoas)"
      },
      {
        startTime: "8:00 - 9:40",
        title: "Inteligência Artificial no Poder Judiciário: Transformação Digital na Justiça do Acre",
        speakerIds: [
          "salomao"
        ],
        type: "palestra",
        description: "1:40 min / Teatro Universitário"
      },
      {
        startTime: "9:40 - 10:00",
        title: "Coffe Break",
        speakerIds: [],
        type: "pausa",
        description: "| 20 min"
      },
      {
        startTime: "10:00 - 11:30",
        title: "Design e Desenvolvimento Frontend com IA",
        speakerIds: [
          "bruno_mestanza"
        ],
        type: "palestra",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "11:30 - 11:45",
        title: "Intervalo",
        speakerIds: [],
        type: "pausa",
        description: "| 15 min"
      },
      {
        startTime: "11:45 - 13:15",
        title: "IA combina com a Psicologia?",
        speakerIds: [
          "hanrry"
        ],
        type: "palestra",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "14:00 - 18:00",
        title: "Introdução à escrita de textos científicos com Latex",
        speakerIds: [
          "lucas"
        ],
        type: "palestra",
        description: "4 horas / Lab 2 de SI (30 Pessoas)"
      },
      {
        startTime: "14:00 - 18:00",
        title: "Agentes de IA com Python",
        speakerIds: [
          "antonio_aneurao"
        ],
        type: "palestra",
        description: "4 horas / Nave Tech Lab1 (30 Pessoas)"
      },
      {
        startTime: "14:00 - 18:00",
        title: "Da Estatística à Inteligência Artificial: Conceitos e Aplicações com R",
        speakerIds: [
          "altemir",
          "lorena"
        ],
        type: "palestra",
        description: "4 horas / Lab Estatística (30 Pessoas)"
      },
      {
        startTime: "14:00 - 18:00",
        title: "1° Torneio de Xadrex - SASI 2025",
        speakerIds: ['xadrez'],
        type: "workshop",
        description: "4 horas / SebraeLab - Centro de Convivência (60 Pessoas)"
      }
    ]
  },
  {
    date: "25/02/2026",
    day: "Quarta-feira",
    sessions: [
      {
        startTime: "7:30 - 8:00",
        title: "Credenciamento",
        speakerIds: [],
        type: "abertura",
        description: "30 min / Teatro Universitário (800 Pessoas)"
      },
      {
        startTime: "8:00 - 9:40",
        title: "A Influência da FEM no Incentivo à Cultura Digital e Geek",
        speakerIds: [
          "elane_almeida"
        ],
        type: "palestra",
        description: "1:40 min / Teatro Universitário"
      },
      {
        startTime: "9:40 - 10:00",
        title: "Coffe Break",
        speakerIds: [],
        type: "pausa",
        description: "| 20 min"
      },
      {
        startTime: "10:00 - 11:30",
        title: "Segurança da Informação: um panorama geral",
        speakerIds: [
          "gustavo"
        ],
        type: "palestra",
        description: "@ | 1:30 min / Teatro Universitário"
      },
      {
        startTime: "11:30 - 11:45",
        title: "Intervalo",
        speakerIds: [],
        type: "pausa",
        description: "| 15 min"
      },
      {
        startTime: "11:45 - 13:15",
        title: "Mercado de trabalho de Cibersegurança e o Programa Hackers do Bem",
        speakerIds: ['leo','rob','crist'],
        type: "palestra",
        description: "| 1:30 min / Teatro Universitário"
      },
      {
        startTime: "14:00 - 16:00",
        title: "Como a Cibersegurança afeta o meu dia a dia – Especial Mulheres",
        speakerIds: ['leo','rob','crist'],
        type: "palestra",
        description: "2 horas / Online (60 Pessoas)"
      },
      {
        startTime: "13:20 - 17:20",
        title: "Robótica e Indústria 4.0: conceitos e aplicações",
        speakerIds: [
          "wiliam"
        ],
        type: "palestra",
        description: "4 horas / Lab 2 de SI (30 Pessoas)"
      },
      {
        startTime: "14:00 - 18:00",
        title: "Fundamentos de Segurança Web: Entendendo e Combatendo Ameaças Críticas",
        speakerIds: [
          "santiago"
        ],
        type: "palestra",
        description: "4 horas / Lab 1 de SI (30 Pessoas)"
      },
      {
        startTime: "14:00 - 18:00",
        title: "1° Desafio Capture The Flag (CTF) - SASI 2025",
        speakerIds: ['rnp'],
        type: "workshop",
        description: "4 horas / WebAcademy Lab 1 (25 Pessoas)"
      }
    ]
  },
  {
    date: "26/02/2026",
    day: "Quinta-feira",
    sessions: [
      {
        startTime: "7:30 - 8:00",
        title: "Credenciamento",
        speakerIds: [],
        type: "abertura",
        description: "30 min / Teatro Universitário (800 Pessoas)"
      },
      {
        startTime: "8:00 - 9:40",
        title: "Professor SEBRAE",
        speakerIds: ['leo-bandeira'],
        type: "palestra",
        description: "1:40 min / Teatro Universitário"
      },
      {
        startTime: "9:40 - 10:00",
        title: "Coffe Break",
        speakerIds: [],
        type: "pausa",
        description: "| 20 min"
      },
      {
        startTime: "10:00 - 11:30",
        title: "Criando Soluções com Tecnologia: Desenvolvimento de Aplicativo Mobile de Agenda de Estudos com MIT App Inventor",
        speakerIds: [
          "laura",
          "mayara",
          "mirelle",
          "bruna",
          "clara"
        ],
        type: "palestra",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "11:30 - 11:45",
        title: "CAFe: Benefícios para estudantes, professores e pesquisadores",
        speakerIds: [
          "carlos_junior"
        ],
        type: "palestra",
        description: "15 min / Teatro Universitário"
      },
      {
        startTime: "11:45 - 13:15",
        title: "Apresentação Unidade Móvel de Educação do Instituto de Ensino e Pesquisa",
        speakerIds: ['keneder'],
        type: "palestra",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "14:00 - 16:00",
        title: "Testes automatizados no frontend: muito além de telas",
        speakerIds: [
          "luis_antonio"
        ],
        type: "palestra",
        description: "4 horas / Nave Tech Lab1 (30 Pessoas)"
      },
      {
        startTime: "14:00 - 18:00",
        title: "Introdução ao Processamento de Imagem e Visão Computacional",
        speakerIds: [
          "clecio",
          "gustavo_ferreti",
          "julio",
          "christopher",
          "lucas_hidelbrando"
        ],
        type: "palestra",
        description: "4 horas / Lab 2 de SI (30 Pessoas)"
      },
      {
        startTime: "14:00 - 18:00",
        title: "Desenvolvimento de Software assistido por Inteligência Artificial Generativa: Teoria, Evidências e Prática.",
        speakerIds: [
          "thalisson"
        ],
        type: "palestra",
        description: "4 horas / Lab 1 de SI (30 Pessoas)"
      },
      {
        startTime: "14:00 - 16:00",
        title: "1ª Corrida AWS Deep Racer - SASI 2025",
        speakerIds: [
          "aws"
        ],
        type: "palestra",
        description: "2 horas / WebAcademy Lab 1 (25 Pessoas)"
      }
    ]
  },
  {
    date: "27/02/2026",
    day: "Sexta-feira",
    sessions: [
      {
        startTime: "7:30 - 8:00",
        title: "Credenciamento",
        speakerIds: [],
        type: "abertura",
        description: "30 min / Teatro Universitário (800 Pessoas)"
      },
      {
        startTime: "8:00 - 8:10",
        title: "Encerramento",
        speakerIds: [
          "cleuton"
        ],
        type: "encerramento",
        description: "10 min /"
      },
      {
        startTime: "8:10 - 9:40",
        title: "IEEE e WIE",
        speakerIds: [
          "franceline"
        ],
        type: "palestra",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "9:40 - 10:00",
        title: "Coffe Break",
        speakerIds: [],
        type: "pausa",
        description: "| 20 min"
      },
      {
        startTime: "11:30 - 11:45",
        title: "Intervalo",
        speakerIds: [],
        type: "pausa",
        description: "| 15 min"
      },
      {
        startTime: "11:45 - 13:15",
        title: "I Amostra de Estágios Obrigatórios do Curso de Sistemas de Informação",
        speakerIds: [
          "laura"
        ],
        type: "workshop",
        description: "1:30 min / Teatro Universitário"
      },
      {
        startTime: "14:00 - 18:00",
        title: "IA no Design Digital: o que muda no dia a dia do designer",
        speakerIds: [
          "prof_rodrigo"
        ],
        type: "palestra",
        description: "4 horas / Lab 1 de SI (30 Pessoas)"
      },
      {
        startTime: "14:00 - 18:00",
        title: "1ª Hackathon - SASI 2025",
        speakerIds: [],
        type: "workshop",
        description: "4 horas / Nave Tech Lab1 (30 Pessoas)"
      }
    ]
  }
];

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss'
})
export class Schedule {
  activeTab = "dia1";
  
  palestrantes: Palestrante[] = Object.values(PALESTRANTES_DB);
  programacao = AGENDA_DATA.map(dia => ({
    ...dia,
    sessions: dia.sessions.map(sessao => ({
      ...sessao,
      speaker: sessao.speakerIds 
        ? sessao.speakerIds.map(id => PALESTRANTES_DB[id]?.name).filter(Boolean) 
        : null
    }))
  }));

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getTipoClass(tipo: string): string {
    const classes = {
      palestra: "border-start border-primary border-4",
      workshop: "border-start border-warning border-4",
      pausa: "border-start border-secondary border-4",
      abertura: "border-start border-success border-4",
      encerramento: "border-start border-danger border-4",
    };
    return classes[tipo as keyof typeof classes] || "";
  }
}
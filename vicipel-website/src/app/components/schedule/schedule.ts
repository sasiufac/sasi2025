import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; // <-- Importação correta

// --- Interfaces de Definição (Modelo de Dados) ---
interface Palestrante {
  id: string;
  name: string;
  enterprise: string | null;
  photo?: string;
}

interface SessaoConfig {
  startTime: string;
  title: string;
  // Agora usamos IDs para associar, muito mais seguro que índices de array
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
  'pantoja': {
    id: 'pantoja',
    name: "Prof. Dr. José Pantoja",
    enterprise: "FMVZ UNESP-Botucatu",
    photo: "assets/speakers/pantoja.jpeg",
  },
  'jamilly': {
    id: 'jamilly',
    name: "Dra. Jamilly Wesgueber",
    enterprise: "CEO JW Consultoria",
    photo: "assets/speakers/jamilly.jpg",
  },
  'kolowyskys': {
    id: 'kolowyskys',
    name: "Kolowyskys Dantas",
    enterprise: "Presidente da Assoc. Brasileira de Buiatria",
    photo: "assets/speakers/kolo.jpg",
  },
  'nivaldo': {
    id: 'nivaldo',
    name: "Nivaldo Michetti",
    enterprise: "Produtor rural",
    photo: "assets/speakers/nivaldo.jpg"
  },
  'ernesto': {
    id: 'ernesto',
    name: "Med. Vet. Ernesto Coser",
    enterprise: "Gerente de Produtos da Datamars Trutest",
    photo: "assets/speakers/ernesto2.jpg"
  },
  'andre': {
    id: 'andre',
    name: "André Navarro",
    enterprise: "Gerente Distrital na Alta Genetics",
    photo: "assets/speakers/andre.jpg"
  },
  'felipe': {
    id: 'felipe',
    name: "Felipe Moura",
    enterprise: "Pastus Agrotecnologia",
    photo: "assets/speakers/felipe.jpg"
  },
  'jailson': {
    id: 'jailson',
    name: "Jaílson Barbosa",
    enterprise: "Analista SEBRAE-AC",
    photo: "assets/speakers/jailson.jpg"
  },
  'vadick': {
    id: 'vadick',
    name: "Prof. Vadick Fernandez Romero",
    enterprise: "Universidad Nacional Amazonica de Madre de Dios – UNAMAD - Peru",
    photo: "assets/speakers/vadick.jpg"
  },
  'juan': {
    id: 'juan',
    name: "Prof. Juan Tomás Bejarano Alvaréz",
    enterprise: "Universidad Nacional Amazonica de Madre de Dios – UNAMAD - Peru",
    photo: "assets/speakers/juan.jpg"
  },
  'maria': {
    id: 'maria',
    name: "Sra. Maria do Carmo",
    enterprise: "Produtora rural",
    photo: "assets/speakers/maria2.jpg"
  },
  'jean': {
    id: 'jean',
    name: "Med. Vet. Jean Paulo Gotelip",
    enterprise: "Norte Rebanho",
    photo: "assets/speakers/jean.jpg"
  },
  'mauricio': {
    id: 'mauricio',
    name: "Sr. Maurício Gomes",
    enterprise: "Produtor rural",
    photo: "assets/speakers/mauricio.jpg"
  },
  'andreza': {
    id: 'andreza',
    name: "Sra. Andreza Scherlosk",
    enterprise: "Produtora rural",
    photo: "assets/speakers/andrezza.jpg"
  },
  'rodrigo': {
    id: 'rodrigo',
    name: "Sr. Rodrigo Novaes",
    enterprise: "Produtor rural",
    photo: "assets/speakers/rodrigo.jpg"
  },
  'claudia': {
    id: 'claudia',
    name: "Claudia Stehling",
    enterprise: "Analista Técnica Sebrae Nacional",
    photo: undefined // Adicionei undefined para manter a consistência se não houver foto
  },
  'guilherme': {
    id: 'guilherme',
    name: "Zootec. Guilherme Mossa", 
    enterprise: "CNA",
    photo: undefined
  }
};

// --- Configuração da Agenda ---
// Aqui você apenas referencia os IDs definidos acima
const AGENDA_DATA: DiaEventoConfig[] = [
  {
    date: "30/10/2025",
    day: "Quinta-feira",
    sessions: [
      { startTime: "07:00 - 08:45", title: "Café da manhã e credenciamento", type: "abertura" },
      { startTime: "07:30 - 08:30", title: "Apresentação de resumos", type: "abertura" },
      { startTime: "08:30 - 09:30", title: "Abertura", type: "abertura" },
      { 
        startTime: "09:30 - 10:00", 
        title: "Educação Financeira e Sucessão Familiar", 
        speakerIds: ['jailson'], // Associação direta pelo ID
        type: "palestra" 
      },
      { 
        startTime: "10:00 - 10:30", 
        title: "Como impulsionar os pequenos negócios a partir da agregação de valor", 
        speakerIds: ['claudia'],
        type: "palestra" 
      },
      { 
        startTime: "10:30 - 11:20", 
        title: "Quais as vantagens e os desafios da utilização da transferência de embriões em gado leiteiro?", 
        speakerIds: ['jean'],
        type: "palestra" 
      },
      { 
        startTime: "11:20 - 12:10", 
        title: "PNCEBT - situação atual e desafios para evolução do status sanitário brasileiro", 
        speakerIds: ['guilherme'],
        type: "palestra" 
      },
      { startTime: "12:10 - 14:00", title: "Almoço", type: "pausa" },
      { 
        startTime: "14:00 - 15:00", 
        title: "Uso da cerca elétrica como ferramenta para otimizar a eficiência do pastejo", 
        speakerIds: ['ernesto'],
        type: "palestra" 
      },
      { 
        startTime: "15:00 - 16:10", 
        title: "Controle biológico de carrapatos com fungos", 
        speakerIds: ['vadick'],
        type: "workshop" 
      },
      { startTime: "16:10 - 16:30", title: "Milk Break", type: "pausa" },
      { 
        startTime: "16:30 - 17:30", 
        title: "Protocolos IATF na Pecuária Leiteira: utilização e benefícios", 
        speakerIds: ['juan'],
        type: "palestra" 
      },
    ]
  },
  {
    date: "31/10/2025",
    day: "Sexta-feira",
    sessions: [
      { startTime: "07:30 - 08:30", title: "Café da manhã e Apresentação de Resumos", type: "abertura" },
      { 
        startTime: "08:00 - 09:30", 
        title: "A Diferença entre Ver e Enxergar Seu Pasto: Estratégias de manejo", 
        speakerIds: ['felipe'],
        type: "palestra" 
      },
      { 
        startTime: "09:40 - 10:40", 
        title: "Manejos primordiais na criação de bezerras", 
        speakerIds: ['jamilly'],
        type: "palestra" 
      },
      { 
        startTime: "10:50 - 11:50", 
        title: "Atuação do Buiatra em Medicina Veterinária de Produção", 
        speakerIds: ['kolowyskys'],
        type: "palestra" 
      },
      { startTime: "12:00 - 14:00", title: "Almoço", type: "pausa" },
      { 
        startTime: "14:00 - 14:50", 
        title: "Indicadores Reprodutivos e a importância econômica em fazendas leiteiras", 
        speakerIds: ['andre'],
        type: "palestra" 
      },
      { 
        startTime: "15:00 - 16:00", 
        title: "Experiências do campo – Produtores de leite do Acre", 
        // Array de IDs torna muito fácil adicionar múltiplos palestrantes
        speakerIds: ['maria', 'mauricio', 'andreza', 'rodrigo'],
        type: "palestra" 
      },
      { startTime: "16:00 - 16:20", title: "Milk Break", type: "pausa" },
      { 
        startTime: "16:20 - 17:00", 
        title: "Mudando de Vida com a Produção de Leite", 
        speakerIds: ['nivaldo'],
        type: "palestra" 
      },
      { startTime: "17:30 - 18:00", title: "Premiação dos Melhores Resumos", type: "encerramento" }
    ]
  },
  {
    date: "01/11/2025",
    day: "Sábado",
    sessions: [
      { 
        startTime: "08:00 - 12:00", 
        title: "Dia de Campo - Rancho São Bento (Rio Branco)", 
        speakerIds: ['pantoja'],
        type: "abertura", 
        description: "Estações: Manejo de Pastagens; Reprodução; Qualidade de leite" 
      },
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
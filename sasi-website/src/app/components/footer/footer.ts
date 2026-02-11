import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Contato {
  type: string
  value: string
  icon: string
  link?:string
}

interface Patrocinador {
  name: string
  logo: string
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  contatos: Contato[] = [
    {
      type: "Email",
      value: "contato@vicipel.com",
      icon: "fas fa-envelope",
      link: "mailto:contato@vicipel.com"
    },

    {
      type: "Telefone",
      value: "(11) 98765-4321",
      icon: "fas fa-phone",
      link: "tel:+5511987654321"
    },

    {
      type: "WhatsApp",
      value: "(11) 98765-4321",
      icon: "fab fa-whatsapp",
      link: "https://wa.me/5511987654321"
    },

    {
      type: "Endereço",
      value: "Rodovia BR 364, Km 04, Distrito Industrial, Universidade Federal do Acre",
      icon: "fas fa-map-marker-alt"
    },
  ]
  
  patrocinadores: Patrocinador[] = [
    {
      name: "3D Acre",
      logo: "3d_acre.jpg"
    },
    {
      name: "Algorithms School",
      logo: "algorithms_school.png"
    },
    {
      name: "Amazon Web Services",
      logo: "Amazon_Web_Services_Logo.svg.png"
    },
    {
      name: "Artesanale",
      logo: "artesanale.jpeg"
    },
    {
      name: "CASI",
      logo: "casi.png"
    },
    {
      name: "Cidtech Informática",
      logo: "cidtec_preto.png"
    },
    {
      name: "Cookeria",
      logo: "cookeria.jpg"
    },
    {
      name: "IEEE",
      logo: "ieee_ufac.png"
    },
    {
      name: "Jupara",
      logo: "jupara.png"
    },
    {
      name: "Escola Superior de Redes",
      logo: "logo-esr-new-white-2.png"
    },
    {
      name: "Made In Acre",
      logo: "made_in_acre.png"
    },
    {
      name: "Motorola",
      logo: "motorola.png"
    },
    {
      name: "Piticas",
      logo: "piticas.png"
    },
    {
      name: "Proint",
      logo: "proint.jpg"
    },
    {
      name: "RNP",
      logo: "rnp.png"
    },
    {
      name: "Rocketseat",
      logo: "rocket.png"
    },
    {
      name: "SEBRAE",
      logo: "sebrae.png"
    },
    {
      name: "Soberanos",
      logo: "soberanos.jpeg"
    },
    {
      name: "Via Verde Shopping",
      logo: "via_verde_shopping.png"
    }
  ];

  redesSociais = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/vicipel"
    },

    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/company/vicipel"
    }
  ]

  patrocinadoresOuro: Patrocinador[] = [];
  patrocinadoresPrata: Patrocinador[] = [];
  patrocinadoresBronze: Patrocinador[] = [];
  patrocinadoresApoio: Patrocinador[] = [];

  constructor() {}


  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}

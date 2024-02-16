
// Header Data.......................
import homeImage from '../assets/home.png'

export const homeData =[
    {
        id: 1,
        img: homeImage,
        clip1:'<Luiz - ',               
        clip2:'Web',               
        clip3:'Developer/>',               
        info: 'Desenvolvedor Web com expertise em Front-End e conhecimento em Back-end, Database e Design Gráfico.',
        btnLink: '#Contact'
    }, 
];


// tech Data.......................
import techImage1 from '../assets/icones/tech1.png'
import techImage2 from '../assets/icones/tech2.png'
import techImage3 from '../assets/icones/tech3.png'
import techImage4 from '../assets/icones/tech4.png'
import techImage5 from '../assets/icones/tech5.png'
import techImage6 from '../assets/icones/tech6.png'
import techImage7 from '../assets/icones/tech7.png'
import techImage8 from '../assets/icones/tech8.png'
import techImage9 from '../assets/icones/tech9.png'
import techImage10 from '../assets/icones/tech10.png'
import techImage11 from '../assets/icones/tech11.png'
import techImage12 from '../assets/icones/tech12.png'
import techImage13 from '../assets/icones/tech13.png'
import techImage14 from '../assets/icones/tech14.png'

export const TechData =[
    {
        id: 1,
        img: techImage1,
    },
    {
        id: 2,
        img: techImage2,
    },
    {
        id: 3,
        img: techImage3,
    },
    {
        id: 4,
        img: techImage4,
    },
    {
        id: 5,
        img: techImage5,
    },
    {
        id: 6,
        img: techImage6,
    },
    {
        id: 7,
        img: techImage7,
    },
    {
        id: 8,
        img: techImage8,
    },
    {
        id: 9,
        img: techImage9,
    },
    {
        id: 10,
        img: techImage10,
    },
    {
        id: 11,
        img: techImage11,
    },
    {
        id: 12,
        img: techImage12,
    },
    {
        id: 13,
        img: techImage13,
    },
    {
        id: 14,
        img: techImage14,
    },
]

// AboutData Data.......................
import aboutImage from '../assets/about.png'
import CV from '../assets/CV.pdf'

export const aboutData =[
    {
        id: 1,
        img: aboutImage, 
        aboutInfo: 'Atuei como designer gráfico, aprimorando minhas habilidades na concepção de interfaces agradáveis e intuitivas. Recentemente, fiz uma transição em minha carreira para o desenvolvimento web Front-end, focado principalmente em e-commerce, web apps, web sites e landing pages. Possuo expertise em React, JavaScript ES6, HTML, CSS, SASS, WordPress e Bootstrap.' ,        
        btnLink: CV,    
    },
];


// Services Data.......................
import service1 from '../assets/s1.png'
import service2 from '../assets/s2.png'
import service3 from '../assets/s3.png'
import service4 from '../assets/s4.png'
import service5 from '../assets/s5.png'
import service6 from '../assets/s6.png'

import { TbDeviceGamepad } from "react-icons/tb";




export const servicesData =[
    {
        id: 1,
        img: service1,
        serviceName: 'Front End',
        serviceInfo: 'Minha experiência central reside no Front End, com habilidades consolidadas em tecnologias como JavaScript, React, HTML, CSS, SASS, Vite e Tailwind, entre outras.'        
    },
    {
        id: 2,
        img: service2, 
        serviceName: 'Back End',
        serviceInfo: 'Demonstro proficiência em tecnologias Back End, abrangendo Node.js, PHP, Python e Java.'        
    },
    {
        id: 3,
        img: service3,    
        serviceName: 'Banco de Dados ',
        serviceInfo: 'Adquiri conhecimento prático na criação e administração de bancos de dados SQL e MySQL.'     
    },   
    {
        id: 4,
        img: service4,    
        serviceName: 'Web Design',
        serviceInfo: 'Tenho experiência abrangente em Web Design, desde a concepção do protótipo até a implementação final da página, utilizando HTML e Wordpress.'     
    },   
    {
        id: 5,
        img: service5,    
        serviceName: 'Desenvolvimento de Jogos',
        serviceInfo: 'Possuo expertise em desenvolvimento de jogos, utilizando ferramentas como Construct 3 e Unity.'     
    },   
    {
        id: 6,
        img: service6,    
        serviceName: 'Trabalho em Equipe',
        serviceInfo: 'Ao longo da minha jornada profissional, trabalhei em equipe de forma colaborativa, empregando metodologias ágeis como Scrum e Kanban.'     
    },   
];


// Portfolio Data.......................
import portfolioImg1 from '../assets/p1.png'
import portfolioImg2 from '../assets/p2.png'
import portfolioImg3 from '../assets/p3.png'
import portfolioImg4 from '../assets/p4.png'
import portfolioImg5 from '../assets/p5.png'
import portfolioImg6 from '../assets/p6.png'



export const portfolioData =[
    {
        id: 1,
        img: portfolioImg1,
        name: 'Calculadora IMC',
        info: 'Desenvolvi uma calculadora de Índice de Massa Corporal (IMC) utilizando JavaScript, TypeScript, React, Tailwind e Vite.',        
        viewLink: 'https://calculadora-imc-theta-dusky.vercel.app/',
        gitLink: 'https://github.com/Lz-Rod/Calculadora_IMC_react'
    },
    {
        id: 2,
        img: portfolioImg2,
        name: 'App Calculadora Matemática',
        info: 'Criei um aplicativo web de calculadora abrangente, utilizando JavaScript e React.',        
        viewLink: 'https://calculator-tan-gamma.vercel.app/',
        gitLink: 'https://github.com/Lz-Rod/App_calculator_react?tab=readme-ov-file'
    },
    {
        id: 3,
        img: portfolioImg3,
        name: 'App Lista de Compras',
        info: 'Desenvolvi um aplicativo web de lista de compras básica, implementado com JavaScript e React.',        
        viewLink: 'https://lista-de-compras-seven-rust.vercel.app/',
        gitLink: 'https://github.com/Lz-Rod/App_lista_de_compras_react'
    },
    {
        id: 4,
        img: portfolioImg4,
        name: 'Snake Game',
        info: 'Programei o jogo inspirado no clássico da Nokia, o "Snake", utilizando JavaScript.',        
        viewLink: 'https://y-beta-dusky.vercel.app/',
        gitLink: 'https://github.com/Lz-Rod/game_snake_js'
    },  
    {
        id: 5,
        img: portfolioImg5,
        name: 'Sistema de Vendas',
        info: 'Elaborei um sistema completo de cadastro de vendas e vendedores utilizando PHP e MySQL. Este sistema permite o cadastro, visualização, edição e exclusão de dados tanto dos vendedores quanto das vendas.',        
        viewLink: '#',
        gitLink: 'https://github.com/Lz-Rod/crud_vendas_php?tab=readme-ov-file'
    },  
    {
        id: 6,
        img: portfolioImg6,
        name: 'Sistema de Estacionamento',
        info: 'Desenvolvi um sistema de gestão para estacionamento utilizando JavaScript, HTML e Bootstrap. Este sistema permite o cadastro e exclusão de dados relativos ao modelo do veículo, placa e horário de entrada.',        
        viewLink: '#',
        gitLink: 'https://github.com/Lz-Rod/estacionamento_js?tab=readme-ov-file'
    },  
];



// HappyClinte Data.......................
export const happyclientData=[
    {
        id: 1,
        topic: '15 National',        
        info: 'Awards',        
    },   
    {
        id: 2,
        topic: '1500+ Happy',        
        info: 'Customers',        
    },   
    {
        id: 3,
        topic: '2700+ Lovely',        
        info: 'Feedbacks',        
    },   
];

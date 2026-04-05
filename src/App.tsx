import { Github, Linkedin, Mail, ExternalLink, MessageCircle } from 'lucide-react';

const previewImages = import.meta.glob('./componets/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const getPreviewImageById = (id: number): string | undefined => {
  const exactPngPath = `./componets/id ${id}.png`;

  if (previewImages[exactPngPath]) {
    return previewImages[exactPngPath];
  }

  const fallbackEntry = Object.entries(previewImages).find(([path]) =>
    path.includes(`id ${id}.`)
  );

  return fallbackEntry?.[1];
};

function App() {
  const projects = [
    {
      id: 1,
      title: 'Landing Page para Nutricionistas com Foco em Captação de Pacientes',
      description: 'Página desenvolvida para nutricionistas divulgarem seus serviços, com estrutura otimizada para conversão de novos pacientes e apresentação de planos alimentares.',
      technologies: ['TypeScript', 'CSS'],
      link: 'https://nutri-o-performance-hub.vercel.app/'
    },
    {
      id: 2,
      title: 'Landing Page para Empresas de Içamento e Soluções Industriais',
      description: 'Plataforma institucional para apresentação de equipamentos, serviços de içamento e diferenciais técnicos, com foco em geração de leads B2B.',
      technologies: ['TypeScript', 'CSS'],
      link: 'https://brtitan-trusted-foundations.vercel.app/'
    },
    {
      id: 3,
      title: 'Landing Page para Clínica de Estética e Procedimentos Avançados',
      description: 'Página moderna para exibição de tratamentos estéticos, equipe profissional e resultados, com foco em agendamentos e autoridade da marca.',
      technologies: ['TypeScript', 'CSS'],
      link: 'https://saraiva-s-website-refresh.vercel.app/'
    },
    {
      id: 4,
      title: 'Landing Page para Escritório de Advocacia Especializado',
      description: 'Página institucional voltada para apresentação de áreas de atuação, equipe jurídica e captação de novos clientes com comunicação profissional e confiável.',
      technologies: ['TypeScript', 'CSS'],
      link: 'https://j-ribeiro-adv.vercel.app/'
    },

      {
      id: 5,
      title: 'Landing Page para Programas de Emagrecimento e Transformação Física',
      description: 'Página estratégica para divulgação de serviços de emagrecimento, com destaque para resultados, depoimentos e conversão de leads.',
      technologies: ['TypeScript', 'CSS'],
      link: 'https://transformation-hub-six.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-blue-900/30 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex gap-6">
            <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      <section id="sobre" className="scroll-mt-24 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Olá, meu nome é Pedro
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Sou Desenvolvedor Full Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais.
              Com experiência em desenvolvimento web moderno, transformo ideias em soluções
              técnicas elegantes e eficientes. Especializado em React, TypeScript, Node.js
              e arquitetura de sistemas escaláveis.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/PhNishimura"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-henrique-nishimura-bachaalani-8b721221a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:pedrobachaalani1701@gmail.com"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="scroll-mt-24 py-20 px-6 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-blue-900/30 rounded-xl p-6 hover:border-blue-600/50 transition-all hover:transform hover:scale-105 duration-300"
              >
                {getPreviewImageById(project.id) && (
                  <img
                    src={getPreviewImageById(project.id)}
                    alt={`Pré-visualização do projeto ${project.title}`}
                    className="w-full h-48 object-cover rounded-lg mb-5 border border-blue-900/40"
                    loading="lazy"
                  />
                )}
                <h3 className="text-2xl font-bold mb-3 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver projeto <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas
            ou oportunidades de fazer parte da sua visão.
          </p>
          <a
            href="https://wa.me/5511944748578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-blue-900/30">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2026 Portfolio. Desenvolvido com React e Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

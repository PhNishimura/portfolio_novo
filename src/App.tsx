import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Sistema de E-commerce',
      description: 'Plataforma completa de vendas online com carrinho, pagamentos e dashboard administrativo.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'App de Gestão de Tarefas',
      description: 'Aplicativo de produtividade com colaboração em tempo real e integração com calendário.',
      technologies: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'API RESTful de Analytics',
      description: 'API escalável para processamento e análise de dados com documentação completa.',
      technologies: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
      link: '#'
    },
    {
      id: 4,
      title: 'Dashboard de Métricas',
      description: 'Interface interativa para visualização de dados em tempo real com gráficos dinâmicos.',
      technologies: ['React', 'D3.js', 'WebSocket', 'Express'],
      link: '#'
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

      <section id="sobre" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Olá, eu sou
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Desenvolvedor Full Stack
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contato@example.com"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="py-20 px-6 bg-gradient-to-b from-black to-blue-950/20">
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
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver projeto <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas
            ou oportunidades de fazer parte da sua visão.
          </p>
          <a
            href="mailto:contato@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
          >
            <Mail className="w-5 h-5" />
            Entre em contato
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-blue-900/30">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Portfolio. Desenvolvido com React e Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tema, setTema] = useState(
    () => localStorage.getItem("tema") || "escuro",
  );
  const [idioma, setIdioma] = useState(
    () => localStorage.getItem("idioma") || "pt-BR",
  );

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    document.documentElement.lang = idioma;
  }, [idioma, tema]);

  const traducoes = {
    "pt-BR": {
      home: "Início",
      about: "Sobre",
      technologies: "Tecnologias",
      projects: "Projetos",
      contacts: "Contatos",
      aboutSubtitle: "Saiba um pouco sobre mim",
      frontend: "Front-End",
      backend: "Back-End",
      database: "Banco de Dados",
      tool: "Ferramenta",
      projectsIntro:
        "Alguns trabalhos que representam minha evolução como desenvolvedor.",
      projectStatus: "Em desenvolvimento",
      portfolioDescription:
        "Site responsivo para apresentar minha trajetória, tecnologias e projetos.",
      viewCode: "Ver código",
      contactIntro: "Vamos criar algo incrível juntos?",
      contactTitle: "Aberto a novas oportunidades",
      contactDescription:
        "Conheça meus trabalhos e acompanhe minha evolução profissional.",
      downloadCv: "Baixar Currículo",
      portfolioName: "Portfólio pessoal",
    },
    en: {
      home: "Home",
      about: "About",
      technologies: "Technologies",
      projects: "Projects",
      contacts: "Contact",
      aboutSubtitle: "Get to know me a little",
      frontend: "Front-End",
      backend: "Back-End",
      database: "Database",
      tool: "Tool",
      projectsIntro:
        "A selection of work that reflects my growth as a developer.",
      projectStatus: "In development",
      portfolioDescription:
        "A responsive website that presents my journey, technologies, and projects.",
      viewCode: "View code",
      contactIntro: "Let's build something great together.",
      contactTitle: "Open to new opportunities",
      contactDescription: "Explore my work and follow my professional growth.",
      downloadCv: "Download Curriculum",
      portfolioName: "Personal portfolio",
    },
  };
  const t = traducoes[idioma];
  const alternarTema = () => {
    const novoTema = tema === "escuro" ? "claro" : "escuro";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
  };
  const alternarIdioma = () => {
    const novoIdioma = idioma === "pt-BR" ? "en" : "pt-BR";
    setIdioma(novoIdioma);
    localStorage.setItem("idioma", novoIdioma);
  };

  return (
    <div data-tema={tema}>
      <div id="progress" />
      <header id="cabecario">
        <button
          id="tema"
          type="button"
          aria-label={
            tema === "claro" ? "Ativar tema escuro" : "Ativar tema claro"
          }
          title={tema === "claro" ? "Ativar tema escuro" : "Ativar tema claro"}
          onClick={alternarTema}
        >
          <span className="tema-icone" aria-hidden="true">
            {tema === "claro" ? "☾" : "☀"}
          </span>
        </button>
        <nav>
          <ul>
            <li>
              <a href="#main">{t.home}</a>
            </li>
            <li>
              <a href="#sobre">{t.about}</a>
            </li>
            <li>
              <a href="#tecnologias">{t.technologies}</a>
            </li>
            <li>
              <a href="#projetos">{t.projects}</a>
            </li>
            <li>
              <a href="#contatos">{t.contacts}</a>
            </li>
          </ul>
        </nav>
        <button
          id="idioma"
          type="button"
          aria-label={
            idioma === "en" ? "Mudar para português" : "Change to English"
          }
          title={idioma === "en" ? "Mudar para português" : "Change to English"}
          onClick={alternarIdioma}
        >
          {idioma === "en" ? "EN" : "BR"}
        </button>
      </header>

      <main>
        <section id="main">
          <img
            id="foto-de-perfil"
            src="/Assents/foto.jpeg"
            alt="foto de perfil"
          />
          <div className="msg-principal">
            <h1 id="nome">
              &lt; Douglas Vinícius <strong className="destaque">/</strong>&gt;
              <br />
            </h1>
            <h1>
              <strong className="destaque" id="cargo">
                Full Stack Developer <br />
                Data Enginner
              </strong>
            </h1>
            <br />
            <p>
              Estudante de Ciência da Computação <br />
              focado em{" "}
              <strong className="destaque">
                Desenvolvimento de Software
              </strong>{" "}
              e<br />
              <strong className="destaque">Engenharia de Dados.</strong>
            </p>
            <div id="curriculo">
              <a href="/Assents/Curr%C3%ADculo.pdf" download="Currículo.pdf">
                {t.downloadCv}
              </a>
            </div>
          </div>
        </section>
        <section id="sobre">
          <div>
            <h2 className="topicos">{t.about}</h2>
            <h3 className="sub-titulo">{t.aboutSubtitle}</h3>
            <p className="paragrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              veniam sed dolorum. Ipsa dignissimos voluptatibus, explicabo,
              numquam iste aspernatur neque magnam quibusdam amet culpa nobis
              architecto dolores ab ipsam vel?
            </p>
            <p className="paragrafo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              beatae ipsum quo impedit similique ea sunt consequatur incidunt
              dolorem fugit nihil molestias quod doloremque architecto
              voluptatibus voluptatem magni ab animi!
            </p>
          </div>
        </section>
        <section id="tecnologias">
          <div>
            <h2 className="topicos">{t.technologies}</h2>
            <div className="tecnologias-cards">
              {[
                ["html5-plain", "HTML", t.frontend],
                ["css3-plain", "CSS", t.frontend],
                ["javascript-plain", "JavaScript", t.frontend],
                ["react-original", "React", t.frontend],
                ["python-plain", "Python", t.backend],
                ["java-plain", "Java", t.backend],
                ["mysql-plain", "MySQL", t.database],
                ["postgresql-plain", "PostgreSQL", t.database],
                ["vscode-plain", "VS Code", t.tool],
                ["intellij-plain", "IntelliJ IDEA", t.tool],
                ["git-plain", "Git", t.tool],
                ["github-original", "GitHub", t.tool],
              ].map(([icone, nome, tipo]) => (
                <article className="tecnologia-card" key={nome}>
                  <i className={`devicon-${icone}`} />
                  <h3>{nome}</h3>
                  <span>{tipo}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="projetos">
          <div className="secao-conteudo">
            <h2 className="topicos">{t.projects}</h2>
            <p className="secao-introducao">{t.projectsIntro}</p>
            <div className="projetos-grid">
              <article className="projeto-card">
                <div className="projeto-icone" aria-hidden="true">
                  &lt;/&gt;
                </div>
                <div className="projeto-conteudo">
                  <span className="projeto-status">{t.projectStatus}</span>
                  <h3>{t.portfolioName}</h3>
                  <p>{t.portfolioDescription}</p>
                  <ul
                    className="projeto-tags"
                    aria-label="Tecnologias utilizadas"
                  >
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                  <a
                    className="botao-link"
                    href="https://github.com/Douglas-ViniciusBR/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{t.viewCode}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="contatos">
          <div className="secao-conteudo">
            <h2 className="topicos">{t.contacts}</h2>
            <p className="secao-introducao">{t.contactIntro}</p>
            <div className="contato-painel">
              <div>
                <h3>{t.contactTitle}</h3>
                <p>{t.contactDescription}</p>
              </div>
              <div className="contato-acoes">
                <a
                  className="contato-link github"
                  href="https://github.com/Douglas-ViniciusBR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github" aria-hidden="true" />
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="contato-link linkedin"
                  href="https://www.linkedin.com/in/douglas-v%C3%ADcius-635475327/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-linkedin" aria-hidden="true" />
                  <span>Linkedin</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="contato-link instagram"
                  href="https://www.instagram.com/odouglasxjp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-instagram" aria-hidden="true" />
                  <span>Instagram</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="contato-link Email"
                  href="mailto:vdouglas893@gmail.com"
                >
                  <ion-icon name="mail-outline" aria-hidden="true" />
                  <span>Email</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="rodape">
        <p className="paragrafro">&copy; 2026 - Douglas Vinícius</p>
      </footer>
    </div>
  );
}

export default App;

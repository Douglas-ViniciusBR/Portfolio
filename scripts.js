const botaoTema = document.querySelector("#tema");
      const iconeTema = botaoTema.querySelector(".tema-icone");
      const botaoIdioma = document.querySelector("#idioma");
      const traducoes = {
        "pt-BR": {
          home: "Home",
          about: "Sobre",
          technologies: "Tecnologias",
          projects: "Projetos",
          contacts: "Contatos",
          aboutSubtitle: "Saiba um pouco sobre mim",
          frontend: "Front-End",
          backend: "Back-End",
          database: "Banco de Dados",
          tool: "Ferramenta",
          projectsIntro: "Alguns trabalhos que representam minha evolução como desenvolvedor.",
          projectStatus: "Em desenvolvimento",
          portfolioDescription: "Site responsivo para apresentar minha trajetória, tecnologias e projetos.",
          viewCode: "Ver código",
          contactIntro: "Vamos criar algo incrível juntos?",
          contactTitle: "Aberto a novas oportunidades",
          contactDescription: "Conheça meus trabalhos e acompanhe minha evolução profissional.",
          downloadCv: "Baixar currículo",
          portfolioName: "Portfólio pessoal"
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
          projectsIntro: "A selection of work that reflects my growth as a developer.",
          projectStatus: "In development",
          portfolioDescription: "A responsive website that presents my journey, technologies, and projects.",
          viewCode: "View code",
          contactIntro: "Let's build something great together.",
          contactTitle: "Open to new opportunities",
          contactDescription: "Explore my work and follow my professional growth.",
          downloadCv: "Download résumé",
          portfolioName: "Personal portfolio"
        }
      };

      function atualizarIdioma(idioma) {
        document.documentElement.lang = idioma;
        document.querySelectorAll("[data-i18n]").forEach((elemento) => {
          elemento.textContent = traducoes[idioma][elemento.dataset.i18n];
        });
        const idiomaEmIngles = idioma === "en";
        botaoIdioma.textContent = idiomaEmIngles ? "EN" : "BR";
        botaoIdioma.setAttribute("aria-label", idiomaEmIngles ? "Mudar para português" : "Change to English");
        botaoIdioma.title = botaoIdioma.getAttribute("aria-label");
      }

      function atualizarTema(tema) {
        const temaClaro = tema === "claro";
        document.documentElement.dataset.tema = tema;
        iconeTema.textContent = temaClaro ? "☾" : "☀";
        botaoTema.setAttribute("aria-label", temaClaro ? "Ativar tema escuro" : "Ativar tema claro");
        botaoTema.title = botaoTema.getAttribute("aria-label");
      }

      atualizarTema(localStorage.getItem("tema") || "escuro");

      botaoTema.addEventListener("click", () => {
        const novoTema = document.documentElement.dataset.tema === "escuro" ? "claro" : "escuro";
        localStorage.setItem("tema", novoTema);
        atualizarTema(novoTema);
      });

      atualizarIdioma(localStorage.getItem("idioma") || "pt-BR");
      botaoIdioma.addEventListener("click", () => {
        const novoIdioma = document.documentElement.lang === "pt-BR" ? "en" : "pt-BR";
        localStorage.setItem("idioma", novoIdioma);
        atualizarIdioma(novoIdioma);
      });

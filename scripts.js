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
          tool: "Ferramenta"
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
          tool: "Tool"
        }
      };

      function atualizarIdioma(idioma) {
        document.documentElement.lang = idioma;
        document.querySelectorAll("[data-i18n]").forEach((elemento) => {
          elemento.textContent = traducoes[idioma][elemento.dataset.i18n];
        });
        const idiomaEmIngles = idioma === "en";
        botaoIdioma.textContent = idiomaEmIngles ? "EUA" : "BR";
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

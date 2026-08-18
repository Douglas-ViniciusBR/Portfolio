const botaoTema = document.querySelector("#tema");
      const iconeTema = botaoTema.querySelector(".tema-icone");
      const seletorIdioma = document.querySelector("#idioma");
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
        seletorIdioma.value = idioma;
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
      seletorIdioma.addEventListener("change", (evento) => {
        localStorage.setItem("idioma", evento.target.value);
        atualizarIdioma(evento.target.value);
      });
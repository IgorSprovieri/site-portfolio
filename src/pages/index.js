import { MenuButton } from "@/components";

export default function Home() {
  return (
    <>
      <header class="c-header">
        <menu class="c-menu">
          <MenuButton scrollTo={"section-home"}>Home</MenuButton>
          <MenuButton scrollTo={"section-abilities"}>Habilidades</MenuButton>
          <MenuButton scrollTo={"section-portfolio"}>Portfólio</MenuButton>
          <MenuButton scrollTo={"section-experiences"}>Experiências</MenuButton>
          <MenuButton scrollTo={"section-frag-components"}>
            Frag Components
          </MenuButton>
        </menu>
        <div class="c-social-icons">
          <a onclick="openNewTab('https://github.com/IgorSprovieri')">
            <img
              class="c-social-icons__image"
              src="/Github.png"
              alt="Meu GitHub"
            />
          </a>
          <a onclick="openNewTab('https://www.linkedin.com/in/igor-sprovieri-768b09196/')">
            <img class="c-social-icons__image" src="/Linkedin.png" alt="" />
          </a>
        </div>
      </header>
      <main class="c-main" name="section-home">
        <section class="c-section">
          <div class="c-section__container c-section__container">
            <div class="c-my-description">
              <h1 class="TypeWriter c-h1 c-h1--type-witter">
                Olá, Muito prazer! Sou o Igor Sprovieri
              </h1>
              <p class="c-p">
                Programador desde 2013, comecei desenvolvendo jogos com a Unity,
                onde em 2020 eu abri meu estúdio de jogos e até 2022 desenvolvi
                14 projetos em equipe, autorais e de terceiros. Também fui
                redator por mais de um ano do site crieseusjogos.com.br. Após
                esse período comecei a me dedicar ao desenvolvimento web e hoje
                atuo como desenvolvedor fullstack com React, Next, Typescript e
                Node.
              </p>
              <a onclick="openNewTab('https://wa.me/message/AQZS3NOUQULWL1')">
                <button class="c-button">ENTRAR EM CONTATO</button>
              </a>
            </div>
            <img class="c-my-image" src="/My Photo.jpg" alt="Igor Sprovieri" />
          </div>
        </section>

        <section class="c-title" name="section-abilities">
          <h1 class="TypeWriter c-h1">{"{Habilidades que"}</h1>
          <h1 class="TypeWriter c-h1 isBlue">{"Domino}"}</h1>
        </section>

        <section class="c-section">
          <div class="c-section__container c-section__container--stayOnMobile">
            <div class="c-ability-container">
              <div class="c-ability-box">
                <img
                  class="c-ability-box__image"
                  src="/typescript.svg"
                  alt="Typescript"
                />
              </div>
              <p class="c-p">Typescript para tipagem e superset do JS</p>
            </div>
            <div class="c-ability-container">
              <div class="c-ability-box">
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/react.svg"
                  alt="React"
                />
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/next.svg"
                  alt="Next"
                />
              </div>
              <p class="c-p">
                React e Next para criação de páginas HTML com Jsx e SSR
              </p>
            </div>
            <div class="c-ability-container">
              <div class="c-ability-box">
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/styled-components.svg"
                  alt="Styled Components"
                />
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/chakra.svg"
                  alt="Chakra UI"
                />
              </div>
              <p class="c-p">CSS Avançado com Styled Components e Chakra UI</p>
            </div>
            <div class="c-ability-container">
              <div class="c-ability-box">
                <img
                  class="c-ability-box__image"
                  src="/redux.svg"
                  alt="Redux"
                />
              </div>
              <p class="c-p">
                Bibliotecas como Redux, Formik, Yup, React Query e Axios
              </p>
            </div>
          </div>
          <div class="c-section__container c-section__container--stayOnMobile">
            <div class="c-ability-container">
              <div class="c-ability-box">
                <img
                  class="c-ability-box__image"
                  src="/express-mini.svg"
                  alt="Express"
                />
              </div>
              <p class="c-p">Express para criação de rotas HTTP e Api's REST</p>
            </div>
            <div class="c-ability-container">
              <div class="c-ability-box">
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/postgres.svg"
                  alt="Postgres"
                />
                <img
                  class="c-ability-box__image"
                  src="/mongo.svg"
                  alt="MongoDB"
                />
              </div>

              <p class="c-p">
                Controle de DB SQL e NoSQL como Postgres e Mongo
              </p>
            </div>
            <div class="c-ability-container">
              <div class="c-ability-box">
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/type-orm-icon.png"
                  alt="Type ORM"
                />
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/sequelize.svg"
                  alt="Sequelize"
                />
              </div>
              <p class="c-p">
                TypeORM e Sequelize para gerenciar DB através de Api's
              </p>
            </div>
            <div class="c-ability-container">
              <div class="c-ability-box">
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/aws.svg"
                  alt="AWS"
                />
                <img
                  class="c-ability-box__image c-ability-box__image--small"
                  src="/railway.svg"
                  alt="Railway"
                />
              </div>
              <p class="c-p">
                AWS, Railway e Vercel para deploy de Api&apos;s e sites
              </p>
            </div>
          </div>
        </section>

        <section class="c-title" name="section-portfolio">
          <h1 class="TypeWriter c-h1">{`{Portfólio de`}</h1>
          <h1 class="TypeWriter c-h1 isBlue">{`Projetos}`}</h1>
        </section>

        <section class="c-section c-section--scrollOnMobile">
          <div class="c-section__container c-section__container--scrollOnMobile">
            <div class="c-project-box">
              <img
                class="c-project-box__image"
                src="/weekly.png"
                alt="Weekly"
              />
              <h3 class="c-h3 isBlue">Weekly</h3>
              <p class="c-p c-p--little">
                Weekly é um aplicativo web para gerenciar tarefas semanais
              </p>

              <div class="c-project-box__tech-icons-container">
                <img
                  class="c-project-box__tech-icon"
                  src="/html.svg"
                  alt="Html"
                />
                <img
                  class="c-project-box__tech-icon"
                  src="/css.svg"
                  alt="Css"
                />
                <img
                  class="c-project-box__tech-icon"
                  src="/javascript.svg"
                  alt="Javascript"
                />
              </div>

              <div class="c-project-box__icons">
                <button
                  class="c-button-reverse"
                  onclick="openNewTab('https://weekly.ispapps.com/index.html')"
                >
                  <p class="c-p c-p--little">Visitar Website</p>
                  <img
                    class="c-project-box__icon"
                    src="/link.svg"
                    alt="Link de Produção"
                  />
                </button>

                <button
                  class="c-button-reverse"
                  onclick="openNewTab('https://github.com/IgorSprovieri/weekly-api')"
                >
                  <p class="c-p c-p--little">Ver Repositório</p>
                  <img
                    class="c-project-box__icon"
                    src="/Github.png"
                    alt="Meu GitHub"
                  />
                </button>
              </div>
            </div>
            <div class="c-project-box">
              <img
                class="c-project-box__image"
                src="/supermarket-list.png"
                alt="Weekly"
              />
              <h3 class="c-h3 isBlue">Supermarket List</h3>
              <p class="c-p c-p--little">
                Um web app para ajudar nas compras de supermercado
              </p>

              <div class="c-project-box__tech-icons-container">
                <img
                  class="c-project-box__tech-icon"
                  src="/react.svg"
                  alt="React"
                />
                <img
                  class="c-project-box__tech-icon"
                  src="/styled-components.svg"
                  alt="Styled Components"
                />
                <img
                  class="c-project-box__tech-icon"
                  src="Assets/vercel.svg"
                  alt="Vercel"
                />
              </div>

              <div class="c-project-box__icons">
                <button
                  class="c-button-reverse"
                  onclick="openNewTab('https://app.supermarket-list.ispapps.com')"
                >
                  <p class="c-p c-p--little">Visitar Website</p>
                  <img
                    class="c-project-box__icon"
                    src="/link.svg"
                    alt="Visitar Site Portfolio"
                  />
                </button>

                <button
                  class="c-button-reverse"
                  onclick="openNewTab('https://github.com/IgorSprovieri/supermarket-list-web')"
                >
                  <p class="c-p c-p--little">Ver Repositório</p>
                  <img
                    class="c-project-box__icon"
                    src="/Github.png"
                    alt="Meu GitHub"
                  />
                </button>
              </div>
            </div>
            <div class="c-project-box">
              <img
                class="c-project-box__image"
                src="/Rest API.svg"
                alt="Rest API"
              />
              <h3 class="c-h3 isBlue">Stock Controller</h3>
              <p class="c-p c-p--little">
                Uma api para controle de estoque de lojas, varejo, etc.
              </p>

              <div class="c-project-box__tech-icons-container">
                <img
                  class="c-project-box__tech-icon"
                  src="/node.svg"
                  alt="Node"
                />
                <img
                  class="c-project-box__tech-icon"
                  src="/typescript.svg"
                  alt="Typescript"
                />
                <img
                  class="c-project-box__tech-icon"
                  src="/postgres.svg"
                  alt="Postgres"
                />
                <img
                  class="c-project-box__tech-icon"
                  src="/express.svg"
                  alt="Express"
                />
                <img
                  class="c-project-box__tech-icon"
                  src="/type-orm.png"
                  alt="Type ORM"
                />
              </div>

              <div class="c-project-box__icons">
                <button
                  class="c-button-reverse"
                  onclick="openNewTab('https://app.caninde.ispapps.com')"
                >
                  <p class="c-p c-p--little">Visitar Website</p>
                  <img
                    class="c-project-box__icon"
                    src="/link.svg"
                    alt="Link de Produção"
                  />
                </button>

                <button
                  class="c-button-reverse"
                  onclick="openNewTab('https://github.com/IgorSprovieri/stock-controller-api')"
                >
                  <p class="c-p c-p--little">Ver Repositório</p>
                  <img
                    class="c-project-box__icon"
                    src="/Github.png"
                    alt="Meu GitHub"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="c-title" name="section-experiences">
          <h1 class="TypeWriter c-h1">{`{Minhas`}</h1>
          <h1 class="TypeWriter c-h1 isBlue">{`Experiências}`}</h1>
        </section>

        <section class="c-section">
          <div class="c-experience-box">
            <h3 class="c-h3 isBlue">Freelancer - Desenvolvedor Fullstack</h3>
            <h4 class="c-h4">MAR 2023</h4>
            <p class="c-p">
              Desenvolvo trabalhos autônomos usando React, Next, Typescript e
              Node
            </p>
          </div>
          <div class="c-experience-box">
            <h3 class="c-h3 isBlue">Mapa da Programação - Tutor</h3>
            <h4 class="c-h4">FEV 2023</h4>
            <p class="c-p">
              Dou tutoria aos alunos nos cursos da empresa com foco em React e
              Node
            </p>
          </div>
          <div class="c-experience-box">
            <h3 class="c-h3 isBlue">
              Sprovieri Games - Desenvolvedor Unity C#
            </h3>
            <h4 class="c-h4">JAN 2020 - AGO 2022</h4>
            <p class="c-p">
              Desenvolvi em equipe 14 jogos autorais e de terceiros para
              diversas plataformas como: Steam, Nintendo Switch e Google Play
            </p>
          </div>
          <div class="c-experience-box">
            <h3 class="c-h3 isBlue">Crie Seus Jogos - Tutor e Redator</h3>
            <h4 class="c-h4">JUN 2020 - SET 2021</h4>
            <p class="c-p">
              Atuei como tutor e redatei artigos semanais sobre programação de
              jogos no site crieseusjogos.com
            </p>
          </div>
          <div class="c-experience-box">
            <h3 class="c-h3 isBlue">Pinel Games - Desenvolvedor Unity C#</h3>
            <h4 class="c-h4">SET 2020 - DEZ 2020</h4>
            <p class="c-p">
              Atuei como desenvolvedor Unity em 2 jogos da empresa, testando,
              corrigindo bugs e desenvolvendo as principais mecânicas
            </p>
          </div>
        </section>

        <section class="c-title" name="section-frag-components">
          <h1 class="TypeWriter c-h1">{`{Frag`}</h1>
          <h1 class="TypeWriter c-h1 isBlue">{`Components}`}</h1>
        </section>
        <section class="c-section">
          <section class="c-section__container">
            <div class="c-frag-container"></div>
          </section>
        </section>
      </main>
      <footer class="c-footer">
        <section class="c-my-name">
          <h2 class="c-h2 isBlue">Igor Sprovieri</h2>
        </section>
        <section class="c-social-icons">
          <a onclick="openNewTab('https://github.com/IgorSprovieri')">
            <img
              class="c-social-icons__image"
              src="/Github.png"
              alt="Meu GitHub"
            />
          </a>
          <a onclick="openNewTab('https://www.linkedin.com/in/igor-sprovieri-768b09196/')">
            <img class="c-social-icons__image" src="/Linkedin.png" alt="" />
          </a>
        </section>
      </footer>
    </>
  );
}

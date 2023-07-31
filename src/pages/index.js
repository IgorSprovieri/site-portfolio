import { MenuButton, MyImage, SocialIcons } from "@/components";

export default function Home() {
  return (
    <>
      <header className="c-header">
        <menu className="c-menu">
          <MenuButton scrollTo={"section-home"}>Home</MenuButton>
          <MenuButton scrollTo={"section-abilities"}>Habilidades</MenuButton>
          <MenuButton scrollTo={"section-portfolio"}>Portfólio</MenuButton>
          <MenuButton scrollTo={"section-experiences"}>Experiências</MenuButton>
          <MenuButton scrollTo={"section-frag-components"}>
            Frag Components
          </MenuButton>
        </menu>
        <SocialIcons></SocialIcons>
      </header>
      <main className="c-main" name="section-home">
        <section className="c-section">
          <div className="c-section__container c-section__container">
            <div className="c-my-description">
              <h1 className="TypeWriter c-h1 c-h1--type-witter">
                Olá, Muito prazer! Sou o Igor Sprovieri
              </h1>
              <p className="c-p">
                Programador desde 2013, comecei desenvolvendo jogos com a Unity,
                onde em 2020 eu abri meu estúdio de jogos e até 2022 desenvolvi
                14 projetos em equipe, autorais e de terceiros. Também fui
                redator por mais de um ano do site crieseusjogos.com.br. Após
                esse período comecei a me dedicar ao desenvolvimento web e hoje
                atuo como desenvolvedor fullstack com React, Next, Typescript e
                Node.
              </p>
              <a onclick="openNewTab('https://wa.me/message/AQZS3NOUQULWL1')">
                <button className="c-button">ENTRAR EM CONTATO</button>
              </a>
            </div>
            <MyImage></MyImage>
          </div>
        </section>

        <section className="c-title" name="section-abilities">
          <h1 className="TypeWriter c-h1">{"{Habilidades que"}</h1>
          <h1 className="TypeWriter c-h1 isBlue">{"Domino}"}</h1>
        </section>

        <section className="c-section">
          <div className="c-section__container c-section__container--stayOnMobile">
            <div className="c-ability-container">
              <div className="c-ability-box">
                <img
                  className="c-ability-box__image"
                  src="/typescript.svg"
                  alt="Typescript"
                />
              </div>
              <p className="c-p">Typescript para tipagem e superset do JS</p>
            </div>
            <div className="c-ability-container">
              <div className="c-ability-box">
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/react.svg"
                  alt="React"
                />
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/next.svg"
                  alt="Next"
                />
              </div>
              <p className="c-p">
                React e Next para criação de páginas HTML com Jsx e SSR
              </p>
            </div>
            <div className="c-ability-container">
              <div className="c-ability-box">
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/styled-components.svg"
                  alt="Styled Components"
                />
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/chakra.svg"
                  alt="Chakra UI"
                />
              </div>
              <p className="c-p">
                CSS Avançado com Styled Components e Chakra UI
              </p>
            </div>
            <div className="c-ability-container">
              <div className="c-ability-box">
                <img
                  className="c-ability-box__image"
                  src="/redux.svg"
                  alt="Redux"
                />
              </div>
              <p className="c-p">
                Bibliotecas como Redux, Formik, Yup, React Query e Axios
              </p>
            </div>
          </div>
          <div className="c-section__container c-section__container--stayOnMobile">
            <div className="c-ability-container">
              <div className="c-ability-box">
                <img
                  className="c-ability-box__image"
                  src="/express-mini.svg"
                  alt="Express"
                />
              </div>
              <p className="c-p">
                Express para criação de rotas HTTP e Api's REST
              </p>
            </div>
            <div className="c-ability-container">
              <div className="c-ability-box">
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/postgres.svg"
                  alt="Postgres"
                />
                <img
                  className="c-ability-box__image"
                  src="/mongo.svg"
                  alt="MongoDB"
                />
              </div>

              <p className="c-p">
                Controle de DB SQL e NoSQL como Postgres e Mongo
              </p>
            </div>
            <div className="c-ability-container">
              <div className="c-ability-box">
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/type-orm-icon.png"
                  alt="Type ORM"
                />
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/sequelize.svg"
                  alt="Sequelize"
                />
              </div>
              <p className="c-p">
                TypeORM e Sequelize para gerenciar DB através de Api's
              </p>
            </div>
            <div className="c-ability-container">
              <div className="c-ability-box">
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/aws.svg"
                  alt="AWS"
                />
                <img
                  className="c-ability-box__image c-ability-box__image--small"
                  src="/railway.svg"
                  alt="Railway"
                />
              </div>
              <p className="c-p">
                AWS, Railway e Vercel para deploy de Api&apos;s e sites
              </p>
            </div>
          </div>
        </section>

        <section className="c-title" name="section-portfolio">
          <h1 className="TypeWriter c-h1">{`{Portfólio de`}</h1>
          <h1 className="TypeWriter c-h1 isBlue">{`Projetos}`}</h1>
        </section>

        <section className="c-section c-section--scrollOnMobile">
          <div className="c-section__container c-section__container--scrollOnMobile">
            <div className="c-project-box">
              <img
                className="c-project-box__image"
                src="/weekly.png"
                alt="Weekly"
              />
              <h3 className="c-h3 isBlue">Weekly</h3>
              <p className="c-p c-p--little">
                Weekly é um aplicativo web para gerenciar tarefas semanais
              </p>

              <div className="c-project-box__tech-icons-container">
                <img
                  className="c-project-box__tech-icon"
                  src="/html.svg"
                  alt="Html"
                />
                <img
                  className="c-project-box__tech-icon"
                  src="/css.svg"
                  alt="Css"
                />
                <img
                  className="c-project-box__tech-icon"
                  src="/javascript.svg"
                  alt="Javascript"
                />
              </div>

              <div className="c-project-box__icons">
                <button
                  className="c-button-reverse"
                  onclick="openNewTab('https://weekly.ispapps.com/index.html')"
                >
                  <p className="c-p c-p--little">Visitar Website</p>
                  <img
                    className="c-project-box__icon"
                    src="/link.svg"
                    alt="Link de Produção"
                  />
                </button>

                <button
                  className="c-button-reverse"
                  onclick="openNewTab('https://github.com/IgorSprovieri/weekly-api')"
                >
                  <p className="c-p c-p--little">Ver Repositório</p>
                  <img
                    className="c-project-box__icon"
                    src="/Github.png"
                    alt="Meu GitHub"
                  />
                </button>
              </div>
            </div>
            <div className="c-project-box">
              <img
                className="c-project-box__image"
                src="/supermarket-list.png"
                alt="Weekly"
              />
              <h3 className="c-h3 isBlue">Supermarket List</h3>
              <p className="c-p c-p--little">
                Um web app para ajudar nas compras de supermercado
              </p>

              <div className="c-project-box__tech-icons-container">
                <img
                  className="c-project-box__tech-icon"
                  src="/react.svg"
                  alt="React"
                />
                <img
                  className="c-project-box__tech-icon"
                  src="/styled-components.svg"
                  alt="Styled Components"
                />
                <img
                  className="c-project-box__tech-icon"
                  src="Assets/vercel.svg"
                  alt="Vercel"
                />
              </div>

              <div className="c-project-box__icons">
                <button
                  className="c-button-reverse"
                  onclick="openNewTab('https://app.supermarket-list.ispapps.com')"
                >
                  <p className="c-p c-p--little">Visitar Website</p>
                  <img
                    className="c-project-box__icon"
                    src="/link.svg"
                    alt="Visitar Site Portfolio"
                  />
                </button>

                <button
                  className="c-button-reverse"
                  onclick="openNewTab('https://github.com/IgorSprovieri/supermarket-list-web')"
                >
                  <p className="c-p c-p--little">Ver Repositório</p>
                  <img
                    className="c-project-box__icon"
                    src="/Github.png"
                    alt="Meu GitHub"
                  />
                </button>
              </div>
            </div>
            <div className="c-project-box">
              <img
                className="c-project-box__image"
                src="/Rest API.svg"
                alt="Rest API"
              />
              <h3 className="c-h3 isBlue">Stock Controller</h3>
              <p className="c-p c-p--little">
                Uma api para controle de estoque de lojas, varejo, etc.
              </p>

              <div className="c-project-box__tech-icons-container">
                <img
                  className="c-project-box__tech-icon"
                  src="/node.svg"
                  alt="Node"
                />
                <img
                  className="c-project-box__tech-icon"
                  src="/typescript.svg"
                  alt="Typescript"
                />
                <img
                  className="c-project-box__tech-icon"
                  src="/postgres.svg"
                  alt="Postgres"
                />
                <img
                  className="c-project-box__tech-icon"
                  src="/express.svg"
                  alt="Express"
                />
                <img
                  className="c-project-box__tech-icon"
                  src="/type-orm.png"
                  alt="Type ORM"
                />
              </div>

              <div className="c-project-box__icons">
                <button
                  className="c-button-reverse"
                  onclick="openNewTab('https://app.caninde.ispapps.com')"
                >
                  <p className="c-p c-p--little">Visitar Website</p>
                  <img
                    className="c-project-box__icon"
                    src="/link.svg"
                    alt="Link de Produção"
                  />
                </button>

                <button
                  className="c-button-reverse"
                  onclick="openNewTab('https://github.com/IgorSprovieri/stock-controller-api')"
                >
                  <p className="c-p c-p--little">Ver Repositório</p>
                  <img
                    className="c-project-box__icon"
                    src="/Github.png"
                    alt="Meu GitHub"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="c-title" name="section-experiences">
          <h1 className="TypeWriter c-h1">{`{Minhas`}</h1>
          <h1 className="TypeWriter c-h1 isBlue">{`Experiências}`}</h1>
        </section>

        <section className="c-section">
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">
              Freelancer - Desenvolvedor Fullstack
            </h3>
            <h4 className="c-h4">MAR 2023</h4>
            <p className="c-p">
              Desenvolvo trabalhos autônomos usando React, Next, Typescript e
              Node
            </p>
          </div>
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">Mapa da Programação - Tutor</h3>
            <h4 className="c-h4">FEV 2023</h4>
            <p className="c-p">
              Dou tutoria aos alunos nos cursos da empresa com foco em React e
              Node
            </p>
          </div>
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">
              Sprovieri Games - Desenvolvedor Unity C#
            </h3>
            <h4 className="c-h4">JAN 2020 - AGO 2022</h4>
            <p className="c-p">
              Desenvolvi em equipe 14 jogos autorais e de terceiros para
              diversas plataformas como: Steam, Nintendo Switch e Google Play
            </p>
          </div>
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">Crie Seus Jogos - Tutor e Redator</h3>
            <h4 className="c-h4">JUN 2020 - SET 2021</h4>
            <p className="c-p">
              Atuei como tutor e redatei artigos semanais sobre programação de
              jogos no site crieseusjogos.com
            </p>
          </div>
          <div className="c-experience-box">
            <h3 className="c-h3 isBlue">
              Pinel Games - Desenvolvedor Unity C#
            </h3>
            <h4 className="c-h4">SET 2020 - DEZ 2020</h4>
            <p className="c-p">
              Atuei como desenvolvedor Unity em 2 jogos da empresa, testando,
              corrigindo bugs e desenvolvendo as principais mecânicas
            </p>
          </div>
        </section>

        <section className="c-title" name="section-frag-components">
          <h1 className="TypeWriter c-h1">{`{Frag`}</h1>
          <h1 className="TypeWriter c-h1 isBlue">{`Components}`}</h1>
        </section>
        <section className="c-section">
          <section className="c-section__container">
            <div className="c-frag-container"></div>
          </section>
        </section>
      </main>
      <footer className="c-footer">
        <section className="c-my-name">
          <h2 className="c-h2 isBlue">Igor Sprovieri</h2>
        </section>
        <SocialIcons></SocialIcons>
      </footer>
    </>
  );
}

import { useRef, useState } from 'react';
// import { BsTranslate } from 'react-icons/bs';

import './App.css';

function App() {
  const [themeIsLight, setThemeIsLight] = useState<boolean>(false);
  // const [languageIsEnglish, setLanguageIsEnglish] = useState<boolean>(false);
  const copyEmailRef = useRef<HTMLButtonElement>(null);

  const copyEmail = () => {
    if (copyEmailRef.current) {
      navigator.clipboard.writeText('samuel.araujo.souza@outlook.com');
      copyEmailRef.current.textContent = 'E-mail copiado';
      setTimeout(() => {
        if (copyEmailRef.current) {
          copyEmailRef.current.textContent = 'Clique para copiar o e-mail';
        }
      }, 3000);
    } 
  };

  const toggleTheme = () => {
    if (!themeIsLight) {
      document.body.classList.add('-light');
    } else {
      document.body.classList.remove('-light')
    }
    setThemeIsLight(!themeIsLight)
  };

  return (
    <div className='main'>
      <header className='header-content'>
        {/* <label className={`toggle-language ${languageIsEnglish ? '-english' : ''}`}>
          <BsTranslate className='icon' size={32} />
        </label> */}
        <label className='toggle-switch'>
          <input className='input' type='checkbox' onChange={toggleTheme} data-theme-toggle />
          <span className='slider'></span>
        </label>
      </header>

      <h1 className='landing-headline'>
        <span className='smalltext'>Olá, me chamo Samuel.</span>
        <span className='headline'>Um desenvolvedor JavaScript que busca transformar ideias em código e mudar o mundo</span>
      </h1>

      <div className='body-content'>
        <p className='paragraph'>
          Conheci o mundo do desenvolvimento de software em 2017. Aprendi lógica de programação com as táticas de guerra de Alexandre, o Grande. Pouco tempo se passou e aprendi a criar minhas primeiras interfaces com CSS, UX e UI. Em outras palavras, aprendi a dissolver problemas em soluções concretas com design.
        </p>

        <p className='paragraph'>
          Em 2018, conheci diversas linguagens de programação e os bancos de dados. Aprendi que existia algo por trás das interfaces; algo que persistia a beleza que existia nelas. Descobri que existia uma arquitetura operando por trás de tudo, tal como um organismo vivo. Criei autonomia para melhorar o mundo.
        </p>

        <p className='paragraph'>
          Você pode verificar alguns dos meus projetos no <a className='link' href='https://github.com/samuelastech' target='_blank' rel="noreferrer">GitHub</a>, se conectar comigo no <a className='link' href='https://www.linkedin.com/in/samuelastech' target='_blank' rel="noreferrer">LinkedIn</a> ou ainda me enviar um <u className='link'>e-mail</u>:
        </p>

        <button className='button-cta' ref={copyEmailRef} onClick={copyEmail}>Clique para copiar o e-mail</button>

        <p className='paragraph'>
          Dentre os conhecimentos técnicos, posso listar alguns: JavaScript — React DOM, React Native, NodeJS, NestJS, MongoDB —, Docker, Kubernetes, CI/CD, Arquitetura de Sistemas...
        </p>

        <p className='paragraph'>
          O carro chefe que guia o meu trabalho em equipe é o Scrum — inspeção e adaptação constante. Mas, o denominador comum de todas as habilidades é a serenidade, foco e autoconsciência.
        </p>
      </div>
    </div>
  );
}

export default App;

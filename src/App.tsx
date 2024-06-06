import { useEffect, useRef, useState } from "react";

// Icons
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Componentes
import { TypingText } from "./components/TypingText";

// Images
import project1 from "./assets/images/police-high-speed-chase.jpeg";
import project2 from "./assets/images/sweepstack-cup.jpg";
import project3 from "./assets/images/fingerprint.jpg";

function App() {
  const [headerColor, setHeaderColor] = useState<string>('');
  const [videoIsOpen, setVideoIsOpen] = useState<boolean>(false);
  const mainRef = useRef<HTMLElement>(null);

  const scrollBackToTop = () => mainRef.current?.scrollTo(0, 0);

  const toggleVideo = () => setVideoIsOpen(!videoIsOpen);

  const handleScroll = () => {
    if (mainRef.current && mainRef.current.scrollTop > 0) {
      // Light
      setHeaderColor('text-black bg-white opacity-80');
    } else {
      // Dark
      setHeaderColor('bg-[rgba(0,0,0,0.9)] border-zinc-500');
    }
  };

  useEffect(() => {
    mainRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      mainRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main ref={mainRef} className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar scroll-smooth overflow-x-hidden">
      <header className={`fixed top-0 left-0 p-6 h-16 w-full flex items-center border-b font-mono transition-all duration-200 z-50 ${headerColor}`}>
        <h1 className="font-medium text-lg transition-[color] duration-200 cursor-pointer" onClick={scrollBackToTop}>
          <span className="font-extralight">@</span>
          samuelastech
          <span className="font-extralight">()</span>
        </h1>
      </header>

      <section className="relative snap-start w-full min-h-screen flex flex-col items-center justify-center p-2 text-center">
        <h1 className="font-bold text-8xl sm:text-9xl">Samuel<br/>Araujo<br/>Souza</h1>
        <TypingText className="text-xl sm:text-2xl font-mono tracking-widest lowercase text-purple-300" elementType='h2' cursorColor="white">Desenvolvedor back-end</TypingText>
      </section>

      <section className="snap-start w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-lime-800 to-emerald-800">
        <div className="max-w-[768px]">
          <h1 className="font-tlou text-6xl sm:text-9xl uppercase text-center mb-8">
            <span className="text-xs sm:text-base block font-mono font-light tracking-widest uppercase mb-2">A fagulha inicial</span>
            The Last of Us
          </h1>
          <p className="text-zinc-300 text-lg hyphens-auto text-justify">
            Em 2013, foi lançado um dos melhores jogos de todos os tempos. Com ele, nasceu minha vontade de me tornar um
            game designer e criar jogos com gráficos tão lindos quanto os que eu acabara de testemunhar. Comecei no
            design e, eventualmente, conheci a tríade do desenvolvimento web: HTML, CSS e JavaScript. Posso dizer que
            esse foi o meu início no mundo do desenvolvimento.
          </p>
        </div>
      </section>

      <section className="relative snap-start w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-800 to-cyan-800">
        <div className="max-w-[768px]">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8">
            <span className="text-xs sm:text-base block font-mono font-light tracking-widest uppercase mb-2">Técnico</span>
            Desenvolvimento de Sistemas
          </h1>
          <p className="text-zinc-300 text-lg hyphens-auto text-justify">
            Em 2017, iniciei meus estudos técnicos. Um dos professores
            apresentou a disciplina de lógica de programação de um jeito não
            convencional: utilizando a lógica das estratégias de batalha de
            Alexandre, o Grande, nas guerras greco-pérsicas. A narrativa não me
            deixava piscar. Foi um jeito criativo e altamente engajante de
            ensinar, que me fez ter certeza de que era ali que eu queria estar.
          </p>
        </div>

        <button
          onClick={toggleVideo}
          className="
            absolute
            bottom-6
            left-6
            flex
            justify-evenly
            items-center
            gap-2
            border-2
            p-4
            w-full
            max-w-80 
            z-10
            text-lg
            overflow-hidden
            transition-colors
            font-medium

            hover:text-cyan-800
            before:hover:scale-x-100

            before:content-['']
            before:absolute
            before:top-0
            before:left-0
            before:origin-top-left
            before:scale-x-0
            before:-z-10
            before:h-full
            before:w-full
            before:transition-transform
            before:duration-500
            before:bg-white"
        >
          <FaPlay />
          Veja a batalha de maratona
        </button>

        <div className={`absolute top-0 left-0 z-50 w-full h-full transition-all ${videoIsOpen ? 'block' : 'hidden'}`}>
          <IoClose className="z-50 absolute top-16 right-6 text-white text-4xl border-2 rounded-full cursor-pointer duration-500 hover:bg-white hover:text-black" onClick={toggleVideo} />
          <iframe
            className="w-full h-full z-0"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V3b6M5CzYTE?si=n-rdpCEPLZdG376O?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
      </section>

      <section className="snap-start w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-cyan-800 to-indigo-800">
        <div className="max-w-[768px]">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8">
            <span className="text-xs sm:text-base block font-mono font-light tracking-widest uppercase mb-2">Bacharelado</span>
            Ciência da Computação
          </h1>
          <p className="text-zinc-300 text-lg hyphens-auto text-justify">
            Em 2020, entrei no ensino superior. Provei de diversas disciplinas e conheci a computação a fundo.
          </p>
        </div>
      </section>
      <section className="snap-start w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-indigo-800 to-yellow-800">
        <div className="max-w-[768px]">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8">
            <span className="text-xs sm:text-base block font-mono font-light tracking-widest uppercase mb-2">Experiência profissional</span>
            DevOps & Back-End
          </h1>
          <p className="text-zinc-300 text-lg hyphens-auto text-justify">
            No 4º semestre da graduação, comecei em um estágio de Engenharia DevOps na <a className="text-blue-400 underline" href="https://www.grupothink.com.br/">Think IT</a>.
            Entendi que a agilidade precisava se expandir para outros âmbitos de uma empresa, muito além da 
            equipe de desenvolvimento. Depois de um tempo, a empresa me deu a oportunidade de atuar como desenvolvedor
            back-end.
          </p>
        </div>
      </section>
      <section className="snap-start w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-yellow-800 to-red-800">
        <div className="max-w-[768px]">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8">
            <span className="text-xs sm:text-base block font-mono font-light tracking-widest uppercase mb-2">Pós-graduação MBA</span>
            Arquitetura Full-Cycle
          </h1>
          <p className="text-zinc-300 text-lg hyphens-auto text-justify">
            Presente momento. Comecei em 2024, previsão de conclusão em 2025. Meu objetivo é a especialização em todo
            ciclo de vida do software — da concepção da solução até a implementação, monitoramento e observabilidade.
          </p>
        </div>
      </section>
      <section className="snap-start w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-red-800 to-rose-800">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8">
          Projetos
        </h1>
        <div className="bg-zinc-800 relative rounded-lg shadow-[0_1.5rem_3rem_-0.75rem_hsla(0,0%,0%,0.25)] border-4 border-white">
          <div className="clamp-slider z-0 grid grid-flow-col overflow-y-hidden overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar">
            <a href="https://github.com/samuelastech/police-chase-system" target="_blank"><div id="project-1" className="clamp-slide snap-start bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url(" + project1 + ")" }} /></a>
            <a href="https://github.com/samuelastech/sweepstake-cup" target="_blank"><div id="project-2" className="clamp-slide snap-start bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url(" + project2 + ")" }} /></a>
            <div id="project-3" className="clamp-slide snap-start bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url(" + project3 + ")" }} />
          </div>
          <div className="flex gap-4 absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
            <a href="#project-1" className="
              w-3
              h-3
              rounded-full
              bg-white
              ease-in
              duration-200
              opacity-75

              hover:opacity-100
            "></a>
            <a href="#project-2" className="
              w-3
              h-3
              rounded-full
              bg-white
              ease-in
              duration-200
              opacity-75

              hover:opacity-100
            "></a>
            <a href="#project-3" className="
              w-3
              h-3
              rounded-full
              bg-white
              ease-in
              duration-200
              opacity-75

              hover:opacity-100
            "></a>
          </div>
        </div>
      </section>
      
      <footer className="bg-black border-t-2 border-t-white h-48"></footer>
    </main>
  );
}

export default App;

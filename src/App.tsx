import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TypingText } from "./components/TypingText";

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

  useEffect(() => {
    
  }, []);

  return (
    <main ref={mainRef} className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar scroll-smooth">
      <header className={`fixed top-0 left-0 p-6 h-16 w-full flex items-center border-b font-mono transition-all duration-200 z-50 ${headerColor}`}>
        <h1 className="font-medium text-lg transition-[color] duration-200 cursor-pointer" onClick={scrollBackToTop}>
          <span className="font-extralight">@</span>
          samuelastech
          <span className="font-extralight">()</span>
        </h1>
      </header>

      <section className="relative snap-start w-full min-h-screen flex flex-col items-center justify-center p-2 text-center">
        <h1 className="
          font-bold
          text-8xl
          sm:text-9xl
        ">Samuel<br/>Araujo<br/>Souza</h1>
        <TypingText className="text-xl sm:text-2xl font-mono tracking-widest lowercase text-purple-300" elementType='h2' cursorColor="purple-300">Desenvolvedor back-end</TypingText>
      </section>

      <section className="snap-start w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-lime-800 to-emerald-800">
        <div className="max-w-[768px]">
          <h1 className="font-tlou text-6xl sm:text-9xl uppercase text-center">The Last<br />of Us</h1>
          <p className="text-zinc-300 text-lg">
            Em 2013, foi lançado um dos melhores jogos de todos os tempos. Com ele nasceu minha vontade de se tornar um
            game designer e fazer jogos com gráficos tão lindos como os que eu acabara de testemunhar. Comecei no
            design, eventualmente conheci a trinca do desenvolvimento web: HTML, CSS e JavaScript. Posso dizer que esse
            foi meu inicio no mundo do desenvolvimento
          </p>
        </div>
      </section>

      <section className="relative snap-start w-full h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-800 to-cyan-800">
        <div className="max-w-[768px]">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4">
            <span className="text-base block font-mono tracking-widest uppercase">ETEC de Embu das Artes</span>
            Desenvolvimento de Sistemas
          </h1>
          <p className="text-zinc-300 text-lg">
            Em 2017, iniciei os estudos técnicos. O professor apresentou a disciplina de lógica de programação de um
            jeito não convecional: utilizando a lógica das estratégias de batalha de Alexandre, o grande, nas guerras
            greco-pérsicas. A narrativa não me deixava piscar. Um jeito criativo e altamente engajante de ensinar que me
            fez ter certeza que era ali que eu queria estar.
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
    </main>
  );
}

export default App;

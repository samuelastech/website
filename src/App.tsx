import { useEffect, useRef, useState } from "react";

// Icons
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Componentes
import { TypingText } from "./components/TypingText";
import { Section } from "./components/Section";

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

      <Section.Root>
        <Section.Title className="text-8xl sm:text-9xl">Samuel<br/>Araujo<br/>Souza</Section.Title>
        <TypingText className="text-xl sm:text-2xl font-mono tracking-widest lowercase text-purple-300" elementType='h2' cursorColor="white">Desenvolvedor back-end</TypingText>
      </Section.Root>

      <Section.Root className="bg-gradient-to-b from-lime-800 to-emerald-800">
        <Section.Wrapper>
          <Section.SmallText>A fagulha inicial</Section.SmallText>
          <Section.Title className="font-tlou text-6xl sm:text-9xl uppercase font-normal">The last of us</Section.Title>
          <Section.Paragragph>
            Em 2013, foi lançado um dos melhores jogos de todos os tempos. Com ele, nasceu minha vontade de me tornar um
            game designer e criar jogos com gráficos tão lindos quanto os que eu acabara de testemunhar. Comecei no
            design e, eventualmente, conheci a tríade do desenvolvimento web: HTML, CSS e JavaScript. Posso dizer que
            esse foi o meu início no mundo do desenvolvimento.
          </Section.Paragragph>
        </Section.Wrapper>
      </Section.Root>

      <Section.Root className="bg-gradient-to-b from-emerald-800 to-cyan-800">
        <Section.Wrapper>
          <Section.SmallText>Técnico</Section.SmallText>
          <Section.Title>Desenvolvimento de Sistemas</Section.Title>
          <Section.Paragragph>
            Em 2017, iniciei meus estudos técnicos. Um dos professores
            apresentou a disciplina de lógica de programação de um jeito não
            convencional: utilizando a lógica das estratégias de batalha de
            Alexandre, o Grande, nas guerras greco-pérsicas. A narrativa não me
            deixava piscar. Foi um jeito criativo e altamente engajante de
            ensinar, que me fez ter certeza de que era ali que eu queria estar.
          </Section.Paragragph>
        </Section.Wrapper>
        <Section.Button className="hover:text-cyan-800" icon={FaPlay} text="Veja a batalha de maratona" onClick={toggleVideo} />
      </Section.Root>

      <Section.Root className="bg-gradient-to-b from-cyan-800 to-indigo-800">
        <Section.Wrapper>
          <Section.SmallText>Bacharelado</Section.SmallText>
          <Section.Title>Ciência da Computação</Section.Title>
          <Section.Paragragph>
            Em 2020, entrei no ensino superior. Provei de diversas disciplinas e
            conheci a computação a fundo.
          </Section.Paragragph>
        </Section.Wrapper>
      </Section.Root>

      <Section.Root className="bg-gradient-to-b from-indigo-800 to-yellow-800">
        <Section.Wrapper>
          <Section.SmallText>Experiência profissional</Section.SmallText>
          <Section.Title>DevOps & Back-End</Section.Title>
          <Section.Paragragph>
            No 4º semestre da graduação, comecei em um estágio de Engenharia DevOps na <a className="text-blue-400 underline" href="https://www.grupothink.com.br/">Think IT</a>.
            Entendi que a agilidade precisava se expandir para outros âmbitos de uma empresa, muito além da 
            equipe de desenvolvimento. Depois de um tempo, a empresa me deu a oportunidade de atuar como desenvolvedor
            back-end.
          </Section.Paragragph>
        </Section.Wrapper>
      </Section.Root>

      <Section.Root className="bg-gradient-to-b from-yellow-800 to-red-800">
        <Section.Title>Projetos</Section.Title>
      </Section.Root>
      
      <Section.Root type='footer' className="border-t-2 border-t-white h-48"></Section.Root>
    </main>
  );
}

export default App;

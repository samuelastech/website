import { MdOutlineArrowOutward } from "react-icons/md";

import { Description } from "./Description";
import { Link } from "./Link";
import { Root } from "./Root";
import { Tag } from "./Tag";
import { Tags } from "./Tags";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <>
      <div className="clamp-slider z-0 grid grid-flow-col overflow-y-hidden overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar">
        <div className="clamp-slide snap-start">
          <Root id="project/1">
            <div className="space-y-3">
              <Title>Perseguições em alta velocidade</Title>
              <Description>
                Um policial dá ordem de parada, mas, o indíviduo empreendem fuga. O procedimento operacional pede que
                o policial acompanhe o fugitivo em alta velocidade enquanto modula manualmente com a central. Esse
                projeto propõe uma solução digital para o processo.
              </Description>
              <Tags>
                <Tag className="bg-green-700">Nest.js</Tag>
                <Tag className="bg-green-700">MongoDB</Tag>
                <Tag>Socket.io</Tag>
                <Tag>ESP32</Tag>
                <Tag>React DOM</Tag>
                <Tag>React Native</Tag>
              </Tags>
            </div>
            <Link icon={MdOutlineArrowOutward} href="https://github.com/samuelastech/fingerprint-auth" />
          </Root>
        </div>
        <div className="clamp-slide snap-start">
          <Root id="project/2">
            <div className="space-y-3">
              <Title>Autenticação com impressão digital</Title>
              <Description>
                Um sistema de autenticação biométrico, por impressão digital,
                escrito com JavaScript e Python. O sistema utiliza uma lista de 
                acesso baseada em niveís. Quanto maior o nível, maior a restrição.
                Nível 1 (acesso livre), nível e nível 3.
              </Description>
              <Tags>
                <Tag className="bg-green-700">Flask</Tag>
                <Tag>OpenCV</Tag>
                <Tag>Matplotlib</Tag>
                <Tag className="bg-orange-700">TensorFlow</Tag>
                <Tag className="bg-orange-700">Jupyter Notebook</Tag>
                <Tag className="bg-green-700">Node.js</Tag>
                <Tag>MongoDB</Tag>
                <Tag>CSS</Tag>
              </Tags>
            </div>
            <Link icon={MdOutlineArrowOutward} href="https://github.com/samuelastech/sweepstake-cup" />
          </Root>
        </div>
        <div className="clamp-slide snap-start">
          <Root id="project/3">
            <div className="space-y-3">
              <Title>Bolão da Copa de 2022</Title>
              <Description>
                Um sistema que te permite criar bolões com amigos para cada jogo da copa
              </Description>
              <Tags>
                <Tag className="bg-green-700">Node.js</Tag>
                <Tag>Fastify</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag className="bg-rose-700">Prisma</Tag>
                <Tag>React DOM</Tag>
                <Tag>React Native</Tag>
              </Tags>
            </div>
            <Link icon={MdOutlineArrowOutward} href="https://github.com/samuelastech/police-chase-system" />
          </Root>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <a href="#project/1" className="
          w-3
          h-3
          rounded-full
          bg-white
          ease-in
          duration-200
          opacity-50

          hover:opacity-100
        "></a>
        <a href="#project/2" className="
          w-3
          h-3
          rounded-full
          bg-white
          ease-in
          duration-200
          opacity-50

          hover:opacity-100
        "></a>
        <a href="#project/3" className="
          w-3
          h-3
          rounded-full
          bg-white
          ease-in
          duration-200
          opacity-50

          hover:opacity-100
        "></a>
      </div>
    </>
  );
};

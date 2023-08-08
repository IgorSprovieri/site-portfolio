import { H2, Paragraph } from "@/components";
import { Li } from "@/components/lists";
import Image from "next/image";
import styles from "./style.module.css";

export const AboutFrag = () => {
  return (
    <div className={styles["frag-about-container"]}>
      <Paragraph>
        Frag Components é um framework com foco em SSR e MPA, desenvolvido para
        ser simples e acessível
      </Paragraph>
      <H2>Recursos</H2>
      <ul>
        <Li>
          O principal recurso é a criação de componentes HTML reutilizáveis
        </Li>
        <Li>
          Frag Components também conta com um simples rotamento de páginas,
          através da pasta pages, assim como ocorre em frameworks como o next
        </Li>
        <Li>
          O último recurso, que ajuda muito no desenvolvimento, é a atualização
          em tempo real da página em ambiente de desenvolvimento, ou seja, toda
          vez que algum arquivo é modificado, a página é atualizada no navegador
        </Li>
      </ul>
      <H2>Funcionamento</H2>
      <Image
        src={"/html-component.jpeg"}
        alt="HTML Element"
        width={620}
        height={250}
      ></Image>
      <Paragraph>
        Para criar um componente basta criar um documento HTML dentro da pasta
        components com seu respectivo nome. Esse componente poderá ser usado em
        qualquer página que queira.
      </Paragraph>
      <Paragraph>
        Para passar atributos para esse componente, basta colocar o atributo
        entre chaves {"{ }"} e agora você tem um componente reutilizável
      </Paragraph>
    </div>
  );
};

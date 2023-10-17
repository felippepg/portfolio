import SocialLink from './Navbar/SocialLink';

const TechLists = () => {
  return (
    <ul className="bg-orange-thema-light p-0 flex justify-around mt-16 laptop:mt-40 laptop:w-3/4 mx-auto">
      <span>
        <SocialLink
          url="https://nextjs.org/"
          altText="Icone do Next.js"
          iconSrc="/img/next.svg"
        />
      </span>
      <span>
        {' '}
        <SocialLink
          url="https://react.dev/"
          altText="Icone do React.js"
          iconSrc="/img/react.svg"
        />
      </span>
      <span>
        {' '}
        <SocialLink
          url="https://www.docker.com/"
          altText="Icone do Docker"
          iconSrc="/img/docker.svg"
        />
      </span>
      <span>
        {' '}
        <SocialLink
          url="https://www.typescriptlang.org/"
          altText="Icone do Typescript"
          iconSrc="/img/typescript.svg"
        />
      </span>
      <span>
        {' '}
        <SocialLink
          url="https://www.mysql.com/"
          altText="Icone do Mysql"
          iconSrc="/img/mysql.svg"
        />
      </span>
      <span>
        {' '}
        <SocialLink
          url="https://www.java.com/pt-BR/"
          altText="Icone do Java"
          iconSrc="/img/java.svg"
        />
      </span>
      <span>
        {' '}
        <SocialLink
          url="https://spring.io/"
          altText="Icone do Spring"
          iconSrc="/img/spring.svg"
        />
      </span>
    </ul>
  );
};

export default TechLists;

import SocialLink from './Navbar/SocialLink';

const TechLists = () => {
  return (
    <ul className="bg-orange-thema-light p-1 flex justify-around tech-list mx-auto">
      <span>
        <SocialLink
          url="https://aws.amazon.com/"
          altText="Icone da AWS"
          iconSrc="/img/aws.svg"
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
          url="https://react.dev/"
          altText="Icone do React.js"
          iconSrc="/img/react.svg"
        />
      </span>
    </ul>
  );
};

export default TechLists;

interface SocialLinkProps {
  url: string;
  iconSrc: string;
  altText: string;
}

const SocialLink = ({ url, iconSrc, altText }: SocialLinkProps) => {
  return (
    <li className="mr-4 mb-2">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={iconSrc} alt={altText} />
      </a>
    </li>
  );
};

export default SocialLink;

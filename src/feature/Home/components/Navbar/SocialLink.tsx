import { ISocialLinkProps } from '../../../../types/SocialLinkProps';

const SocialLink = ({ url, iconSrc, altText }: ISocialLinkProps) => {
  return (
    <li className="mr-4 mb-2 list-none">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img width="60" src={iconSrc} alt={altText} />
      </a>
    </li>
  );
};

export default SocialLink;

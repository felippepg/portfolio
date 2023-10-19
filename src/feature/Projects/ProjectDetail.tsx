import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import Title from '../../components/Title';
import Wrapper from '../../container/Wrapper';

const ProjectDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation('projects');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  const photos = [
    {
      id: 1,
      name: 'Repo Radar',
      images: ['/img/piresfood.svg', '/img/vol-med.svg'],
      description: t('repo'),
      url: 'https://github.com/felippepg/repo-radar',
    },
    {
      id: 2,
      name: 'Sorteador de Amigos',
      images: ['/img/sorteador.svg', '/img/repo-radar.svg'],
      description: t('sorteador'),
      url: 'https://github.com/felippepg/sorteador-amigos',
    },
  ];
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="text-orange-thema mt-10">
        <Title>
          {photos.map((item) =>
            id !== undefined && item.id === parseInt(id) ? item.name : ''
          )}
        </Title>

        <div>
          <Slider {...settings}>
            {photos.map((item) => {
              if (id && item.id == parseInt(id)) {
                return item.images.map((img) => <img src={img} />);
              }
            })}
          </Slider>
        </div>
        <div>
          {photos.map((item) =>
            id !== undefined && item.id === parseInt(id) ? item.description : ''
          )}
        </div>
      </div>
      <div className="mt-5 w-full flex flex-col laptop:flex-row laptop:justify-between p-0">
        <button
          className="bg-orange-thema text-white p-3 rounded-sm hover:bg-orange-500 text-center w-24"
          onClick={() => navigate('/')}
        >
          Voltar
        </button>
        <a
          className="bg-orange-thema text-white p-3 rounded-sm hover:bg-orange-500 text-center"
          href="/"
        >
          Conhecer
        </a>
      </div>
    </Wrapper>
  );
};

export default ProjectDetail;

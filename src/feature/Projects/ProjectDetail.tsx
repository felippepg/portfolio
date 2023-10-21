import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import Title from '../../components/Title';
import Wrapper from '../../container/Wrapper';
import usePhotos from '../../hooks/usePhotos';

const ProjectDetail = () => {
  const { id } = useParams();
  const { photos } = usePhotos();
  const navigate = useNavigate();
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

  return (
    <Wrapper>
      <div className="text-orange-thema mt-10">
        <Title>
          {photos.map((item) =>
            id !== undefined && item.id === parseInt(id) ? item.name : ''
          )}
        </Title>

        <div className="mt-2">
          <Slider {...settings}>
            {photos.map((item) => {
              if (id && item.id == parseInt(id)) {
                return item.images.map((img) => <img src={img} />);
              }
            })}
          </Slider>
        </div>
        <div className="mt-2 tablet:text-xl leading-9 text-center">
          {photos.map((item) =>
            id !== undefined && item.id === parseInt(id) ? item.description : ''
          )}
        </div>
      </div>
      <div className="mt-5 w-full flex flex-col items-center laptop:flex-row laptop:justify-between p-0">
        <button
          className="bg-orange-thema text-white p-3 rounded-sm hover:bg-orange-500 text-center w-full laptop:w-24"
          onClick={() => navigate('/')}
        >
          {t('back')}
        </button>
        <a
          className="bg-orange-thema text-white p-3 rounded-sm hover:bg-orange-500 text-center w-full laptop:w-24 mt-2"
          href={
            photos.find((item) => id !== undefined && item.id === parseInt(id))
              ?.url || ''
          }
        >
          {t('visit')}
        </a>
      </div>
    </Wrapper>
  );
};

export default ProjectDetail;

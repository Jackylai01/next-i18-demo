import Carousel from '@components/Carousel';
import { EASE, ISLANDS, MIDDLE, NORTH, SOUTH } from '@helpers/imageImports';
import {
  IActivity,
  activitiesEast,
  activitiesIslands,
  activitiesMiddle,
  activitiesNorth,
  activitiesSouth,
} from '@helpers/linkActivityList';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from 'src/hook/useLanguage';

const defaultActivity: IActivity = {
  title: '',
  organizer: '',
  location: '',
  time: '',
  description: '',
  link: '',
  images: [],
};

const LinkActivity: NextPage = () => {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('北部地區');
  const [selectedActivity, setSelectedActivity] = useState(
    activitiesNorth['2023大稻埕夏日節'],
  );

  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleClick = (region: string) => {
    setSelectedRegion(region);
    setShowDetails(false);
  };

  const handleClickActivity = (activityName: string) => {
    let activity: IActivity;
    switch (selectedRegion) {
      case '北部地區':
        activity = activitiesNorth[activityName];
        break;
      case '中部地區':
        activity = activitiesMiddle[activityName];
        break;
      case '南部地區':
        activity = activitiesSouth[activityName];
        break;
      case '東部地區':
        activity = activitiesEast[activityName];
        break;
      case '離島地區':
        activity = activitiesIslands[activityName];
        break;
      default:
        activity = defaultActivity;
    }
    setSelectedActivity(activity || defaultActivity);
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  let selectedImage;
  let selectedList;
  switch (selectedRegion) {
    case '北部地區':
      selectedImage = (
        <Image
          src={NORTH}
          alt='北部地區'
          objectFit='fill'
          layout='responsive'
        />
      );
      selectedList = (
        <>
          <ul className='link__card--lists'>
            {Object.keys(activitiesNorth).map((activityName) => (
              <li
                onClick={() => handleClickActivity(activityName)}
                key={activityName}
              >
                {t(`activities.${activityName}.title`)}
              </li>
            ))}
          </ul>
        </>
      );
      break;
    case '中部地區':
      selectedImage = (
        <Image
          src={MIDDLE}
          alt='中部地區'
          objectFit='fill'
          layout='responsive'
        />
      );
      selectedList = (
        <>
          <ul className='link__card--lists'>
            {Object.keys(activitiesMiddle).map((activityName) => (
              <li
                onClick={() => handleClickActivity(activityName)}
                key={activityName}
              >
                {t(`activities.${activityName}.title`)}
              </li>
            ))}
          </ul>
        </>
      );
      break;
    case '南部地區':
      selectedImage = (
        <Image
          src={SOUTH}
          alt='南部地區'
          objectFit='fill'
          layout='responsive'
        />
      );
      selectedList = (
        <>
          <ul className='link__card--lists'>
            {Object.keys(activitiesSouth).map((activityName) => (
              <li
                onClick={() => handleClickActivity(activityName)}
                key={activityName}
              >
                {t(`activities.${activityName}.title`)}
              </li>
            ))}
          </ul>
        </>
      );
      break;
    case '東部地區':
      selectedImage = (
        <Image src={EASE} alt='東部地區' objectFit='fill' layout='responsive' />
      );
      selectedList = (
        <>
          <ul className='link__card--lists'>
            {Object.keys(activitiesEast).map((activityName) => (
              <li
                onClick={() => handleClickActivity(activityName)}
                key={activityName}
              >
                {t(`activities.${activityName}.title`)}
              </li>
            ))}
          </ul>
        </>
      );
      break;
    case '離島地區':
      selectedImage = (
        <Image
          src={ISLANDS}
          alt='離島地區'
          objectFit='fill'
          layout='responsive'
        />
      );
      selectedList = (
        <>
          <ul className='link__card--lists'>
            {Object.keys(activitiesIslands).map((activityName) => (
              <li
                onClick={() => handleClickActivity(activityName)}
                key={activityName}
              >
                {t(`activities.${activityName}.title`)}
              </li>
            ))}
          </ul>
        </>
      );
      break;
    default:
      selectedImage = null;
  }

  return (
    <header id='link-activity' className='link'>
      <main className='link__container'>
        <article className='link__title'>
          <h2>
            {t('linkActivity.link')}
            {t('linkActivity.activity')}
          </h2>
        </article>
        <footer className='link__items'>
          <span
            className={`link__items--item link__items--item-default ${
              selectedRegion === '北部地區' ? ' link__items--item-1' : ''
            }`}
            onClick={() => handleClick('北部地區')}
          >
            {t('linkActivity.north')}
          </span>
          <span
            className={`link__items--item link__items--item-default  ${
              selectedRegion === '中部地區' ? 'link__items--item-2' : ''
            }`}
            onClick={() => handleClick('中部地區')}
          >
            {t('linkActivity.middle')}
          </span>
          <span
            className={`link__items--item link__items--item-default ${
              selectedRegion === '南部地區' ? ' link__items--item-3' : ''
            }`}
            onClick={() => handleClick('南部地區')}
          >
            {t('linkActivity.south')}
          </span>
          <span
            className={`link__items--item link__items--item-default ${
              selectedRegion === '東部地區' ? ' link__items--item-4' : ''
            }`}
            onClick={() => handleClick('東部地區')}
          >
            {t('linkActivity.east')}
          </span>
          <span
            className={`link__items--item link__items--item-default ${
              selectedRegion === '離島地區' ? ' link__items--item-5' : ''
            }`}
            onClick={() => handleClick('離島地區')}
          >
            {t('linkActivity.islands')}
          </span>
        </footer>
        <section className='link__card'>
          <span className='link__card--images'>{selectedImage}</span>
          {showDetails ? (
            <article className='link__card--box'>
              <h2 style={{ borderBottom: '4px solid #FAFF00' }}>
                {t(`activities.${selectedActivity?.title}.title`)}
              </h2>
              <span className='link__card--box-img'>
                <Carousel
                  images={selectedActivity?.images}
                  size={{ width: '100%', height: '100%' }}
                />
              </span>
              <span className='link__card--box-list'>
                <br />
                <p>
                  <span>
                    {t(`activities.${selectedActivity?.title}.description`)}
                  </span>
                </p>
                <br />
                <hr />
                <p>
                  {t('activities.organizer')}
                  <span>
                    {t(`activities.${selectedActivity?.title}.organizer`)}
                  </span>
                </p>
                <p>
                  {t('activities.location')}
                  <span>
                    {t(`activities.${selectedActivity?.title}.location`)}
                  </span>
                </p>
                <p>
                  {t('activities.time')}
                  <span>{t(`activities.${selectedActivity?.title}.time`)}</span>
                </p>
                <span className='link__actions'>
                  <a
                    onClick={handleHideDetails}
                    className='link__external link__external--green'
                  >
                    {t('activities.return')}
                  </a>
                  <a
                    href={selectedActivity?.link}
                    className='link__external link__external--red'
                  >
                    {t('activities.related-activities')}
                  </a>
                </span>
              </span>
            </article>
          ) : (
            selectedList
          )}
        </section>
      </main>
    </header>
  );
};

export default LinkActivity;

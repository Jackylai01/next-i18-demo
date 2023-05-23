import BackgroundImg from '@public/Img/Logo/home.png';
import Logo from '@public/Img/Logo/仲夏節LOGO-05.png';

import { NextPage } from 'next';
import Image from 'next/image';

const MainContent: NextPage = () => {
  return (
    <>
      <header className='home'>
        <Image src={BackgroundImg} layout='fill' objectFit='cover' />
        <article className='home__container'>
          <span className='home__logo'>
            <Image src={Logo} width={240} height={60} className='home__logo' />
          </span>
          <main className='home__content'>
            <h1>台灣仲夏</h1>
            <br />
            <p>
              仲夏節是夏至來臨時的慶祝活動，在北歐是一個重要的節日。台灣自2014年開始推廣夏季旅遊活動，從2014年起的「台灣夏至235」，延續到2019年「寶島仲夏節」，台灣夏季旅遊特色已經逐漸受到重視。
            </p>
            <br />
            <p>
              為了因應疫後民眾旅遊觀念與消費習慣的改變，交通部觀光局延續推廣仲夏旅遊的宗旨，重新盤整全台夏季旅遊資源，重塑活動品牌為【台灣仲夏旅遊節】，今年活動以「清涼」、「消暑」、「涼品」為活動主軸，串聯整合台灣
              13 個國家風景區與 14 個縣市，共計超過 35
              項的夏日特色旅遊活動，並與產業跨界結盟合作，以更全面和多元的主題，讓民眾感受台灣夏季的旅遊魅力，期許能捲動台灣夏季觀光熱潮，帶動周邊產業發展，型塑台灣夏日節慶活動新品牌。
            </p>
          </main>
        </article>
      </header>
    </>
  );
};

export default MainContent;

import { ACTIVITY, BAN } from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';

const MainActivity: NextPage = () => {
  return (
    <article className='activity'>
      <main className='activity__container'>
        <header className='activity__title'>
          <h1>
            主軸
            <span>
              <Image src={ACTIVITY} width={20} height={20} />
            </span>
            活動
          </h1>
        </header>
        <section className='activity__card'>
          <Image src={BAN} className='activity__card--img' objectFit='cover' />
          <span className='activity__card--caption'>
            <h1>島嶼生活節</h1>
            <footer className='activity__card--caption-content'>
              <p>
                臺灣國際熱氣球嘉年華是每年暑假年度最盛大、最具代表性的活動之一，「2023臺灣國際熱氣球嘉年華」將於6月30日至8月28日在鹿野高台登場
                另外還有來自世界各國的造型球在鹿野高台輪番上陣，而結合臺東各地景點的熱氣球光雕音樂會也是每年不可錯過的重頭戲，今年更加碼無人機展演規模，從白天到夜晚，感受不同的熱氣球饗宴！（以下照片由臺東縣政府提供）
              </p>
              <br />
              <br />
              <p>
                長達60天的活動包含熱氣球自由飛行、造型球展演、熱氣球繫留體驗、光雕音樂會及無人機表演，全球唯一的「媽祖造型球」也將於今年活動亮相。
              </p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image src={BAN} className='activity__card--img' objectFit='cover' />
          <span className='activity__card--caption'>
            <h1>Fun遊茂林*清涼呷冰</h1>
            <footer className='activity__card--caption-content'>
              <p>
                臺灣國際熱氣球嘉年華是每年暑假年度最盛大、最具代表性的活動之一，「2023臺灣國際熱氣球嘉年華」將於6月30日至8月28日在鹿野高台登場
                另外還有來自世界各國的造型球在鹿野高台輪番上陣，而結合臺東各地景點的熱氣球光雕音樂會也是每年不可錯過的重頭戲，今年更加碼無人機展演規模，從白天到夜晚，感受不同的熱氣球饗宴！（以下照片由臺東縣政府提供）
              </p>
              <br />
              <br />
              <p>
                長達60天的活動包含熱氣球自由飛行、造型球展演、熱氣球繫留體驗、光雕音樂會及無人機表演，全球唯一的「媽祖造型球」也將於今年活動亮相。
              </p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image src={BAN} className='activity__card--img' objectFit='cover' />
          <span className='activity__card--caption'>
            <h1>阿里山四季茶侶*夏</h1>
            <footer className='activity__card--caption-content'>
              <p>
                臺灣國際熱氣球嘉年華是每年暑假年度最盛大、最具代表性的活動之一，「2023臺灣國際熱氣球嘉年華」將於6月30日至8月28日在鹿野高台登場
                另外還有來自世界各國的造型球在鹿野高台輪番上陣，而結合臺東各地景點的熱氣球光雕音樂會也是每年不可錯過的重頭戲，今年更加碼無人機展演規模，從白天到夜晚，感受不同的熱氣球饗宴！（以下照片由臺東縣政府提供）
              </p>
              <br />
              <br />
              <p>
                長達60天的活動包含熱氣球自由飛行、造型球展演、熱氣球繫留體驗、光雕音樂會及無人機表演，全球唯一的「媽祖造型球」也將於今年活動亮相。
              </p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image src={BAN} className='activity__card--img' objectFit='cover' />
          <span className='activity__card--caption'>
            <h1>東海岸大地藝術節暨月光海音樂節</h1>
            <footer className='activity__card--caption-content'>
              <p>
                臺灣國際熱氣球嘉年華是每年暑假年度最盛大、最具代表性的活動之一，「2023臺灣國際熱氣球嘉年華」將於6月30日至8月28日在鹿野高台登場
                另外還有來自世界各國的造型球在鹿野高台輪番上陣，而結合臺東各地景點的熱氣球光雕音樂會也是每年不可錯過的重頭戲，今年更加碼無人機展演規模，從白天到夜晚，感受不同的熱氣球饗宴！（以下照片由臺東縣政府提供）
              </p>
              <br />
              <br />
              <p>
                長達60天的活動包含熱氣球自由飛行、造型球展演、熱氣球繫留體驗、光雕音樂會及無人機表演，全球唯一的「媽祖造型球」也將於今年活動亮相。
              </p>
            </footer>
          </span>
        </section>
      </main>
    </article>
  );
};

export default MainActivity;
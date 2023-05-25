import {
  ACTIVITY,
  ACTIVITY01,
  ACTIVITY02,
  ACTIVITY03,
  ACTIVITY04,
} from '@helpers/imageImports';
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
          <Image
            src={ACTIVITY01}
            className='activity__card--img'
            objectFit='cover'
          />
          <span className='activity__card--caption'>
            <h1>島嶼生活節</h1>
            <footer className='activity__card--caption-content'>
              <p>
                和平島地質公園──世界的秘境，一處擁有鬼斧神工般的海蝕地質景觀，島嶼生活節於仲夏時節舉辦，規劃包含水域遊憩活動、在地音樂會、島嶼市集、地方小旅行、沈浸式體驗等，串連在地文化、地方特產等一系列活動，以推廣基隆和平島地區海洋觀光及永續旅遊，並以「永續發展、海洋療癒」為主要行銷亮點，提升地方品牌觀光產值，嚮往美麗海岸不必遠走國外，北海岸即可享受罕見瑰麗的海岸風情。
              </p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image
            src={ACTIVITY02}
            className='activity__card--img'
            objectFit='cover'
          />
          <span className='activity__card--caption'>
            <h1>Fun遊茂林*清涼呷冰</h1>
            <footer className='activity__card--caption-content'>
              <p>
                本活動以高雄觀光圈區域業者（包括台灣好行、台灣觀巴營運單位）為範圍，推出消費滿額享涼夏優惠（可為贈禮或折價券，如：冰品券、涼風扇、涼感巾）；兌換冰品、飲品種類有高山愛玉、香蕉清冰、果汁及山茶等消暑飲品。
              </p>
              <br />
              <br />
              <p>
                快閃集客活動、20家以上兌換商家、相關文宣（各店家及本處服務台桌面立牌）、於各店家宣傳之海報印刷寄送等。
              </p>
              <br />
              <br />
              <p>
                集客快閃活動預計辦理地點於高雄大遠百廣場，預計邀集高雄觀光圈15攤至20攤業者參加（擺攤內容物有愛玉、霜淇沐、原生山茶等消暑飲品）
              </p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image
            src={ACTIVITY04}
            className='activity__card--img'
            objectFit='cover'
          />
          <span className='activity__card--caption'>
            <h1>阿里山四季茶侶*夏</h1>
            <footer className='activity__card--caption-content'>
              <p>
                阿里山近年來致力推動主題旅遊，針對茶旅行，結合阿里山的茶產業跟觀光，今年變換四季茶會活動風格，能夠貼近更多不同的族群，希望未來到阿里山遊玩的不同需求都能夠得到滿足，也希望透過推動能夠使得阿里山的產業類別能夠有更多元的發展。
              </p>
              <br />
              <br />
              <p>
                阿里山四季茶旅特別以不同形式的茶會方式分別舉行春夏秋冬四場茶會，以活潑生動的方式吸引不同族群的遊客來場阿里山的茶旅觀光。
              </p>
              <br />
              <br />
              <p>
                阿里山四季茶旅預計於4月22日（星期六）、23日（星期日）辦理春季茶鄉音樂會、7月22日（星期六）辦理夏季茶風野餐日、9月9日（星期六）辦理秋季望山茶旅及忘森茶旅、11月25日（星期六）冬季尋根茶旅活動。
              </p>
              <br />
              <br />
              <p>
                用茶香搭配阿里山的四季地景風貌，品茗阿里山不同季節的茶湯滋味，體驗多元、精緻及深度的茶旅行程。
              </p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <Image
            src={ACTIVITY03}
            className='activity__card--img'
            objectFit='cover'
          />
          <span className='activity__card--caption'>
            <h1>東海岸大地藝術節暨月光海音樂節</h1>
            <footer className='activity__card--caption-content'>
              <p>
                台灣東海岸壯闊迷人，有時優美有時狂野，有時神秘有時外放，生活在其中的人們，寂靜而自然，樸實而自由，藝術家們在這裡找到靈魂，將五感細膩地浸注在創作當中，一幕與海路照映的裝置藝術，或是一首寫進心緒的樂曲，都在東海岸大地藝術節（TEC
                LandArt Festival）裡，共存相依。
              </p>
              <br />
              <br />
              <p>
                東海岸大地藝術節，是交通部東海岸國家風景管理處從2015年起舉辦，集結了自然環境、部落生活、棲息居住、旅行壯遊為主題的藝術節。
              </p>
              <br />
              <br />
              <p>
                活動包含「駐地創作」邀請海內外藝術家們，在東海岸進行藝術品創作，「藝術生活平台」將大小藝文空間串起來、「月光音樂會及創藝市集」依著月亮灑下的波光粼粼，配上表演者的演出，還有在地風味市集，夏日藝文饗宴，邀請旅人體驗這迷人的東海岸。
              </p>
            </footer>
          </span>
        </section>
      </main>
    </article>
  );
};

export default MainActivity;

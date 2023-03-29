import styles from './wonderOfWorld.module.scss'
import PageTitle from "../components/items/PageTitle"  
import WowPlanet from '../components/items/WowPlanet'
import WowContent from '../components/items/WowContent'
import Head from 'next/head'


export default function WonderOfWorld(){
    
    return(
        <>
        <Head>
          <title>ワンダーオブワールド / Wonder Of World</title>
        </Head>
        <main style={{background: '#2B2B2B'}}>
        <PageTitle 
        style={{color: '#ffffff'}}
        styleBorder={{background: '#ffffff'}}
        titleEn={'wonder\nof\nworld'}
        titleJp={'ワンダーオブワールド'}
        descTitle={'ワンダー オブ ワールド・惑星のものがたり'}
        desc={'太陽系を彩る惑星の数々。惑星はそれぞれに異なる特徴を持ち、太陽を軸に円周軌道を描いています。太陽系で一番多種多様で高密度な物質空間である地球。軌道の変化が大きくダイナミックな火星。地球の約11倍の大きさで質量が318倍もある木星…。個性豊かな惑星が今夜も天体を輝かせています。'}
        ></PageTitle>

        <div className={styles.hero}>
            <div className={styles.sun}></div>
            <div className={`${styles.planet} ${styles.planet0}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img0.png'} number={'00'} titleJp={'太陽'} titleEn={'Sun'} disc={'太陽系の主星。重力の中心。電磁波（光・熱）の放射源。水素とヘリウムの核融合からなる寿命約100億年の恒星。推定年齢は46億年ほど、現在は寿命の半分ほど経過してるとされます。太陽系の全質量の99%を占め、強い重力場によって惑星を動かしています。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet1}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img1.png'} number={'01'} titleJp={'水星'} titleEn={'Mercury'} disc={'太陽系一最速最短。強い重力場の中を楕円軌道で旋回。水星は地球暦の円盤上で1日で3〜7度も動き、太陽系全体の印象を変えていきます。水星は約2ヶ月で自転、約3ヶ月で公転、約4ヶ月で地球と会合し、1年間で太陽の周りを4周ほど回ります。月の周期を基本単位で考えると、自転:公転:会合=2:3:4の比率で捉えやすく短期の目安となる惑星です。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet2}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img2.png'} number={'02'} titleJp={'金星'} titleEn={'Venus'} disc={'太陽系一真円に近い軌道。地球にとって最も明るい星。「金星と地球の結び（内合）の前後に、「宵の明星」と「明けの明星」として肉眼ではっきりと見ることができます。近世の公転=584日は、それぞれの周期が黄金比（1:1.618）と近似しています。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet3}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img3.png'} number={'03'} titleJp={'地球'} titleEn={'Earth'} disc={'太陽系一多種多様。高密度な物質空間。光による季節変化。水や空気を豊富に蓄え、多様な生物が生存している太陽系唯一の惑星。地球に住む私たちにとって、地球の1日・1年は最も基本的な単位（モジュール）です。春分・夏至・秋分・当時は地球共通の認識であり、自転軸の傾きにより光の当たり方が各地域に特徴的な気候風土を生み出しています。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet10}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img10.png'} number={'04'} titleJp={'月'} titleEn={'Moon'} disc={'地球の衛星。潮汐力。生命のメトロノーム。月は自転（1日）と公転（1年）の周期が同じで、地球に対して常に同じ面を向けて回転しています。太陽と月はどちらも約27日周期で自転し、29日半で太陽と月は地球に対して同じ位置関係（新月〜新月）になります。月は地球の生物に大きな影響を与えています。人間も妊娠期間が10ヶ月、身体は1ヶ月で血液・肌・髪、2ヶ月で筋肉・3ヶ月で骨が代謝し、人の一生は約1000ヶ月と、生命活動のバイオリズムを刻んでいます。※妊娠期間は1ヶ月=28日'} />
            </div>
            <div className={`${styles.planet} ${styles.planet4}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img4.png'} number={'05'} titleJp={'火星'} titleEn={'Mars'} disc={'太陽系一地球に似た岩石型惑星。赤い輝く第2の地球。約1.5AU火星は大きな楕円軌道を描き、2年2ヶ月ほどで地球と会合し、15年に1回大接近します。起動の変化が大きくダイナミックで、ぶれ幅の少ない金星や地球とは対照的です。質量は地球の1/10程度で、太陽系を軽やかに飛び回っているようです。自転も軸の傾きも地球に似て、四季の変化があります。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet5}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img5.png'} number={'06'} titleJp={'木星'} titleEn={'Jupiter'} disc={'太陽系一大質量。大きさは地球の約11倍、質量は318倍。約5AU ※木星の12年周期は干支や十二進法のもととなり、中長期の目安となる惑星です。土星の30年周期と相性がよく、10年ごとに結びと開きを繰り返し、60年で木星は5公転し、一巡する周期を持っています。木星と土星のコンビネーションは、太陽系の中で最も大きな影響を持つと考えられます。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet6}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img6.png'} number={'07'} titleJp={'土星'} titleEn={'Saturn'} disc={'太陽系一巨大な輪。多数の衛星。約10AU ※土星の公転（29.5年）は、月（29.5日）で数えると約365ヶ月。土星の公転（365ヶ月）は、まるで地球の1年（365日）のようです。また29.5年は月のひと巡り（新月・上弦・満月・下弦）のように見立てることができ、地球や月と非常に相性のよい周期を持っています。古来より「時の神クロノス」とされ長期の目安となる惑星です。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet7}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img7.png'} number={'08'} titleJp={'天王星'} titleEn={'Uranus'} disc={'太陽系一傾いた輪。自転軸を向けて公転。約20AU ※天王星の位置は、1年ではほぼ変わりませんが、毎年少しずつ動き84年かけて公転しています。それはちょうど人の寿命ほどの長さで、天王星の1年が人の一生の時間とも言えます。天王星の周期は木星と相性が良く、84年の1周の間に木星（12年）は7周巡ります。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet8}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img8.png'} number={'09'} titleJp={'海王星'} titleEn={'Neptune'} disc={'太陽系の最遠惑星。地球よりも真円に近い軌道。約30AU ※海王星は秋季も距離も、天王星の約2倍で、165年かけて公転します。音楽では弦が倍の長さになると、音程がちょうど1オクターブ低くなるように、天王星と海王星は倍音のような関係にあります。私たちの一生よりも長い周期を持つ海王星は、ゆっくりと変化する時代を測るものさしのようです。'} />
            </div>
            <div className={`${styles.planet} ${styles.planet9}`}>
                 <WowPlanet srcIcon={'/cart.svg'} styleSize={{width: '40px', height: '40px'}} srcImg={'/wow/planet-img9.png'} number={'10'} titleJp={'冥王星'} titleEn={'Pluto'} disc={'太陽系外縁天体の代表格。約40AU ※冥王星は月よりも小さいため準惑星とされています。天王星84年・海王星165年・冥王星248年は、約1:2:3という整数比で周期的に共鳴関係にあります。特に海王星と冥王星の2:3は音楽的には最も安定した完全5度のハーモニーを奏でています。'} />
            </div>

  
        </div>

        <div className={styles.content}>
            <WowContent src={'/wow/planet-img0.png'} number={'00'} titleJp7={'太陽'} titleEn={'Sun'} disc={'太陽系の主星。重力の中心。電磁波（光・熱）の放射源。水素とヘリウムの核融合からなる寿命約100億年の恒星。推定年齢は46億年ほど、現在は寿命の半分ほど経過してるとされます。太陽系の全質量の99%を占め、強い重力場によって惑星を動かしています。'}  />
            <WowContent src={'/wow/planet-img1.png'} number={'01'} titleJp7={'水星'} titleEn={'Mercury'} disc={'太陽系一最速最短。強い重力場の中を楕円軌道で旋回。水星は地球暦の円盤上で1日で3〜7度も動き、太陽系全体の印象を変えていきます。水星は約2ヶ月で自転、約3ヶ月で公転、約4ヶ月で地球と会合し、1年間で太陽の周りを4周ほど回ります。月の周期を基本単位で考えると、自転:公転:会合=2:3:4の比率で捉えやすく短期の目安となる惑星です。'}  />
            <WowContent src={'/wow/planet-img2.png'} number={'02'} titleJp={'金星'} titleEn={'Venus'} disc={'太陽系一真円に近い軌道。地球にとって最も明るい星。「金星と地球の結び（内合）の前後に、「宵の明星」と「明けの明星」として肉眼ではっきりと見ることができます。近世の公転=584日は、それぞれの周期が黄金比（1:1.618）と近似しています。'}  />
            <WowContent src={'/wow/planet-img3.png'} number={'03'} titleJp={'地球'} titleEn={'Earth'} disc={'太陽系一多種多様。高密度な物質空間。光による季節変化。水や空気を豊富に蓄え、多様な生物が生存している太陽系唯一の惑星。地球に住む私たちにとって、地球の1日・1年は最も基本的な単位（モジュール）です。春分・夏至・秋分・当時は地球共通の認識であり、自転軸の傾きにより光の当たり方が各地域に特徴的な気候風土を生み出しています。'}  />
            <WowContent src={'/wow/planet-img10.png'} number={'04'} titleJp={'月'} titleEn={'Moon'} disc={'地球の衛星。潮汐力。生命のメトロノーム。月は自転（1日）と公転（1年）の周期が同じで、地球に対して常に同じ面を向けて回転しています。太陽と月はどちらも約27日周期で自転し、29日半で太陽と月は地球に対して同じ位置関係（新月〜新月）になります。月は地球の生物に大きな影響を与えています。人間も妊娠期間が10ヶ月、身体は1ヶ月で血液・肌・髪、2ヶ月で筋肉・3ヶ月で骨が代謝し、人の一生は約1000ヶ月と、生命活動のバイオリズムを刻んでいます。※妊娠期間は1ヶ月=28日'}  />
            <WowContent src={'/wow/planet-img4.png'} number={'05'} titleJp={'火星'} titleEn={'Mars'} disc={'太陽系一地球に似た岩石型惑星。赤い輝く第2の地球。約1.5AU火星は大きな楕円軌道を描き、2年2ヶ月ほどで地球と会合し、15年に1回大接近します。起動の変化が大きくダイナミックで、ぶれ幅の少ない金星や地球とは対照的です。質量は地球の1/10程度で、太陽系を軽やかに飛び回っているようです。自転も軸の傾きも地球に似て、四季の変化があります。'}  />
            <WowContent src={'/wow/planet-img5.png'} number={'06'} titleJp={'木星'} titleEn={'Jupiter'} disc={'太陽系一大質量。大きさは地球の約11倍、質量は318倍。約5AU ※木星の12年周期は干支や十二進法のもととなり、中長期の目安となる惑星です。土星の30年周期と相性がよく、10年ごとに結びと開きを繰り返し、60年で木星は5公転し、一巡する周期を持っています。木星と土星のコンビネーションは、太陽系の中で最も大きな影響を持つと考えられます。'}  />
            <WowContent src={'/wow/planet-img6.png'} style={{width: '170px', transform: 'translateX(-30px)'}} number={'07'} titleJp={'土星'} titleEn={'Saturn'} disc={'太陽系一巨大な輪。多数の衛星。約10AU ※土星の公転（29.5年）は、月（29.5日）で数えると約365ヶ月。土星の公転（365ヶ月）は、まるで地球の1年（365日）のようです。また29.5年は月のひと巡り（新月・上弦・満月・下弦）のように見立てることができ、地球や月と非常に相性のよい周期を持っています。古来より「時の神クロノス」とされ長期の目安となる惑星です。'}  />
            <WowContent src={'/wow/planet-img7.png'} number={'08'} titleJp={'天王星'} titleEn={'Uranus'} disc={'太陽系一傾いた輪。自転軸を向けて公転。約20AU ※天王星の位置は、1年ではほぼ変わりませんが、毎年少しずつ動き84年かけて公転しています。それはちょうど人の寿命ほどの長さで、天王星の1年が人の一生の時間とも言えます。天王星の周期は木星と相性が良く、84年の1周の間に木星（12年）は7周巡ります。'}  />
            <WowContent src={'/wow/planet-img8.png'} number={'09'} titleJp={'海王星'} titleEn={'Neptune'} disc={'太陽系の最遠惑星。地球よりも真円に近い軌道。約30AU ※海王星は秋季も距離も、天王星の約2倍で、165年かけて公転します。音楽では弦が倍の長さになると、音程がちょうど1オクターブ低くなるように、天王星と海王星は倍音のような関係にあります。私たちの一生よりも長い周期を持つ海王星は、ゆっくりと変化する時代を測るものさしのようです。'}  />
            <WowContent src={'/wow/planet-img9.png'} number={'10'} titleJp={'冥王星'} titleEn={'Pluto'} disc={'太陽系外縁天体の代表格。約40AU ※冥王星は月よりも小さいため準惑星とされています。天王星84年・海王星165年・冥王星248年は、約1:2:3という整数比で周期的に共鳴関係にあります。特に海王星と冥王星の2:3は音楽的には最も安定した完全5度のハーモニーを奏でています。'}  />
        </div>
       
        </main>
     </>
    )
}
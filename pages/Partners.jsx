import Head from 'next/head';
import styles from './partners.module.scss'
import PageTitle from '../components/items/PageTitle'
import PartnerContent from '../components/items/PartnerContent';
import { faZ } from '@fortawesome/free-solid-svg-icons';

export default function Partners() {

  {console.log(partnersLlist);}

    return (
      <>
        <Head>
          <title>パートナー&ショップ / Partner & Shop</title>
        </Head>
        <main>
             <PageTitle 
        style={{color: '#333'}}
        styleBorder={{background: '#333'}}
        titleEn={'partner\n&\nshop'}
        titleJp={'パートナー＆ショップ'}
        descTitle={'パートナー＆ショップ'}
        desc={'地球暦を取り扱っている全国のショップとパートナーの一覧です。お近くの店舗で実際に地球暦を手にとり、触れてみてください。円環に表現された天体や季節の情報、細部までこだわった精緻なデザインは、あなたの創造性を広げてくれるはずです。また、地球暦では販売代理店を随時、募集しています。お気軽にお問い合わせください。'}
        ></PageTitle>

        <div className={styles.content}>
            <div className={styles.desc}>
                <p>地球暦は全国の以下の店舗にてお求めいただけます</p>
            </div>

            <div className={styles.partners}>
              {partnersLlist.map((item, i) => (
                  <div className={styles.box} key={i}>
                    <PartnerContent className={styles.box} name={item.shopName} address={item.address} tel={item.tel} web={item.website} />
                  </div>

              ))}
            </div>

            {/* <div className={styles.partners}>
                     <div className={styles.box}><PartnerContent className={styles.box} name={'ツムギテ'} address={'〒078-8350 北海道旭川市東光10条4丁目5-2三浦マンション3号室（一階奥）'} tel={'090-9521-7952'} web={'http://tsumugite.net/'} /></div>
                     <div className={styles.box}><PartnerContent name={'ルミ・カペ'} address={'〒089-1242 北海道 帯広市⼤正町基線96-5'} tel={'　'} web={'http://ameblo.jp/rumikapert'} /></div>
                     <div className={styles.box}><PartnerContent name={'たべるとくらしの研究所'} address={'〒064-0809 北海道札幌市中央区南九条西11丁目3-12'} tel={'011-522-8235'} web={'http://www.taberutokurashi.com'} /></div>
                     <div className={styles.box}><PartnerContent name={'有限会社エッセンチア'} address={'〒064-0820 北海道札幌市中央区⼤通⻄20丁⽬1-3 ZONE1F'} tel={'011-633-3734'} web={'http://www.essentia-allone.com'} /></div>
                     <div className={styles.box}><PartnerContent name={'こよみファクトリー'} address={'〒0050021 札幌市南区真駒内本町5丁目4-2 space Aida 7.8'} tel={'090-3773-4604'} web={'http://ameblo.jp/ahokira-jhonco'} /></div>
                
                     <div className={styles.box}><PartnerContent name={'Niseko有島organic shop あまからや'} address={'〒048-1531 北海道虻⽥郡ニセコ町有島112-19'} tel={'090-5989-4822'} web={'nisekoamakara@gmail.com'} /></div>
                     <div className={styles.box}><PartnerContent name={'合同会社 番-TSUGAI-'} address={'〒048-0621 北海道島牧郡島牧村泊44'} tel={''} web={'http://tsugai.net'} /></div>
                     <div className={styles.box}><PartnerContent name={'こびっとBOOKS（Earth Spiral)'} address={'〒969-2701 福島県耶麻郡北塩原村桧原曽原山1096-108'} tel={'　'} web={'https://earthspiral.jp'} /></div>
                     <div className={styles.box}><PartnerContent name={'UNSUI WORKS ima'} address={'〒370-0133 群馬県伊勢崎市堺中島695'} tel={'0270-75-4523'} web={'http://www.i-m-a.biz/'} /></div>
                     <div className={styles.box}><PartnerContent name={'農⽂協・農業書センター'} address={'〒101-0051 東京都千代⽥区神⽥神保町2-15-2 第⼀冨⼠ビル３階'} tel={'03-6261-4760'} web={'http://www.ruralnet.or.jp/avcenter/'} /></div>

                     <div className={styles.box}><PartnerContent name={'学校地球暦プロジェクト事務局'} address={'〒108-8636 東京都港区白金台1-2-37 明治学院大学心理学部 渋谷研究室内'} tel={'03-5421-5366'} web={'mshibuya@psy.meijigakuin.ac.jp'} /></div>
                     <div className={styles.box}><PartnerContent name={'ナワ・プラサード'} address={'〒167-0053 杉並区⻄荻南3-15-3 ほびっと村3F'} tel={'03-3332-1187'} web={'http://www.nabra.co.jp/hobbit/'} /></div>
                     <div className={styles.box}><PartnerContent name={'PAPERSKY Store'} address={'ネットショップ'} tel={'　'} web={'https://store.papersky.jp'} /></div>
                     <div className={styles.box}><PartnerContent name={'カムワッカ'} address={'ネットショップ'} tel={'027-266-6401'} web={'http://camwacca.jp/'} /></div>
                     <div className={styles.box}><PartnerContent name={'はち (マリポの家内)'} address={'〒292-1164 千葉県君津市東日笠421'} tel={'050-5235-3721'} web={'http://www.maripo.net/'} /></div>

                     <div className={styles.box}><PartnerContent name={'るんた'} address={'〒2991906 千葉県安房郡鋸南町横根217'} tel={'　'} web={'http://lungta.petit.cc'} /></div>
                     <div className={styles.box}><PartnerContent name={'星⽉舎'} address={'〒248-0032 神奈奈川県鎌倉市津1147-81'} tel={'080-1068-9037'} web={'http://hoshizukisha.com'} /></div>
                     <div className={styles.box}><PartnerContent name={'てぬぐいカフェ 一花屋(いちげや)'} address={'〒2480021 神奈川県鎌倉市坂ノ下18-5'} tel={'467249232'} web={'http://ichigeya.petit.cc'} /></div>
                     <div className={styles.box}><PartnerContent name={'PARADISE ALLEY BREAD&CO.'} address={'〒248-0006 神奈川県鎌倉市小町1-13-10市場内'} tel={'070-6656-9612'} web={'http://cafecactus5139.com/paradisealley/'} /></div>
                     <div className={styles.box}><PartnerContent name={'食堂COBAKABA コバカバ'} address={'〒248-0006 神奈川県鎌倉市 小町1丁目13-15'} tel={'　'} web={'https://www.facebook.com/COBAKABA/'} /></div>

                     <div className={styles.box}><PartnerContent name={'Happy village farm'} address={'〒390-1401 ⻑野県 松本市 波⽥6183-28'} tel={'0263-91-1338'} web={'http://shop.happyvillagefarm.com/'} /></div>
                     <div className={styles.box}><PartnerContent name={'ハートサロンこのはな'} address={'〒418-0023 静岡県富⼠宮市⼭本608-27'} tel={'090-2341-6064'} web={'　'} /></div>
                     <div className={styles.box}><PartnerContent name={'Rama'} address={'〒422-8052 静岡県静岡市駿河区緑が丘町19-6'} tel={'054-260-5186'} web={'http://www.rama-art.com'} /></div>
                     <div className={styles.box}><PartnerContent name={'丁⼦屋'} address={'〒421-0103 静岡県静岡市駿河区丸子7-10-10'} tel={'054-258-1066'} web={'　'} /></div>
                     <div className={styles.box}><PartnerContent name={'楽しみそ'} address={'〒420-0881 静岡県静岡市葵区北北安東5-44-8'} tel={'090-9227-3535'} web={'http://www.geocities.jp/omiso35/miso1/'} /></div>

                     <div className={styles.box}><PartnerContent name={'魂と⾝体のリトリートサロン「神倭」'} address={'〒432-8021 静岡県浜松市中区佐鳴台2-16-22'} tel={'090-4254-7454'} web={'　'} /></div>
                     <div className={styles.box}><PartnerContent name={'茶房 梅茶翁'} address={'〒927-0311 石川県鳳珠郡能都町字瑞穂18字院内83'} tel={'090-9339-0039'} web={'http://baisaou-noto.blogspot.jp/'} /></div>
                     <div className={styles.box}><PartnerContent name={'山本屋'} address={'〒501-5627 岐⾩県⼤野郡⽩川村荻町775'} tel={'05769-6-1064'} web={'　'} /></div>
                     <div className={styles.box}><PartnerContent name={'五感の館ドュースフレール'} address={'〒506-0007 岐阜県高山市総和町3-49-1'} tel={'0577-35-3480'} web={'http://www.douce-fleur.com/'} /></div>
                     <div className={styles.box}><PartnerContent name={'蒲御厨(かばのみくりや)おかげ朝市'} address={'〒430-0802 静岡県浜松市東区将監町16-13'} tel={'090-1781-5962'} web={'https://www.yamakou.co/okageasaichi'} /></div>
                
                     <div className={styles.box}><PartnerContent name={'十字の漢方'} address={'〒486-0943 愛知県春日井市角崎町95-1'} tel={'0568-31-2025'} web={'http://www.woman-kanpou.com'} /></div>
                     <div className={styles.box}><PartnerContent name={'gallery feel art zero'} address={'〒461-0004 愛知県名古屋市東区葵2-3-4三光ビル 1F'} tel={'052-932-2090'} web={'http://www.life-deco.net'} /></div>
                     <div className={styles.box}><PartnerContent name={'宙の学舎'} address={'〒519-2211 三重県多気郡多気町丹生1756'} tel={'080-7880-8179'} web={'http://soranoiee.exblog.jp'}/></div>
                     <div className={styles.box}><PartnerContent name={'WHAT A PARADISE 古民家スペース和み庵'} address={'〒515-0317 三重県多気郡明和町池村1370'} tel={'080-5104-4913'} web={'http://whataparadise.com'} /></div>
                     <div className={styles.box}><PartnerContent name={'ハートヒーリング つきとあそぶ'} address={'〒520-2102 滋賀県⼤津市松が丘7丁⽬15-3'} tel={'070-654-78170'} web={'　'} /></div>

                     <div className={styles.box}><PartnerContent name={'山幸(やまこう) | 森のエネルギーかろり'} address={'〒689-1425 鳥取県八頭郡智頭町福原294'} tel={'089-924-7716'} web={'https://www.yamakou.co'} /></div>
                     <div className={styles.box}><PartnerContent name={'自然歯科診療所'} address={'〒790-0003 愛媛県松⼭市三番町5-6-11三番町トキワ ビル1F'} tel={'090-9006-5670'} web={'https://ameblo.jp/sizensika'} /></div>
                     <div className={styles.box}><PartnerContent name={'オーガニックゲストハウス＆カフェ OHANA in 御島'} address={'〒794-1304 愛媛県今治市大三島町宮浦5341'} tel={'0897-82-0023'} web={'https://twitter.com/100y_island'} /></div>
                     <div className={styles.box}><PartnerContent name={'古民家サロンTerra'} address={'〒800-0253 福岡県北九州市小倉南区葛原本町2-3-7'} tel={'090-2853-0557'} web={'http://r.goope.jp/terra'} /></div>
                     <div className={styles.box}><PartnerContent name={'てのひらや'} address={'〒906-0013 沖縄県宮古島市平良下里486-1M・アドヴァンス202号'} tel={'090-6422-5056'} web={'　　'} /></div>

            </div> */}
        </div>

        </main>
        </>
    );
}

const partnersLlist = [
    {
      "name": "土屋拓人",
      "shopName": "会員制無人販売所土屋商店",
      "email": "takutotsuchiya@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒252-0185 神奈川県 相模原市緑区"
    },
    {
      "name": "ナツマヤ",
      "shopName": "アソビバ　うちゅうねこ",
      "email": "natsumaya09@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒639-3111 奈良県 吉野郡吉野町窪垣内203"
    },
    {
      "name": "阿部　久美子",
      "shopName": "有限会社エッセンチア",
      "email": "rose@essentia-allone.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒064-0820 北海道 札幌市中央区 大通西20丁目１－３"
    },
    {
      "name": "山根美保子",
      "shopName": "いろときし色葉",
      "email": "irotokishi@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒432-8068 静岡県 浜松市西区 大平台"
    },
    {
      "name": "ジャンクロック　真由",
      "shopName": "natural design ukA",
      "email": "mayu.natural.uka@gmail.com",
      "website": "https://u-k-a.ocnk.net",
      "workshop": "",
      "tel": "",
      "address": "〒600-8493 京都府 京都市下京区"
    },
    {
      "name": "宇井新",
      "shopName": "カムワッカ",
      "email": "info@camwacca.jp",
      "website": "",
      "workshop": "",
      "tel": "027-226-6401",
      "address": "〒379-2131 群馬県 前橋市 西善町2004番地 アサヒアクシス株式会社"
    },
    {
      "name": "山本愛子",
      "shopName": "煤と棲む山本屋",
      "email": "chenmail.com@i.softbank.jp",
      "website": "",
      "workshop": true,
      "tel": "080-1950-6818",
      "address": "〒501-5627 岐阜県 大野郡白川村 荻町775"
    },
    {
      "name": "藤崎幸代",
      "shopName": "TERRA",
      "email": "terra.sachi.77@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒800-0253 福岡県 北九州市小倉南区"
    },
    {
      "name": "ミモトナオコ",
      "shopName": "Relaxation Pilates three",
      "email": "relaxation.pilates.three@gmail.com",
      "website": "",
      "workshop": "西洋占星術好きな方向け地球暦活用ワークショップ(お問い合わせください)",
      "tel": "089-906-4185",
      "address": "愛媛県 松山市"
    },
    {
      "name": "松村有香里",
      "shopName": "自然歯科診療所",
      "email": "imacocosika@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒790-0003 愛媛県 松山市 三番町5-6-11 三番町トキワビル一階自然歯科"
    },
    {
      "name": "内堀敬介",
      "shopName": "コバカバ",
      "email": "cobakaba@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒248-0006 神奈川県 鎌倉市 小町"
    },
    {
      "name": "井出洋子",
      "shopName": "Lights heart このはな",
      "email": "amane88haruki@icloud.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒418-0023 静岡県 富士宮市"
    },
    {
      "name": "嘉代美帆",
      "shopName": "神倭",
      "email": "kan.yamato.kami@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒432-8021 静岡県 浜松市中区"
    },
    {
      "name": "吉永　恵",
      "shopName": "Hoshigumi",
      "email": "hoshigumi.dly@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒437-0040 静岡県 袋井市"
    },
    {
      "name": "虎井美侑季",
      "shopName": "五感の館ドュースフレール",
      "email": "douce.f.myk@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒5060007-0007 岐阜県 高山市"
    },
    {
      "name": "辻奉歩ルミ子",
      "shopName": "ルミ・カペ",
      "email": "rumikape@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒089-1242 北海道 帯広市 大正町"
    },
    {
      "name": "寿山株式会社",
      "shopName": "寿山株式会社",
      "email": "suzuna@juzan.jp",
      "website": "",
      "workshop": true,
      "tel": "090-3010-8484",
      "address": "〒892-0805 鹿児島県 鹿児島市 大竜町13-12 上園ビル201"
    },
    {
      "name": "川崎由依子",
      "shopName": "じぞうど",
      "email": "jizoudo.info@gmail.com",
      "website": "",
      "workshop": "暦のお話会やっています",
      "tel": "",
      "address": "〒646-1416 和歌山県 田辺市"
    },
    {
      "name": "中地佳子",
      "shopName": "green stone",
      "email": "greenstone.katano@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒576-0033 大阪府 交野市"
    },
    {
      "name": "中森真子",
      "shopName": "こびっとBOOKS",
      "email": "aromagroove@gmail.com",
      "website": "",
      "workshop": true,
      "tel": "",
      "address": "〒969-2701 福島県 耶麻郡北塩原村桧原曽原山 1096‐108"
    },
    {
      "name": "柴崎和哉",
      "shopName": "三峯ちどりや",
      "email": "mitsuminechidoriya888@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒369-1902 埼玉県 秩父市 三峰120 三峯ちどりや"
    },
    {
      "name": "石綿薫",
      "shopName": "Happy village farm",
      "email": "happyvillagefarm@gmail.com",
      "website": "",
      "workshop": true,
      "tel": "",
      "address": "〒390-1401 長野県 松本市 波田6183-28"
    },
    {
      "name": "冨田貴史",
      "shopName": "スリーリングス",
      "email": "info@3rings.shop",
      "website": "",
      "workshop": true,
      "tel": "",
      "address": "〒532-0011 大阪府 大阪市淀川区 西中島"
    },
    {
      "name": "中地佳子",
      "shopName": "グリーンストーン",
      "email": "greenstone.katano@gmail.com",
      "website": "",
      "workshop": "",
      "tel": "",
      "address": "〒576-0033 大阪府 交野市 私市4丁目15-9"
    },
    {
      "name": "松本かおり",
      "shopName": "ゆるりがもり",
      "email": "3939fukusuke@ezweb.ne.jp",
      "website": "",
      "workshop": "",
      "tel": "090-4217-4423",
      "address": "〒475-0936 愛知県 半田市 板山町13-145-1"
    },
    {
      "name": "",
      "shopName": "一花屋",
      "email": "",
      "website": "",
      "workshop": "",
      "tel": "0467-24-9232",
      "address": "神奈川県鎌倉市坂ノ下18-5"
    },
    {
      "name": "",
      "shopName": "Paradise alley",
      "email": "",
      "website": "https://cafecactus5139.com/",
      "workshop": "",
      "tel": "",
      "address": "神奈川県鎌倉市小町1-13-10"
    },
    {
      "name": "",
      "shopName": "農業書センター",
      "email": "",
      "website": "https://www.ruralnet.or.jp/avcenter/",
      "workshop": "",
      "tel": "03-6261-4760",
      "address": "〒101-0051 東京都千代田区神田神保町3-1-6 日建ビル2F"
    },
    {
      "name": "濱口将成",
      "shopName": "地球暦事務局",
      "email": "ha-ma@heliostera.com",
      "website": "",
      "workshop": true,
      "tel": "",
      "address": "愛知県日進市"
    },
    {
      "name": "",
      "shopName": "あわ里山ごはん るんた",
      "email": "",
      "website": "https://www.awalungta.com/",
      "workshop": "",
      "tel": "",
      "address": ""
    }
]
import React from 'react'
import PropTypes from 'prop-types'

import banner_budpirat from '../images/banners/budpirat.jpg'
import banner_zmena from '../images/banners/zmena.jpg'
import banner_pirati from '../images/banners/pirati.jpg'
import banner_program from '../images/banners/program.jpg'
import team_andrej from '../images/team/andrej.png'
import team_daniel from '../images/team/daniel.png'
import team_janka from '../images/team/janka.png'
import team_pavla from '../images/team/pavla.png'
import team_silvester from '../images/team/silvester.png'
import team_tomas from '../images/team/tomas.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        {/* 
          PIRATI page
        */}
        < article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <span className="image main"><img src={banner_pirati} alt="" /></span>
          <h1 className="article_heading major">Piráti vo svete</h1>
          <p>Reforma patentového systému, Transparentnosť, Občianske práva sú len malou časťou programu Pirátskych strán po celom svete. V Európskej Únii pôsobí na medzinárodnej úrovni pod značkou <a href="https://europeanpirateparty.eu/">PP-EU</a>. Cieľom Pirátskeho hnutia je “prispôsobením formálnej, aj obsahovej stránky politiky neustále sa zrýchľujúcemu technologickému pokroku zvýšiť úroveň demokracie”. </p>
          <p>Prvá Pirátska strana vznikla vo Švédsku a odtiaľ sa rýchlo rozšírila do celého sveta. V Nemecku sa Pirátom podarilo okrem lokálnych úspechov aj dostať svojho reprezentanta do Europarlamentu. Relatívne veľké úspechy slávili tiež Islandskí Piráti, ktorý sa opakovane dostávajú do Althingu. V posledných voľbách sa darilo aj Luxemburským Pirátom. Najrelevantnejšou stranou sa stali <a href="https://www.pirati.cz/">Piráti</a> zo susedného Česka, kde sú treťou najsilnejšou stranou snemovne, a ich zástupci sú v koalícii v troch najväčších mestách a v Prahe majú priamo starostu.</p>
          <h1 className="article_heading major">Piráti na Slovensku</h1>
          <p>Na Slovensku už takmer 10 rokov pôsobí občianske združenie Slovenská pirátska strana, ktoré je členom Pirátskej internacionály. S nadchádzajúcimi eurovoľbami však pracujeme na tom, aby sa nám podarilo založiť skutočnú politickú stranu. V súčasnosti sme preto web prepracovali na web prípravného výboru vznikajúcej Slovenskej pirátskej strany. Keďže pre Pirátov na celom svete je samozrejmá transparentnosť a participácia občanov, zverejňujeme transparentný účet občianskeho združenia a návrh stanov budúcej strany, ktorý je otvorený komentárom.</p>
          {close}
        </article>

        {/* 
          PROGRAM page
        */}
        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <span className="image main"><img src={banner_program} alt="" /></span>
          <h1 className="major">Program</h1>
          <p>Informačná revolúcia zmenila skoro každú sféru našeho života, iba politika sa stále drží dvesto rokov starých princípov. Vízia svetového pirátskeho hnutia je demokracia pre 21. Storočie. Demokracia, v ktorej štát slúži občanovi, nešikanuje ho ale dáva mu slobodu sa prejaviť a usilovať svojim vlastným spôsobom o životné šťastie. Demokracia v ktorej občania participujú na moci viac ako hodením obálky raz za štyri roky. Skrátka demokracia o akej vizionári minulosti snívali, no až dnešné technológie nám umožňujú sa jej priblížiť. K hlavným myšlienkam patrí: </p>
          <ul>
            <li>Absolútna transparentnosť politiky</li>
            <li>Digitalizácia verejnej sféry</li>
            <li>Zásadná reforma vzdelávania</li>
            <li>Občianska spoločnosť</li>
            <li>Zrozumiteľnosť zákonov</li>
            <li>Udržateľná ekonomika</li>
            <li>Sloboda jednotlivca</li>
            <li>Ochrana životného prostredia</li>
          </ul>
          <p>Program európskych pirátskych strán má základ v <a href="https://docs.google.com/document/d/10DiyWZw45iT6GnqwLqe7b_hUf6Xt3Af1tGmg_Tato8c/edit">Manifeste PP-EU</a>. Náš návrh programu má základ v poslednom programe PP-CZ. Odkaz je na dokument v ktorom môže ktokoľvek komentovať a pridávať nové nápady: ROZPRACOVANÝ NÁVRH PROGRAMU PP-SK</p>
          {close}
        </article>

        {/* 
          LUDIA page
        */}
        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>

          <h1 className="people_heading major">Prípravný výbor</h1>

          <span className="image main"><img src={team_daniel} alt="Daniel Mičiak" className="person_pic" /></span>
          <div className="person_wrapper">
            <h3 className="team_name">Daniel Mičiak</h3>
            <p className="team_text">38 rokov, narodil sa v Trnave, vyrastal v Nitre, momentálne žije a pôsobí v Bratislave. Vyštudoval právo na Právnickej fakulte Univerzity Komenského v Bratislave. Titul „doktor práv“ (v skratke „JUDr.“) získal na Fakulte práva PEVŠ v Bratislave – rigoróznu prácu nemá utajenú. Pôsobí ako advokát.</p>
            <h4 className="team_mail">danjel.miciak@piratskastrana.sk</h4>
          </div>

          <span className="image main"><img src={team_tomas} alt="Tomáš Vojtek" className="person_pic" /></span>
          <div className="person_wrapper">
            <h3 className="team_name">Tomáš Vojtek</h3>
            <p className="team_text">37 rokov, narodený v Dolnom Kubíne, pôsobiaci v Bratislave. Vyštudoval Ekonomickú univerzitu v Bratislave - odbor manažment, ktorému sa venuje doteraz a pracuje ako obchodný manažér.</p>
            <h4 className="team_mail">tomas.vojtek@piratskastrana.sk</h4>
          </div>

          <span className="image main"><img src={team_janka} alt="Jana Bódišová" className="person_pic" /></span>
          <div className="person_wrapper">
            <h3 className="team_name">Jana Bódišová</h3>
            <p className="team_text">34 rokov, žije v Bratislave a pochádza z Krupiny. Vyštudovala Matematickú štatistiku - finančnú matematiku na Prírodovedeckej fakulte Univerzity Mateja Bella. Pracuje ako aktuár v životnej poisťovni.</p>
            <h4 className="team_mail">jana.bodisova@piratskastrana.sk</h4>
          </div>

          <span className="image main"><img src={team_silvester} alt="Silvester Buček" className="person_pic" /></span>
          <div className="person_wrapper">
            <h3 className="team_name">Silvester Buček</h3>
            <p className="team_text">33 rokov, pochádza z Bratislavy, kde sa vrátil po takmer desiatich rokoch života v Brne. Absolvoval politológiu a mediálne štúdiá na Masarykovej Univerzite kde v súčasnosti pôsobí ako pedagóg. Venuje sa taktiež hernému dizajnu a vzdelávaniu v oblast informačnýchi technológií.</p>
            <h4 className="team_mail">silvester.bucek@piratskastrana.sk</h4>
          </div>

          <span className="image main"><img src={team_andrej} alt="Andrej Bódiš" className="person_pic" /></span>
          <div className="person_wrapper">
            <h3 className="team_name">Andrej Bódiš</h3>
            <p className="team_text">35 rokov, žije v Bratislave kde sa aj narodil. Vyštudoval ZSŠD Pavlovičova v Bratislave odbor Nábytkár, stolár. Aktuálne je podnikateľ a živí sa montážou nábytku na mieru.</p>
            <h4 className="team_mail">andrej.bodis@piratskastrana.sk</h4>
          </div>

          <span className="image main"><img src={team_pavla} alt="Pavlína Vojteková" className="person_pic" /></span>
          <div className="person_wrapper">
            <h3 className="team_name">Pavlína Vojteková</h3>
            <p className="team_text">34 rokov, narodená v Dunajskej Strede. Vyštudovala odbor Psychológia na UCM v Trnave. Od ukončenia štúdia pracuje v oblasti ľudských zdrojov, aktuálne na pozícií HR manager.</p>
            <h4 className="team_mail">pavlina.vojtekova@piratskastrana.sk</h4>
          </div>

          {close}
        </article>

        {/* 
          #BUDPIRAT page
        */}
        <article id="bepirate" className={`${this.props.article === 'bepirate' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <span className="image main"><img src={banner_budpirat} alt="" /></span>
          <h1 className="major">Prečo názov piráti?</h1>
          <p>Názov Pirátskeho hnutia nie je nejaká náhoda. Z pôvodne ironického názvu sa pomerne rýchlo stala vážna vec. Celé to začalo vo Švédsku, sídle legendárneho torrentového webu Thepiratebay. V reakcii na zmeny v distribúcii hudby, filmov začali kritici nazývať ľudí zdieľajúcich a sťahujúcich si zadarmo obsah pirátmi. Ako to tak býva, internet to hneď obrátil a niektorí začali túto nálepku nosiť s hrdosťou, tak ako napríklad spomínaný Thepiratebay, z ktorého sa stala najpopulárnejšia stránka na vyhľadávanie torrentov a stala sa tak symbolom boja proti mediálnym monopolom. Vďaka tomu sa ocitla v hľadáčiku politikov ktorí ju zakázali napriek tomu, že neporušovala žiadny zákon. Zakladateľ Rick Falkvinge si preto povedal, že založí stranu, ktorá jasne definuje zákony ohľadom kopírovania a zdieľania obsahu. Keď svoj nápad zdieľal verejnosti, veľmi rýchlo sa ukázalo, že nedokonalé kopírovacie zákony sú len maličkosťou v porovnaní s tým, ako štátna moc nereaguje na prudké technologické zmeny všeobecne. Skrátka že politika zaspala v 20. Storočí, zatiaľ čo spoločnosť sa raketovo rúti do budúcnosti.</p>
          <p>Pirátska strana sa tak stala symbolom boja za modernú demokraciu, za svet kde technológie slúžia všetkým ľuďom a nie len vyvoleným. Samozrejme netrvalo dlho a myšlienka sa ujala aj v iných krajinách a Pirátske hnutie sa začalo rozrastať do celého sveta.</p>
          <h1 className="major">Piráti vo svete</h1>
          <p>Reforma patentového systému, transparentnosť a občianske práva sú len malou časťou programu Pirátskych strán po celom svete, ktoré sa združujú pod Piráskou internacionálou. V Európskej Únii pôsobia na medzinárodnej úrovni pod značkou PP-EU. Cieľom Pirátskeho hnutia je “prispôsobením formálnej, aj obsahovej stránky politiky neustále sa zrýchľujúcemu technologickému pokroku zvýšiť úroveň demokracie”. Prvá Pirátska strana vznikla vo Švédsku a odtiaľ sa rýchlo rozšírila do celého sveta. V Nemecku sa Pirátom podarilo okrem lokálnych úspechov aj dostať svojho reprezentanta do Europarlamentu. Relatívne veľké úspechy slávili tiež Islandskí Piráti, ktorý sa opakovane dostávajú do Althingu. V posledných voľbách sa darilo aj Luxemburským Pirátom. Najrelevantnejšou stranou sa stali Piráti zo susedného Česka, kde sú treťou najsilnejšou stranou snemovne, a ich zástupcovia sú v koalícii v troch najväčších mestách a v Prahe majú priamo starostu. </p>
          {close}
        </article>

        {/* 
          #ZMENA page
        */}
        <article id="change" className={`${this.props.article === 'change' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h1 className="major">ZMEŇ SLOVENSKO</h1>
          <span className="image main"><img src={banner_zmena} alt="" /></span>
          <p>
            <a href="../images/download/podpisovy_harok.pdf" target="_blank"> podpisový hárok SPS </a>
          </p>
          <p>Slovenská pirátska stranka potrebuje 10 000 podpisov, aby nastala zmena! <br /> Stiahni! Vytlač! Podpíš! Pošli!</p>
          {close}
        </article>

        {/* 
          KONTAKT page
        */}
        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h1 className="major">Kontakt</h1>
          <form method="post" action="https://formspree.io/hr@piratskastrana.sk">
            <div className="field half first">
              <label htmlFor="name">Vaše meno</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Správa</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Odošli správu" className="special" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>
      </div >
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
// 터미널에 git init, chages 안에 있는건 변경사항을 표기해주는 것
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="wrap">
      <header>
        <a class="logo" href="#home">
          <img src="https://poiemaweb.com/img/logo.png" />
        </a>
        <nav>
          <ul class="nav-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="content-wrap">
        <aside>
          <h1>Aside</h1>
          <ul>
            <li>
              <a href="#" class="active">
                London
              </a>
            </li>
            <li>
              <a href="#">Paris</a>
            </li>
            <li>
              <a href="#">Tokyo</a>
            </li>
            <li>
              <a href="#">Newyork</a>
            </li>
          </ul>
        </aside>
        <section>
          <article id="london">
            <h1>London</h1>
            <p>
              London is the capital city of England. It is the most populous
              city in the United Kingdom, with a metropolitan area of over 13
              million inhabitants.
            </p>
            <p>
              Standing on the River Thames, London has been a major settlement
              for two millennia,its history going back to its founding by the
              Romans, who named it Londinium.
            </p>
            <p>
              London, also referred to as Greater London, is one of 9 regions of
              England and the top-level subdivision covering most of the city's
              metropolis. The small ancient City of London at its core once
              comprised the whole settlement, but as its urban area grew, the
              Corporation of London resisted attempts to amalgamate the city
              with its suburbs, causing "London" to be defined in a number ways
              for different purposes.
            </p>
          </article>
          <article id="paris">
            <h1>Paris</h1>
            <p>
              London is the capital city of England. It is the most populous
              city in the United Kingdom, with a metropolitan area of over 13
              million inhabitants.
            </p>
            <p>
              Standing on the River Thames, London has been a major settlement
              for two millennia,its history going back to its founding by the
              Romans, who named it Londinium.
            </p>
            <p>
              London, also referred to as Greater London, is one of 9 regions of
              England and the top-level subdivision covering most of the city's
              metropolis. The small ancient City of London at its core once
              comprised the whole settlement, but as its urban area grew, the
              Corporation of London resisted attempts to amalgamate the city
              with its suburbs, causing "London" to be defined in a number ways
              for different purposes.
            </p>
          </article>
          <article id="tokyo">
            <h1>Tokyo</h1>
            <p>
              London is the capital city of England. It is the most populous
              city in the United Kingdom, with a metropolitan area of over 13
              million inhabitants.
            </p>
            <p>
              Standing on the River Thames, London has been a major settlement
              for two millennia,its history going back to its founding by the
              Romans, who named it Londinium.
            </p>
            <p>
              London, also referred to as Greater London, is one of 9 regions of
              England and the top-level subdivision covering most of the city's
              metropolis. The small ancient City of London at its core once
              comprised the whole settlement, but as its urban area grew, the
              Corporation of London resisted attempts to amalgamate the city
              with its suburbs, causing "London" to be defined in a number ways
              for different purposes.
            </p>
          </article>
          <article id="newyork">
            <h1>Newyork</h1>
            <p>
              London is the capital city of England. It is the most populous
              city in the United Kingdom, with a metropolitan area of over 13
              million inhabitants.
            </p>
            <p>
              Standing on the River Thames, London has been a major settlement
              for two millennia,its history going back to its founding by the
              Romans, who named it Londinium.
            </p>
            <p>
              London, also referred to as Greater London, is one of 9 regions of
              England and the top-level subdivision covering most of the city's
              metropolis. The small ancient City of London at its core once
              comprised the whole settlement, but as its urban area grew, the
              Corporation of London resisted attempts to amalgamate the city
              with its suburbs, causing "London" to be defined in a number ways
              for different purposes.
            </p>
          </article>
        </section>
        {/* end of content-wrap */}
      </div>
      <footer>© Copyright 2016 ungmo2</footer>
      {/* end of wrap */}
    </div>
  );
}
// cd .. 한 폴더 위로
// npm run dev

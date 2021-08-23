import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

//components
import { ListFaq } from './ListFaq';
import Header from './Header';
import Footer from './footer';
import FaqHeader from './FaqHeader';
import Quote from './Quote';

//Images
import rand from '../rand.jpg';
import rothbard from '../rothbard.png';
import mises from '../mises.jpg';

const faq = async () => {
  const res = await axios.get('/faq');
  return res;
};

const Faq = () => {
  const goToFaq = () => {
    window.location.href = '/#faq-el';
  };

  const [titles, setTitle] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    (async () => {
      const datas = await faq();
      const titlesList = datas.data.faqElements.map(el => el.title);
      const authorList = datas.data.faqElements.map(el => el.author);
      const contentList = datas.data.faqElements.map(el => el.content);
      setTitle(titlesList);
      setAuthors(authorList);
      setContent(contentList);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="container">
        <ul className="quotesUl">
          <Quote
            quote="„Potencjalnie rząd jest największym zagrożeniem dla ludzkich praw, gdyż to on ma monopol na użycie przemocy wobec bezbronnych z mocy prawa ofiar. Kiedy więc rząd nie napotyka ograniczeń w postaci praw człowieka, jest jego najgroźniejszym wrogiem.“"
            author="Ayn Rand"
            image={rand}
            animation="fade-right"
          />

          <Quote
            quote="„Zbrodnia jest zbrodnią, agresja jest agresją, bez względu na to, jak wielu obywateli godzi się na takie praktyki. W pojęciu większości nie ma nic świętego. Tłum dokonujący samosądu stanowi przecież większość na swoim terenie.“"
            author="Murray Rothbard"
            image={rothbard}
            animation="fade"
          />
          <Quote
            quote="„Jeśli ktoś walczy o wolny rynek i wolną konkurencję, nie staje w obronie tych, którzy są już bogaci, lecz zabiega o swobodę działania dla anonimowych ludzi, którzy niebawem zostaną przedsiębiorcami, a ich pomysłowość sprawi, że życie przyszłych pokoleń stanie się lżejsze.“"
            author="Ludwig von Mises"
            image={mises}
            animation="fade-left"
          />
        </ul>
      </main>
      <section id="faq-el" class="faq-el">
        <FaqHeader />
        <ol className="faq-container">
          {titles.map((el, i) => {
            return (
              <ListFaq
                title={el}
                content={content[i]}
                author={authors[i]}
                i={i}
              />
            );
          })}
        </ol>
      </section>
      <i class="fas fa-arrow-down arrow" onClick={goToFaq}></i>

      <Footer />
    </div>
  );
};

export default Faq;

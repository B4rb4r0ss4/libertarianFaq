import '../css/quote.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Quote = props => {
  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);
  let animation = props.animation;
  return (
    <li data-aos={animation} class="quotes">
      <img
        data-aos="zoom-in"
        className="quote-image"
        src={props.image}
        alt="img"
      />
      <span data-aos="fade-down">{props.author}</span>
      <p>{props.quote}</p>
    </li>
  );
};
export default Quote;

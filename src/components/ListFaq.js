import '../css/Faq.css';
import { useState } from 'react';

const ListFaq = props => {
  const title = props.title;
  const i = props.i;
  const [isOpen, setOpen] = useState(false);

  const openElement = () => {
    if (isOpen) setOpen(false);
    else setOpen(true);
  };

  return (
    <li key={i} id={'faq-' + i} className="faq-title" onClick={openElement}>
      <h4 className="faq-title-text">
        <span className="number">
          {i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}.{' '}
        </span>
        <span className="question">{title}</span>
        <i
          className={
            isOpen ? 'fas accordion fa-angle-up' : 'fas accordion fa-angle-down'
          }
        ></i>
      </h4>
      <p className={isOpen ? 'open' : 'close'}>
        {props.content}
        <span className="author">{'\n\nAutor: '}</span>
        <span className="author-text">{props.author}</span>
      </p>
    </li>
  );
};
export { ListFaq };

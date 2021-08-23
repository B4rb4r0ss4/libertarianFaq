import flag from '../flag.png';

const FaqHeader = () => {
  return (
    <header className="faq-header">
      <h2 className="faq-h2">
        <span class="text"> FAQ</span>
        <span class="sub-text">
          Najczęściej zadawane
          <br /> pytania
        </span>
      </h2>

      <img src={flag} alt="gadsdenFlag" className="flag-faq" />
    </header>
  );
};

export default FaqHeader;

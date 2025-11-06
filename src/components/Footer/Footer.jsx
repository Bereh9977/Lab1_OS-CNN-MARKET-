import '../css/mainPage.css'

export default function Footer() {
  return (
    <footer>
      <article>
        <section className="shop_info">
          <h2>Про нас!</h2>
          <ul>
            <li>Номери телефонів:</li>
            <ul>
              <li>+380967843245</li>
              <li>+380967843246</li>
              <li>+380967843247</li>
            </ul>
            <li>Адреси:</li>
            <ul>
              <li><u>м. Київ, вул. Богдана Хмельницького 46</u></li>
              <li><u>м. Біла Церква, вул. Лермонтова 26</u></li>
            </ul>
          </ul>
        </section>
      </article>
    </footer>
  );
}

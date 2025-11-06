import { useEffect } from "react";
import "../css/catalog.css";
import newItems from "../js/newItems";
import search from "../js/search";

export default function CatalogItems() {
  useEffect(() => {
    newItems();
    search();
  }, []);

  return (
    <main className="mainItems">
      <h2>Список нейромереж:</h2>

      <div className="items">
        <h3>Convolutional Neural Network (CNN)</h3>
        <img src="/cnn.png" alt="CNN" width="150" />
        <p>Країна походження: США</p>
        <ul>
          <li>Аналіз зображень</li>
          <li>Шари згорток</li>
          <li>Підвибірка</li>
          <li>Висока точність</li>
          <li>Розпізнавання облич</li>
        </ul>
      </div>

      <div className="items">
        <h3>Recurrent Neural Network (RNN)</h3>
        <img src="/rnn.png" alt="RNN" width="150" />
        <p>Країна походження: США</p>
        <ul>
          <li>Обробка послідовностей</li>
          <li>Петльова структура</li>
          <li>Пам’ять станів</li>
          <li>Прогнозування тексту</li>
          <li>Генерація мови</li>
        </ul>
      </div>

      <div className="items">
        <h3>Long Short-Term Memory (LSTM)</h3>
        <img src="/lstm.png" alt="LSTM" width="150" />
        <p>Країна походження: США</p>
        <ul>
          <li>Робота з довгими послідовностями</li>
          <li>Комірки пам’яті</li>
          <li>Збереження контексту</li>
          <li>Чат-боти</li>
          <li>Переклад текстів</li>
        </ul>
      </div>

      <div className="items">
        <h3>Generative Adversarial Network (GAN)</h3>
        <img src="/gan.jpg" alt="GAN" width="150" />
        <p>Країна походження: США</p>
        <ul>
          <li>Генерація нових даних</li>
          <li>Генератор та дискримінатор</li>
          <li>Створення реалістичних зображень</li>
          <li>Моделювання відео</li>
          <li>Синтез голосу</li>
        </ul>
      </div>

      <div className="items">
        <h3>Siamese Neural Network</h3>
        <img src="/siamese.jpg" alt="Siamese" width="150" />
        <p>Країна походження: США</p>
        <ul>
          <li>Порівняння двох вхідних даних</li>
          <li>Дві однакові гілки</li>
          <li>Визначення схожості</li>
          <li>Верифікація облич</li>
          <li>Підписова аутентифікація</li>
        </ul>
      </div>
    </main>
  );
}
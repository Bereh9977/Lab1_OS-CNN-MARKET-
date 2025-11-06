import '../css/feedback.css'
import feedback from '../js/feedback.js';
import { useEffect } from 'react';

export default function Form() {
  useEffect(() => {
    feedback();
  }, []);

  return (
    <main className="mainForm">
      <h2>Форма зворотнього зв'язку</h2>
      <form action="feedback.html">
        <fieldset>
          <legend>Персональна інформація</legend>

          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" /> <br />

          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" /> <br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" /> <br />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" /> <br />

          <p>Тип освіти:</p>

          <input type="radio" id="education_full" name="education" value="full" />
          <label htmlFor="education_full">повна</label> <br />

          <input type="radio" id="education_partial" name="education" value="partial" />
          <label htmlFor="education_partial">не повна</label> <br />

          <input type="radio" id="education_higher" name="education" value="higher" />
          <label htmlFor="education_higher">вища</label> <br />

          <input type="radio" id="education_prof" name="education" value="professional" />
          <label htmlFor="education_prof">професійна</label> <br />

          <label htmlFor="type_request">Оберіть причину звернення:</label>
          <select name="type_request" id="type_request" defaultValue="suggest">
            <option value="cooperation">Співпраця</option>
            <option value="copyright_violation">Скарга на порушення права власності</option>
            <option value="suggest">Пропозиція</option>
            <option value="error_report">Наявність помилки</option>
          </select>

          <p><b>Додаткова інформація</b></p>

          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="5"
            maxLength="500"
          ></textarea>
          <br />

          <input type="checkbox" id="accept_data" name="accept_data" required />
          <label htmlFor="accept_data"> Згода на обробку даних</label> <br />

          <input type="submit" value="Відправити" />
          <input type="reset" value="Відмінити" />
        </fieldset>
      </form>
    </main>
  );
}
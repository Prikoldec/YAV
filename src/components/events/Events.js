import event_picture from './../../img/event_picture.png';
import './style.css';

const Events = () => {
  return ( 
    <div className = "event_list">
      <div className = "event">
        <img src={event_picture} className="event_picture" alt="event_picture"/>
        <div className="event_description">
          <div className="event_title">SUMMER NIGHT</div>
          <div className="event_date">4 ноября 2024, 19:00 - 5:00</div>
          <div className="event_text">
          <p>Йоу! Скучали? Пришло время нового мероприятия.</p>

          <p>Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное и даже с пунктами типо:
           первый
           второй
           третий</p>
          <p>Итого у вас должно получиться: Классная работа!</p>
          </div>
          <a href="#!">Узнать больше</a>
        </div>
        <div className="event_tickets">
          <button>
            <div className="button_text">Купить билет</div>
          </button>
          <div className="tickets_left"><p>56 </p> билетов осталось</div>
        </div>
      </div>
      <div className = "event">
        <img src={event_picture} className="event_picture" alt="event_picture"/>
        <div className="event_description">
          <div className="event_title">SUMMER NIGHT</div>
          <div className="event_date">4 ноября 2024, 19:00 - 5:00</div>
          <div className="event_text">
          <p>Йоу! Скучали? Пришло время нового мероприятия.</p>

          <p>Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное и даже с пунктами типо:
           первый
           второй
           третий</p>
          <p>Итого у вас должно получиться: Классная работа!</p>
          </div>
          <a href="#!">Узнать больше</a>
        </div>
        <div className="event_tickets">
          <button>
            <div className="button_text">Купить билет</div>
          </button>
          <div className="tickets_left"><p>56 </p> билетов осталось</div>
        </div>
      </div>
      <div className = "event">
        <img src={event_picture} className="event_picture" alt="event_picture"/>
        <div className="event_description">
          <div className="event_title">SUMMER NIGHT</div>
          <div className="event_date">4 ноября 2024, 19:00 - 5:00</div>
          <div className="event_text">
          <p>Йоу! Скучали? Пришло время нового мероприятия.</p>

          <p>Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное. Какое-то описание сути, задания и бла бла и оно такое долгое и объемное и даже с пунктами типо:
           первый
           второй
           третий</p>
          <p>Итого у вас должно получиться: Классная работа!</p>
          </div>
          <a href="#!">Узнать больше</a>
        </div>
        <div className="event_tickets">
          <button>
            <div className="button_text">Купить билет</div>
          </button>
          <div className="tickets_left"><p>56 </p> билетов осталось</div>
        </div>
      </div>
    </div>
   );
}
 
export default Events;

import "./style.scss";

const Order = ({
  onSubmit,
  onChange,
  email,
  name,
  message,
  address,
  number,
}) => {
  return (
    <>
      <div className="form__container" onSubmit={onSubmit}>
        <form className="form__form">
          <div className="form__grid">
            <label className="form__label">
              Full name*
              <input
                className="form__input"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Your name"
                required
              />
            </label>
            <label className="form__label">
              Your Email*
              <input
                className="form__input"
                type="email"
                name="email"
                value={email}
                placeholder="example@yourmail.com"
                onChange={onChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="someone@example.com"
                required
              />
            </label>
            <label className="form__label">
              Address*
              <input
                className="form__input"
                type="text"
                name="address"
                value={address}
                onChange={onChange}
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Your name"
                required
              />
            </label>
            <label className="form__label">
              Phone number*
              <input
                className="form__input"
                type="number"
                name="number"
                value={number}
                onChange={onChange}
                pattern="/^[+]38(9|8|7)\d{9}$/"
                placeholder="+3809786231450"
                title="phone number should contain + country code, code of operator and number"
                required
              />
            </label>
          </div>
          <div>
            <label className="form__label">Message</label>
            <textarea
              className="form__input form__input--textarea"
              type="text"
              name="message"
              value={message}
              onChange={onChange}
              placeholder="some extra information"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Type a text"
              required
            ></textarea>
          </div>

          <button type="submit" className="button button__form">
            Confirm
          </button>
        </form>
      </div>
    </>
  );
};

export default Order;

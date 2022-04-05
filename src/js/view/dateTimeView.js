class DateTimeView {
  _parentEl = document.querySelector('.header__date-time');

  renderDateTime() {
    this._clearText();
    this._dateClock();
  }

  _dateClock() {
    const navLocale = navigator.userLanguage;
    const optionsDate = {
      dateStyle: 'long',
    };
    const optionsTime = {
      timeStyle: 'medium',
    };

    const date = new Intl.DateTimeFormat(navLocale, optionsDate).format(
      new Date()
    );
    const time = new Intl.DateTimeFormat(navLocale, optionsTime).format(
      new Date()
    );

    this._parentEl.querySelector('.date').textContent = date;
    this._parentEl.querySelector('.time').textContent = time;
    setTimeout(this._dateClock.bind(this), 1000);
  }

  _clearText() {
    this._parentEl.querySelector('.date').textContent = '';
    this._parentEl.querySelector('.time').textContent = '';
  }
}

export default new DateTimeView();

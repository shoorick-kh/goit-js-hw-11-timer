class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
    const timer = document.querySelector(this.selector);
    this.days = timer.querySelector('[data-value ="days"]');
    this.hours = timer.querySelector('[data-value ="hours"]');
    this.mins = timer.querySelector('[data-value ="mins"]');
    this.secs = timer.querySelector('[data-value ="secs"]');
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      this.updateTimerFace(this.getTimeComponents(time));
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  updateTimerFace({ days, hours, mins, secs }) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 01, 2021'),
  //time to new month
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jan 01, 2022'),
  //time to New Year
});

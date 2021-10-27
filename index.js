const refs = {
  days: document.querySelector('.value[data-value ="days"]'),
  hours: document.querySelector('.value[data-value ="hours"]'),
  mins: document.querySelector('.value[data-value ="mins"]'),
  secs: document.querySelector('.value[data-value ="secs"]'),
};

class CountdownTimer {
  constructor({ onTick }) {
    this.selector = '#timer-1';
    this.targetDate = new Date('Nov 01, 2021');
    this.onTick = onTick;
    this.start();
  }

  start() {
    const targetDate = new Date('Nov 01, 2021').getTime();

    setInterval(() => {
      const currentTime = Date.now();
      const partTime = targetDate - currentTime;
      const time = this.getTimeComponents(partTime);
      this.onTick(time);
    }, 1000);
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

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  onTick: updateTimerFace,
});

function updateTimerFace({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

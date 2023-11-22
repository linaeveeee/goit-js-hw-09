import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  promiseForm: document.querySelector('.form'),
  promiseBtn: document.querySelector('button'),
};

refs.promiseForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  refs.promiseBtn.disabled = true;

  let delay = Number(refs.inputDelay.value);
  let step = Number(refs.inputStep.value);
  let amount = Number(refs.inputAmount.value);

  // let totalDelay = 0;
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delay += step;
  }
  refs.promiseForm.reset();
  setTimeout(() => {
    refs.promiseBtn.disabled = false;
  }, delay);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

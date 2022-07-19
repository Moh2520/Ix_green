const buttonInput = document.getElementById('Submit Button');
const cardBody = document.getElementById('card-body');

buttonInput.addEventListener('click', (event) => {

    const random = Math.floor(Math.random() * 10) + 1;
    console.log(random);

  const resultDiv = document.createElement('div');
  resultDiv.innerHTML = random.toFixed(1);

  resultDiv.classList.add('alert');
  resultDiv.classList.add('alert-success');
  resultDiv.classList.add('mt-4');

  cardBody.append(resultDiv);
});
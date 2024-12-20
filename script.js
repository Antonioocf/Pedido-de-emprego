const container = document.querySelector('.container');
const botaoNao = document.getElementById('nao');
const botaoSim = document.getElementById('sim');

container.addEventListener('mousemove', (event) => {
  if (event.target === botaoNao) {
    const maxX = container.offsetWidth - botaoNao.offsetWidth;
    const maxY = container.offsetHeight - botaoNao.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = randomX + 'px';
    botaoNao.style.top = randomY + 'px';
  }
});

botaoSim.addEventListener('click', () => {
  alert('como nao conseguiu me recusar, prometo me dedicar ao maximo e tirar tudo o que eu conseguir de conhecimento, vou evoluir muito, nao tenho palavras para agradecer pela oportunidade, mesmo sendo forçada. Brincadeiras a parte fiz so para descontrair mesmo mas se aceitar vai ser uma bênção pra mim, nao retire oq eu disse no começo, estou comecando agora nesse meio e estou muito perdido mas sei que com essa ajuda posso evoluir muito e centralizar meus interesses e assim ajudar a empresa como vai estar me ajudando agora❤️🙏🏻'); 
});
const coin = {
    state: 0,
  
    flip () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      return this.state = Math.round((Math.random() * 1) + 0);
    },
  
    toString () {
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
      if (coin.state === 0) {
          return "Heads"
      } else {
          return "Tails"
      }
    },
  
    toHTML () {
      const image = document.createElement("img");
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
      if (coin.state === 0) {
        image.src = "./images/heads.jpg"
        image.alt = "Heads"
        image.width = '100'
      } else {
        image.src = "./images/tails.jpg"
        image.alt = "Tails"
        image.width = '100'

      }
      return image;
    }    
};

// DISPLAY20FLIPS
function display20Flips() {
    const results = [];
    let capturaSection = document.getElementById('results')    
    // Use um loop para arremessar a moeda 20 vezes.
    for (let i = 0; i < 20; i++) {

        let p = document.createElement('p')
        coin.flip()
        p.innerText = `${coin.toString()}`

        results.push(coin.toString())
        capturaSection.appendChild(p)
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.

    return results
}display20Flips()

function display20Images() {
    const results = [];
    let capturaImg = document.getElementById('images')
    // Use um loop para arremessar a moeda 20 vezes.
    for (let i = 0; i < 20; i++) {        
        coin.flip()        

        results.push(coin.toString())
        capturaImg.appendChild(coin.toHTML())
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.

    return results
}display20Images()

function createGame(player1, hour, player2, siglaPlay1, siglaPlay2, res) {
  return `
    <li>
      <div class="game"><img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <p>${siglaPlay1 || ''}</p></div>
      
      <strong>${hour}</strong>
      
      <div class="game"><img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
      <p>${siglaPlay2 || ''}</p>
      </div>

      <div class="res"> <p>${res || ''}</p></div>
    </li>
  `
}
let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
             ${games} 
          </ul>
      </div>
        `
}
document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", 
    createGame("catar", "13:00", "equador", 'cat', 'equad', '0X2')) +

  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "ira",'ing', 'irã', '6X2') +
      createGame("senegal", "13:00", "holanda",'sen', 'hol', '0X2') +
      createGame("estadosunidos", "16:00", "gales",'eua', 'gales', '1X1')
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina","07:00", "arabiasaudita",'arg', 'as','1X2') +
      createGame("dinamarca","10:00", "tunisia",'din', 'tun','0x0') +
      createGame("mexico", "13:00", "polonia",'méx', 'pol','0x0') +
      createGame("frança", "16:00", "australia",'fra', 'aus','4x1')
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croacia",'mar', 'cro','0x0') +
      createGame("alemanha", "10:00", "japao",'ale', 'jap','1x2') +
      createGame("espanha", "13:00", "costarica",'esp', 'cr','7x0') +
      createGame("belgica", "16:00", "canada",'bél', 'can','')
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suiça", "07:00", "camaroes",'suí', 'cam','') +
      createGame("uruguai", "10:00", "coreiadosul",'uru ', 'cs','') +
      createGame("portugal", "13:00", "gana",'por', 'gan','') +
      createGame("brasil", "16:00", "servia",'bra', 'sév','')
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", "ira",'gal', 'irã','') +
      createGame("catar", "10:00", "senegal",'cat', 'sen','') +
      createGame("holanda", "13:00", "equador",'hol', 'equa','') +
      createGame("inglaterra", "16:00", "estadosunidos",'ing', 'eua','')
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia",'tun', 'aus','') +
      createGame("polonia", "10:00", "arabiasaudita",'pol', 'as','') +
      createGame("frança", "13:00", "dinamarca",'fra', 'din','') +
      createGame("argentina", "16:00", "mexico",'arg', 'méx','')
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japao", "07:00", "costarica",'jap', 'cr','') +
      createGame("belgica", "10:00", "marrocos",'bél', 'mar','') +
      createGame("croacia", "13:00", "canada",'cro', 'can','') +
      createGame("espanha", "16:00", "alemanha",'esp', 'ale','')
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camaroes", "07:00", "servia",'cam', 'sér','') +
      createGame("coreiadosul", "10:00", "gana",'cs', 'gan','') +
      createGame("brasil", "13:00", "suiça",'bra', 'suí','') +
      createGame("portugal", "16:00", "uruguai",'por', 'uru','')
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "07:00", "senegal",'equa', 'sen','') +
      createGame("polonia", "10:00", "arabiasaudita",'pol', 'as','') +
      createGame("frança", "13:00", "dinamarca",'fra', 'din','') +
      createGame("argentina", "16:00", "mexico",'arg', 'méx','')
  )  +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "frança",'tun', 'fra','') +
      createGame("australia", "12:00", "dinamarca",'aus', 'din','') +
      createGame("polonia", "16:00", "argentina",'pol', 'arg','') +
      createGame("arabiasaudita", "16:00", "mexico",'as', 'méx','')
  )+
  createCard(
    "01/12",
    "quinta",
    createGame("croacia", "12:00", "belgica",'cro', 'bél','') +
      createGame("canada", "12:00", "marrocos",'can', 'mar','') +
      createGame("japao", "16:00", "espanha",'jap', 'esp','') +
      createGame("costarica", "16:00", "alemanha",'cr', 'ale','')
  ) + 
  createCard(
    "02/12",
    "sexta",
    createGame("coreiadosul", "12:00", "portugal",'cs', 'por','') +
      createGame("gana", "12:00", "uruguai",'gana', 'uru','') +
      createGame("servia", "16:00", "suiça",'sér', 'suí','') +
      createGame("camaroes", "16:00", "brasil",'cam', 'bra','')
  )
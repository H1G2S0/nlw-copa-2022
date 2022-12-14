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

function createCard(date , day, games) {
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

function createFase(fase){
  return `
  <div class="grupo" style="animation-delay: ${delay}s">
          <h2><span>${fase}</span></h2>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo",
    createGame("catar", "13:00", "equador", 'cat', 'equad', '0X2')) +

  createCard(
    "21/11", "segunda",
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
      createGame("belgica", "16:00", "canada",'bél', 'can','1x0')
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suiça", "07:00", "camaroes",'suí', 'cam','1x0') +
      createGame("uruguai", "10:00", "coreiadosul",'uru ', 'cs','0x0') +
      createGame("portugal", "13:00", "gana",'por', 'gan','3x2') +
      createGame("brasil", "16:00", "servia",'bra', 'sév','2x0')
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", "ira",'gal', 'irã','0x2') +
      createGame("catar", "10:00", "senegal",'cat', 'sen','1x3') +
      createGame("holanda", "13:00", "equador",'hol', 'equa','1x1') +
      createGame("inglaterra", "16:00", "estadosunidos",'ing', 'eua','0x0')
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia",'tun', 'aus','0x1') +
      createGame("polonia", "10:00", "arabiasaudita",'pol', 'as','2x0') +
      createGame("frança", "13:00", "dinamarca",'fra', 'din','2x1') +
      createGame("argentina", "16:00", "mexico",'arg', 'méx','2x0')
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japao", "07:00", "costarica",'jap', 'cr','0x1') +
      createGame("belgica", "10:00", "marrocos",'bél', 'mar','0x2') +
      createGame("croacia", "13:00", "canada",'cro', 'can','4x1') +
      createGame("espanha", "16:00", "alemanha",'esp', 'ale','1x1')
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camaroes", "07:00", "servia",'cam', 'sér','3x3') +
      createGame("coreiadosul", "10:00", "gana",'cs', 'gan','2x3') +
      createGame("brasil", "13:00", "suiça",'bra', 'suí','1x0') +
      createGame("portugal", "16:00", "uruguai",'por', 'uru','2x0')
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "12:00", "senegal",'equa', 'sen','1x2') +
      createGame("holanda", "12:00", "catar",'hol', 'cat','2x0') +
      createGame("ira", "16:00", "estadosunidos",'irã', 'eua','0x1') +
      createGame("gales", "16:00", "inglaterra",'gal', 'ing','0x3')
  )  +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", "frança",'tun', 'fra','1x0') +
      createGame("australia", "12:00", "dinamarca",'aus', 'din','1x0') +
      createGame("polonia", "16:00", "argentina",'pol', 'arg','0x2') +
      createGame("arabiasaudita", "16:00", "mexico",'as', 'méx','1x2')
  )+
  createCard(
    "01/12",
    "quinta",
    createGame("croacia", "12:00", "belgica",'cro', 'bél','0x0') +
      createGame("canada", "12:00", "marrocos",'can', 'mar','1x2') +
      createGame("japao", "16:00", "espanha",'jap', 'esp','2x1') +
      createGame("costarica", "16:00", "alemanha",'cr', 'ale','2x4')
  ) + 
  createCard(
    "02/12",
    "sexta",
    createGame("coreiadosul", "12:00", "portugal",'cs', 'por','2x1') +
      createGame("gana", "12:00", "uruguai",'gana', 'uru','0x2') +
      createGame("servia", "16:00", "suiça",'sér', 'suí','2x3') +
      createGame("camaroes", "16:00", "brasil",'cam', 'bra','1x0')
  ) +

  createCard(
    "03/12" , "sábado",
    createFase("oitavas de final") +
      createGame("holanda","12:00","estadosunidos",'hol', 'eua', '3x1') +
      createGame('argentina', '12:00', 'australia','arg','aus', '2x1')
  ) +

  createCard(
    '04/12', 'domingo',
    createFase('oitavas de final') +
      createGame('frança', '12:00','polonia','fra','pol','3x1') +
      createGame('inglaterra','12:00','senegal','ing','sen','3x0')
  )
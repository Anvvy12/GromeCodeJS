const generateNumbersRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
};

const getlineSeat = () => {
  return generateNumbersRange(1, 10)
    .map(
      (seatNumber) =>
        `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`
    )
    .join("");
};

const getSectorLines = () => {
  const seatsString = getlineSeat();

  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) =>
        `<div class="sector__line" data-line-number="${lineNumber}">${seatsString}</div>`
    )
    .join("");
};

const arenaElem = document.querySelector(".arena");

const renderArena = () => {
  const arenaElem = document.querySelector(".arena");
  const linesString = getSectorLines();
  const sectorStrings = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) =>
        `<div class="sector" data-sector-number="${sectorNumber}">${linesString}</div>`
    )
    .join("");
  arenaElem.innerHTML = sectorStrings;
};

renderArena();
const onSeat = (event) => {
  const isSeat = event.target.classList.contains(".sector__seat");
  if (isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const linesNumber = event.target.closest(".sector__line").dataset.lineNumber;
  const sectorsNumber = event.target.closest(".sector").dataset.sectorNumber;

  const selectedSeatElem = document.querySelector(".board__selected-seat");
  selectedSeatElem.textContent = `S ${sectorsNumber} - L ${linesNumber} - S ${seatNumber}`;
};
arenaElem.addEventListener("click", onSeat);

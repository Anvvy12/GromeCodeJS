export function getSection(num) {
  // ??????????????????????????????????
  //   Number(num);
  //   if (num >= 7 || num <= 0) {
  //     return "Wrong input!";
  //   }
  // ?????????????????????????????????
  const fouderSpan = document.querySelector(`span[data-number="${num}"]`);
  const motherDiv = fouderSpan.closest(".box");
  return motherDiv.dataset.section;
}
// test data
// console.log(getSection("1"));
// console.log(getSection("2"));
// console.log(getSection("3"));
// console.log(getSection("4"));
// console.log(getSection("5"));
// console.log(getSection("6"));
// console.log(getSection("-1"));
// console.log(getSection("7"));
// console.log(getSection("0"));

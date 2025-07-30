const dropdowns = document.querySelectorAll(".dropdowns select");
const fromImg = document.querySelector(".fromImg");
const toImg = document.querySelector(".toImg");

// 🧠 Populate dropdowns
dropdowns.forEach((select, index) => {
  for (let currCode in countryList) {
    const option = new Option(`${countryList[currCode]} (${currCode})`, currCode);
    select.appendChild(option);
  }

  // ✅ Set default values
  select.value = index === 0 ? "US" : "IN";

  // ✅ Set initial flag
  const img = index === 0 ? fromImg : toImg;
  img.src = `https://flagsapi.com/${select.value}/shiny/64.png`;

  // ✅ Update flag on change
  select.addEventListener("change", () => {
    img.src = `https://flagsapi.com/${select.value}/shiny/64.png`;
  });
});


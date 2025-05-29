
  const btn = document.querySelector(".btn")
  const modal = document.querySelector(".modal")
  const overlay = document.querySelector(".overlay")
  const closeBtn = document.querySelector(".close")

  btn.addEventListener("click", () => {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
  })

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
  })

  overlay.addEventListener("click", () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
  })


const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
const checkboxesArray = [...checkboxes]

let lastChecked
let checkState = false

function handleCheck(e) {
  if (!lastChecked) {
    lastChecked = this
  }
  checkState = lastChecked.checked ? true : false

  if (e.shiftKey) {
    let start = checkboxesArray.indexOf(lastChecked)
    let end = checkboxesArray.indexOf(this)
    checkboxesArray
      .slice(Math.min(start, end), Math.max(start, end) + 1)
      .forEach((input) => (input.checked = checkState))

    if (start - end < 0) {
      console.log(`from first selected input ${start} to second selected input ${end} are checked`)
    } else {
      console.log(`[Backforward]form first selected input ${start} to second selected input ${end} are checked`)
    }
  }
  lastChecked = this
}
checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck))

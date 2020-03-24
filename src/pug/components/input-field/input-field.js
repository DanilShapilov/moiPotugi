let allDropdownEl = document.querySelectorAll('.input-field_input.dropdown')

allDropdownEl.forEach(el => {
  let dropdownInput = el;
  let dropdownArrow = el.nextElementSibling;
  let dropdownOptions = dropdownArrow.nextElementSibling;
  
  function handleDropdownClick(element){
    element.addEventListener("click", () =>{
      dropdownInput.classList.toggle('focused')
    })
  }
  handleDropdownClick(dropdownInput)
  handleDropdownClick(dropdownArrow)
  
  // + and - btns
  // find all buttons and handle click
  dropdownOptions.querySelectorAll('.input-field_dropdown-block-btn').forEach((btn) => {
    handleOptionClick(btn);
    // make minus btn disabled if option value is 0
    if (btn.classList.contains('input-field_dropdown-block-btn--minus')) {
      checkValueForZero(btn)
    }
  })
  // check if btn has class minus and if its h3 element
  //  contains value of 0 make btn disabled
  function checkValueForZero(btn) {
    // find parent of a btn an then find value whitch is .input-field_dropdown-amount-text
    let dropdownOptionValue = +btn.parentElement.querySelector('.input-field_dropdown-amount-text').innerText;

    if(dropdownOptionValue === 0){
        let minusBtn = btn.parentElement.querySelector('.input-field_dropdown-block-btn--minus')
        minusBtn.setAttribute('disabled','disabled')
    }
    if (btn.classList.contains('input-field_dropdown-block-btn--plus')) {
      let minusBtn = btn.parentElement.querySelector('.input-field_dropdown-block-btn--minus')
      if (dropdownOptionValue > 0) {
        minusBtn.removeAttribute('disabled')
      }
    }
  }

const dropdownInputText = dropdownInput.value;

  function handleOptionClick(btn) {
    let dropdownOptionValue = btn.parentElement.querySelector('.input-field_dropdown-amount-text');
    btn.addEventListener("click", () =>{
      if (btn.classList.contains('input-field_dropdown-block-btn--plus')) {
        dropdownOptionValue.innerText = +dropdownOptionValue.innerText + 1; 
      }else if (btn.classList.contains('input-field_dropdown-block-btn--minus')) {
        dropdownOptionValue.innerText = +dropdownOptionValue.innerText - 1; 
      }
      checkValueForZero(btn);
      changeDropdownInputValue(btn);
    })
  }

  function changeDropdownInputValue(btn) {
    let dropdownOptionValue = btn.parentElement.querySelector('.input-field_dropdown-amount-text');
    
  }
})
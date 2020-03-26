let allDropdownEl = document.querySelectorAll('.input-field_input.dropdown')

allDropdownEl.forEach(el => {
  let dropdownInput = el;
  let dropdownArrow = el.nextElementSibling;
  let dropdownOptions = dropdownArrow.nextElementSibling; // .input-field_dropdown-block-wrapper
  
  
  function handleDropdownClick(element){
    element.addEventListener("click", () =>{
      dropdownInput.classList.toggle('focused')
    })
  }
  handleDropdownClick(dropdownInput)
  handleDropdownClick(dropdownArrow)

  // + and - btns
  // find all buttons and handle click
  const dropdownInputText = dropdownInput.value;
  dropdownOptions.querySelectorAll('.input-field_dropdown-block-btn').forEach((btn) => {
    handleOptionClick(btn);
    // change value inside dropdown input
    changeDropdownInputValue(btn);
    // make minus btn disabled if option value is 0
    let dropdownOptionValue = +btn.parentElement.querySelector('.input-field_dropdown-amount-text').innerHTML;
    
    if (dropdownOptionValue === 0 && btn.classList.contains('input-field_dropdown-block-btn--minus')) {
      btn.setAttribute('disabled','disabled');
    }
  })

  function checkValueForZero(dropdownOptionValue,btn) {
    let minusBtn = btn.parentElement.querySelector('.input-field_dropdown-block-btn--minus');
    if(+dropdownOptionValue.innerText === 0){
      minusBtn.setAttribute('disabled','disabled')
    }else if (+dropdownOptionValue.innerText > 0) {
      minusBtn.removeAttribute('disabled')
    }
  }



  function handleOptionClick(btn) {
    let dropdownOptionValue = btn.parentElement.querySelector('.input-field_dropdown-amount-text');

    btn.addEventListener("click", () =>{
      if (btn.classList.contains('input-field_dropdown-block-btn--plus')) {
        dropdownOptionValue.innerHTML = +dropdownOptionValue.innerHTML + 1; 
      }else if (btn.classList.contains('input-field_dropdown-block-btn--minus')) {
        dropdownOptionValue.innerHTML = +dropdownOptionValue.innerHTML - 1; 
      }
      // make minus btn disabled of not depends on dropdownOptionValue
      checkValueForZero(dropdownOptionValue, btn);
      changeDropdownInputValue(btn);
    })
  }

  function changeDropdownInputValue(btn) {
    let whatToDoWithValues = dropdownOptions.getAttribute('whattodowithvalues');
     
    if (whatToDoWithValues === 'count') {
      let counted = 0;
      dropdownOptions.querySelectorAll('.input-field_dropdown-amount-text').forEach((value) => {
        counted += +value.innerHTML;
      })
      if (counted === 0) {
        dropdownInput.value = dropdownInputText;
      }else{
        dropdownInput.value = counted + ' Гостя';
      }
    }

    if (whatToDoWithValues === 'toString') {
      dropdownInput.value = '';
      dropdownOptions.querySelectorAll('.input-field_dropdown-block').forEach((optionEl) => {
        let optionHeading = optionEl.querySelector('h3').innerHTML;
        let optionValue = +optionEl.querySelector('.input-field_dropdown-amount-text').innerHTML;
        dropdownInput.value += optionValue + ' '+ optionHeading + ', ';
      })
    }
  }
})
function emailValidation() {
	  const form = document.getElementById('form');
	  const element = document.createElement('p')
	  const message = document.createTextNode("Eメールが一致しません")
	  const emailConfirm = document.getElementById("email_confirm")
	  const content = document.getElementById("content")
	  element.appendChild(message);
	  element.setAttribute("id","alert")
	  element.classList.add("alertColor")
	
	  emailConfirm.addEventListener('input', e => {
	    if(form.email.value !== form.email_confirm.value) {
	      if (!element.getAttribute("contact_line")) {
	        content.parentNode.insertBefore(element,content)
	        emailConfirm.classList.add("alertBackground")
	      }
	    } else {
	      emailConfirm.classList.remove("alertBackground")
	      element.parentNode.removeChild(element)
	
	    }
	  });
	};
	
	window.onload = emailValidation;

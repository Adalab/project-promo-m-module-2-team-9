let selectionDesign=document.querySelector(".js-design"),selectionDesignButton=document.querySelector(".js-designButton"),selectionFill=document.querySelector(".js-fill"),selectionFillButton=document.querySelector(".js-fillButton"),messageFill=document.querySelector(".js-tooltipFill"),selectionShare=document.querySelector(".js-share"),selectionShareButton=document.querySelector(".js-shareButton");const form=document.querySelector(".js-form"),previewNameElemento=document.querySelector(".js-nameProfile"),previewRoleElemento=document.querySelector(".js-rolProfile");function collapseValidationDesign(){selectionDesign.classList.toggle("none"),selectionDesignButton.classList.toggle("arrowPointer")}function collapseValidationFill(e){!1===validationDesign?(messageFill.classList.toggle("none"),messageFill.style.top=e.clientY+"px",messageFill.style.left=e.clientX+"px",setTimeout((function(){messageFill.classList.toggle("none")}),3e3)):(selectionFill.classList.toggle("none"),selectionFillButton.classList.toggle("arrowPointer"))}function collapseValidationShare(){selectionShare.classList.toggle("none"),selectionShareButton.classList.toggle("arrowPointer")}selectionDesignButton.addEventListener("click",collapseValidationDesign),selectionFillButton.addEventListener("click",validateDesignSection),selectionFillButton.addEventListener("click",collapseValidationFill),selectionShareButton.addEventListener("click",collapseValidationShare);let validationDesign=!1;function validateDesignSection(){document.querySelectorAll('input[name="colors"]').forEach(e=>{e.checked&&(validationDesign=!0)})}function handelChangeform(e){const t=e.target,l=t.value;"fullname"===t.name?previewNameElemento.innerHTML=l:"role"===t.name&&(previewRoleElemento.innerHTML=l)}validateDesignSection(),form.addEventListener("keyup",handelChangeform);
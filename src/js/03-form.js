function handelChangeform (ev)  {
    const inputChanged = ev.target;
    const changedValue = inputChanged.value;
    if ( inputChanged.name === 'fullname') {
        previewNameElemento.innerHTML = changedValue;
        
    }
    else (input)
   
}


    form.addEventListener('change', handelChangeform)
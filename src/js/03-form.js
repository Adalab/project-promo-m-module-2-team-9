function handelChangeform (ev)  {
    const inputChanged = ev.target;
    const changedValue = inputChanged.value;
    if ( inputChanged.name === 'fullname') {
        previewNameElemento.innerHTML = changedValue;
        
    }
    else if ( inputChanged.name === 'role' ) {
        previewRoleElemento.innerHTML = changedValue;
    }
    
}


    form.addEventListener('change', handelChangeform)
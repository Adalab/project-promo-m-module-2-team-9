function handelChangeform (ev)  {
    const inputChanged = ev.target;
    const changedValue = inputChanged.value;
    if ( inputChanged.name === 'fullname') {
        previewNameElemento.innerHTML = changedValue;
        
    }
    else if ( inputChanged.name === 'role' ) {
        previewRoleElemento.innerHTML = changedValue;
    }
    else if( inputChanged.name === 'mailto:saly@hotmail.com' ) {
        previewMailElemento.href = changedValue;
    }
    else if( inputChanged.name === 'mailto:saly@hotmail.com' ) {
        previewLinkedinElemento.href = changedValue;
    }
}


    form.addEventListener('change', handelChangeform)
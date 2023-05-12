const A1=()=>{
  Swal.fire('Hay un error aqui')
}

const A2=()=>{
    Swal.fire(
        '¿Que?',
        '¿Como asi?',
        'si'
      )
}

const A3=()=>{
    Swal.fire({
        title: '<strong> <u>Mmmmm un error</u></strong>',
        icon: 'info',
        html:
        'Aqui <b>mas informacion</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
          'para evitar el error',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Ok',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}

const A4=()=>{
    let timerInterval
    Swal.fire({
      title: 'ERROR',
      html: 'cargando cierre <b></b>Intentelo mas tarde.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
}
const A5=()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Desea mover a la papeleria?',
        text: "¡Se envio a la papeleria!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Su archivo ha sido eliminado.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelar',
            'Archivo no eliminado',
            'error'
          )
        }
      })
}
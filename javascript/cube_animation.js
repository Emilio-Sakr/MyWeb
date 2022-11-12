$(document).ready(function(){
    $(`#_face`).click(() => {
        $(`#_face`).hide()
    })
    $(`#_left`).click(() => {
        $(`#_left`).hide()
    })
    $(`#_right`).click(() => {
        $(`#_right`).hide()
    })
    $(`#_bottom`).click(() => {
        $(`#_bottom`).hide()
    })
    $(`#_top`).click(() => {
        $(`#_top`).hide()
    })
    $(`#_back`).click(() => {
        $(`#_back`).hide()
    })

    $(`.re_rectangle`).click(() => {
        for(i=0; i < _parts.length; i++){
            _parts[i].show()
        }
    })

    const _parts = [
        $(`#_back`),
        $(`#_top`),
        $(`#_bottom`),
        $(`#_right`),
        $(`#_left`),
        $(`#_face`),
    ]
})
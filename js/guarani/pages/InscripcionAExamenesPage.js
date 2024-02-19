if (!window.UtnBaHelper) window.UtnBaHelper = {};

const textChild = document.createTextNode(" o haciendo click ")
const redirectLink = document.createElement('a')
redirectLink.href = "/autogestion/grado/datos_censales"
redirectLink.textContent = "AQUÍ"

UtnBaHelper.InscripcionAExamenesPage = function () {


    const errorMessageSelector = document.querySelector('#lista_materias > div.alert.info.strong')

    function replaceMessageIfExists() {
        if (errorMessageSelector) {
            errorMessageSelector.appendChild(textChild)
            errorMessageSelector.appendChild(redirectLink)
        }
    }


    return {
        init: function () {
            return Promise.resolve().then(() => {
                replaceMessageIfExists();
            });
        },
        close: function () {
        },
    };
};

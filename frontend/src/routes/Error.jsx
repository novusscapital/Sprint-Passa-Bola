import React from 'react'

const Error = () => {
  return (
    <>
      <div className="max-w-xl w-full mx-auto mt-10">
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex-shrink-0">
            <img 
              src="./src/assets/error.gif"
              alt="Erro — ícone animado"
              className="w-16 h-16 rounded-md object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="font-semibold text-lg">Ocorreu um erro</p>
            <p className="text-sm mt-1 leading-snug">
              Não foi possível completar a ação. Verifique sua conexão ou tente
              novamente mais tarde.
            </p>
            <p className="text-xs mt-2 text-red-700/80">
              Se o problema persistir, contate o suporte.
            </p>
          </div>

          <button
            aria-label="Fechar"
            className="ml-2 flex-shrink-0 inline-flex items-center justify-center p-2 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={() => setShow(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Error

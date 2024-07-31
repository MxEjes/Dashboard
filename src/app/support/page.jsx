export default function Support() {
  return (
    <div className="mb-8 grid gap-2 p-4 grid-cols-1 ">
      <div className="grid justify-center h-full w-full	gap-6 p-4 m-1 rounded-2xl bg-[#DBDBDB]">
        <div className="grid grid-rows-[0.1fr_0.2fr_0.5fr] gap-4 bg-[#DBDBDB] justify-items-center	">
          <div className="grid gap-1 grid-cols-[0.1fr_1fr]">
            <span className="col-start-1 col-end-2">
              <svg width="69" height="63" viewBox="0 0 69 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.2453 26.5664C51.3512 26.5664 53.9329 26.6885 56.3461 26.6885C56.0642 25.7014 55.9042 24.8623 55.5881 24.077C51.8866 14.8809 41.7658 9.11391 31.3076 10.2179C21.0827 11.2972 12.8109 19.0568 11.4173 28.8766C10.0439 38.5543 16.519 48.0487 26.6514 51.2139C36.9931 54.4445 48.055 50.7251 53.4231 42.1671C54.3454 40.6968 55.0603 39.1162 55.8962 37.5984C56.8841 35.8045 58.8923 35.1313 60.9219 35.8867C62.8504 36.6044 63.4134 37.9893 62.6334 40.0968C55.481 59.4231 28.9764 65.5746 13.2233 51.3204C4.51544 43.441 1.71621 33.633 5.47799 22.7895C9.17629 12.129 17.3346 5.66012 29.2755 3.79496C45.9095 1.19676 61.2482 11.6767 63.8671 27.1288C64.0247 28.0588 64.0579 29.0206 64.0178 29.9628C63.9308 32.01 62.7584 33.1003 60.5457 33.1385C57.1974 33.1963 53.3491 33.208 49.8609 33.208C49.8465 31.1703 49.4361 28.7034 49.2453 26.5664Z" fill="#404040" fill-opacity="0.9"/>
              <path d="M49.2447 26.5968C49.8603 28.4941 49.8609 30.9309 49.8609 33.208C45.1416 33.208 40.4952 33.3491 35.7209 33.2731C33.6985 33.2408 32.6302 31.752 32.7126 29.6941C32.7838 27.9179 33.9406 26.7214 35.8769 26.6149C37.5043 26.5254 39.1421 26.5965 41.0974 26.5965C40.7501 26.0244 40.6096 25.6287 40.3284 25.3556C37.7597 22.8605 33.5836 22.1488 30.1288 23.5886C26.7145 25.0114 24.3292 28.6302 24.7208 31.7931C25.2027 35.6852 27.8171 38.4968 31.5772 39.4168C34.9504 40.2422 37.7559 39.2765 40.3474 37.4001C40.9369 36.9734 41.4486 36.4549 42.0425 36.0341C43.6824 34.8726 45.4504 34.8773 46.6762 36.0097C48.0194 37.2506 48.1602 39.0003 46.875 40.4503C42.7431 45.0882 37.5945 47.0131 31.2881 46.0757C23.3091 44.8896 17.6237 38.5809 17.6461 31.2765C17.6687 23.895 23.5404 17.5344 31.5826 16.4842C38.8766 15.5317 45.9617 18.8164 49.2447 26.5968Z" fill="#ED7A26"/>
              </svg>
            </span>
            <div className="flex flex-col p-4">
              <h1 className="col-start-2 col-end-3 text-xl font-medium text-[#546E7A] ">Ejes de Comunicación </h1>
              <h1 className="col-start-2 col-end-3 text-xl font-medium text-center text-[#546E7A] ">Redes </h1>
            </div>

          </div>

          <h2 className="text-xl font-bold	text-orange-500">Contactese: </h2>

          <div className="grid gap-0 ">
            <h3 className="text-md font-bold 	text-[#404040]">Via mail</h3>
            <p>pedidos@ejes.com</p>
            <p>suscripciones@ejes.com</p>
            <h3 className="text-md font-bold 	text-[#404040]">Telefónicamente</h3>
            <p>{`Línea rotativa (011) 5352-0550`}</p>
          </div>

        </div>  
      </div>  
    </div>
  )
}
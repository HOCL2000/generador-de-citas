import audreyImg from '@/assets/audrey.webp'
import sambImg from '@/assets/samb.webp'
import pesbImg from '@/assets/pes.webp'

const Selectubication = () => {
  return (
    <section className="flex flex-col items-center bg-white max-w-[1000px] rounded-lg shadow justify-center w-full">
        <div className="flex h-full flex-col items-center justify-center border-none  gap-4 md:w-full   lg:p-14 w-full">
            <section className="flex items-center justify-center rounded-[20px] p-2 md:p-0 w-full">
                <div className="flex flex-col gap-4 w-full items-center justify-center  text-center space-y-4 bg-pink-50 rounded-3xl p-8">
                    <div className='flex gap-2 flex-col items-center w-full justify-center  rounded-full '>
                        <figure className="flex items-center justify-center relative">
                            <img src={audreyImg} alt="avatar audrey" className=' aspect-auto  rounded-full shrink-0 size-28 object-cover '/>
                            <img src={audreyImg} alt="avatar audrey" className='absolute opacity-70 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px]'/>
                        </figure>
                        <h2  className='text-3xl font-bold text-pink-500'>Audrey lozano</h2>
                    </div>
                    <div>
                        <p className="text-muted-foreground max-w-md mx-auto text-gray-600">
                            Benvenuto nella mia pagina di pianificazione. Segui le istruzioni per aggiungere un evento al mio calendario.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col  gap-8 lg:flex-row w-full items-center lg:justify-between">
            <a href="/incontrope" className="min-h-[180px] max-w-[750px] rounded-[20px] before:absolute before:inset-0 before:w-full before:h-full before:bg-white before:-z-10 shadow relative flex  gap-5  items-stretch  overflow-hidden transition-all duration-300  hover:scale-105 w-[95%] md:w-full ">
                    <div className='overflow-hidden flex w-[75%] flex-col items-start px-2 justify-center'>
                        <div className="flex items-center gap-2 ">
                            <span className="text-left  font-semibold text-pink-500 mb-2 custom-text-shadow-pink">Incontro in salone Pescara</span>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Riccioluta mia! ti invito a leggere bene la descrizione sotto, prima di prenotare il nostro incontro.
                            </p>
                        </div>
                    </div>
                    <picture> 
                        <img src={pesbImg} alt="imagen pescara" className='-z-10 object-cover object-center h-full shrink-0  right-0 top-0 w-[200px] mascara' />
                    </picture>
                </a>
                <a href="/incontrosbt" className="min-h-[180px] max-w-[750px] rounded-[20px] before:absolute before:inset-0 before:w-full before:h-full before:bg-white before:-z-10 shadow relative flex  gap-5  items-stretch  overflow-hidden transition-all duration-300  hover:scale-105 w-[95%] md:w-full ">
                    <div className='overflow-hidden flex w-[75%] flex-col items-start px-2 justify-center'>
                        <div className="flex items-center gap-2 ">
                            <span className="text-left font-semibold text-pink-500 mb-2 custom-text-shadow-pink">Incontro in salone Sam Benedetto</span>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Riccioluta mia! ti invito a leggere bene la descrizione sotto, prima di prenotare il nostro incontro.
                            </p>
                        </div>
                    </div>
                    <picture> 
                        <img src={sambImg} alt="imagen pescara" className='-z-10 object-cover object-center h-full shrink-0  right-0 top-0 w-[200px] mascara' />
                    </picture>
                </a>
            </section>
        </div>
    </section>
  )
}

export default Selectubication
import { component$, useSignal } from '@builder.io/qwik';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import { fetchSimpson } from '~/api/fetchSimpson';
import Continens from '~/components/continens';
import { IconQuote } from '~/components/icons/icon-quote';
import { CharacterResponsio } from '../../../interfaces/character.responsio';


export const useCharacters = routeLoader$( async() => {
  try {

    return await fetchSimpson();

  } catch (error) {
    console.log(error);
    return[];
  }
  
})

const getCribaratumCharacters = ( characters: CharacterResponsio[]) => {
 const uniqueCharacters = new Set();

 return characters
 .filter(({ characterDirection }) => characterDirection === 'Right' )
 .filter(({ character }) => { 
  if(uniqueCharacters.has(character)) {
    return false;
  } else {
    uniqueCharacters.add(character);
    return true;
  }
 })
}

export default component$(() => {

  const electusCharacter = useSignal("");
  const simpsons = useCharacters();
  const cribaratumCharacters = getCribaratumCharacters(simpsons.value);


  return (
    <Continens stilus='my-8 flex flex-col items-center justify-center gap-8'>
      <div class="text-center">
        <h1 class="font-bold text-xl lg:text-5xl">The Simpson Quote App</h1>
        <p>Click on the quote of your favorite character</p>
      </div>
      
      <ul class="grid-container">

        { cribaratumCharacters.slice(0, 12).map( ( {character, image, quote} ) => (
          <li key={ character }>
            <figure class="overflow-hidden relative">

            <picture class="max-w-[150px] max-h-[150px] border border-black overflow-hidden flex bg-[var(--color-brand)]">
              
              <img 
                src={ image } 
                alt={ character }
                width="150"
                height="150"/>
            
            </picture>

            <button 
            class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50"
            onClick$={() => electusCharacter.value = character }>
              <IconQuote stilus='max-w-[40px] max-h-[40px]' />
            </button>

            <figcaption>{ character }</figcaption>

            </figure>

            { electusCharacter.value === character 
              ? ( 
                <div class="z-10 fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-75 transition-opacity">
                      <div class="relative bg-white max-w-[300px] w-full pt-20 px-12 pb-12">
                        <button
                        class="absolute top-5 right-5 btn btn-contrast"
                        onClick$={() => electusCharacter.value = ""}>
                          X
                        </button>
                      <blockquote class="flex flex-col gap-2">
                        "{ quote }"
                        <i>{ character }</i>
                      </blockquote>
                    </div>
                </div>
              
              )
              : null
            }

          </li>

        ) ) }

     
      </ul>


                          {/* reload */}
      <Link onClick$={ () => location.reload() } class="btn btn-brand">
      New quotes
      </Link>
    </Continens>
  )
});
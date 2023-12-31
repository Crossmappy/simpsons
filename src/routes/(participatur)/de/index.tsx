import { component$ } from '@builder.io/qwik';
import Continens from '~/components/continens'

import ImgLisa from "~/imagines/lisa.png?jsx";



export default component$(() => {
  return (
  <Continens stilus='my-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8'>

<div class=" flex flex-col gap-4 text-center lg:text-left">

    <h1 class="font-bold text-xl lg:text-5xl">
      About the Simpsons Quote App
    </h1>
<div class="lg:max-w-3xl">
  <p>The Simpsons is a beloved animated television show that has been on the air since 1989, and it has a massive following of fans who love the show's humor, characters, and memorable moments. The show has also become a cultural phenomenon, with many of its characters and catchphrases becoming part of the popular lexicon.</p>

  <p>Knowing quotes from The Simpsons can be cool for a few reasons. First, it can help you connect with other fans of the show and spark conversations about favorite episodes, characters, and jokes. Second, many of the show's quotes have become iconic and are often referenced in popular culture, so knowing them can make you feel more in tune with current trends and references.</p>

  <p>Furthermore, The Simpsons has often tackled social and political issues through satire and parody, making its quotes more than just funny one-liners. Being familiar with the show's commentary on current events and societal trends can also make you more aware and engaged with the world around you.</p>
  
  <p>
    API and images:{" "}
    <a class="hover:underline focus:underline"
    href="https://thesimpsonsquoteapi.glitch.me/quotes">
    https://thesimpsonsquoteapi.glitch.me/quotes
    </a>
  </p>
  </div>

</div>

    <figure class="flex justify-center min-w-min ">
      <ImgLisa class="object-contain" />
    </figure>
    
  </Continens>
  );
});
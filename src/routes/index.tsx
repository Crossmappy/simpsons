import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";

import ImgBart from "~/imagines/bart.png?jsx";
import ImgHomer from "~/imagines/homer.png?jsx";
import ImgMoe from "~/imagines/moe.png?jsx";


export default component$(() => {
  return (
    <>
    <div class="flex flex-col min-h-screen items-center justify-center text-center p-4 bg-[var(--color-brand)]">
    <Logo stilus="w-64 sm:w-[35rem]" />

    <h1 class="text-xl my-1 font-medium">Discover some of the most amazing Quotes from The Simpson</h1>

    <div>
      <strong>DISCLAMER:</strong> This is an unofficial app (even though it looks so cool!)
    </div>

    <Link href="/domus" class="btn my-4">
      Enter App 
    </Link>

    <div class="flex gap-12">


      <ImgBart class="object-contain hidden md:block" />
      <ImgHomer class="object-contain mt-20 hidden md:block" style={{ width: "185px"}} />
      <ImgMoe class="object-contain mt-12 md:mt-0" style={{ width: "220px"}} />
    </div>

    </div>
    </>
    
  );
});

export const head: DocumentHead = {
  title: "Inicio - The Simpson App",
  meta: [
    {
      name: "description",
      content: "Pagina de inicio de aplicacion The Simpson App",
    },
  ],
};

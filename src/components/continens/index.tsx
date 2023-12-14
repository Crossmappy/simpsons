import { component$, Slot } from '@builder.io/qwik';
export interface Props {
    stilus?: string;
}

export default component$<Props>(({ stilus }) => {
  return (
<>
<main class={`flex w-full max-w-[1400px] px-5 md:px-20 md:mx-auto ${ stilus }`}>
    <Slot />
</main>
</>
  );
});
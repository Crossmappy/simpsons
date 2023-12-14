import { component$, Slot } from '@builder.io/qwik';
import PageInvolvo from '~/components/page-involvo';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

export default component$(() => {
  return (
    <>

        <PageInvolvo>
            <Header />
            <Slot />
            <Footer />
        </PageInvolvo>
        
    </>
  )
});
import { component$, useComputed$ } from "@builder.io/qwik";
import { type ContentMenu, Link, useContent, useLocation } from "@builder.io/qwik-city";
import { Logo } from "../icons/logo";

export const Header = component$(() => {

const locus = useLocation();

const { menu } = useContent();

const menuNav = menu?.items?.map( (item: ContentMenu) => item );




  return (
    <header class="bg-[var(--color-brand)] w-full border border-black ">
        <div class="flex flex-col md:flex-row justify-between items-center mx-auto max-w-[1400px] p-5 md:px-20">

            <Link href="/domus">
                <Logo stilus="w-48 h-auto"/>
            </Link>

            <ul class="flex gap-6 ">

                { menuNav 
                    ? menuNav.map( (item: ContentMenu ) => 
                    <li key={ item.text }>
                        <Link
                            href={ item.href }
                            class={{
                                "flex scale-100 transition-all hover:scale-125": true,
                                "!font-bold": locus.url.pathname === item.href
                            }}>
                            {item.text}
                        </Link>
                        
                    </li> ) 
                    
                    : null }

                <Link class="btn btn-contrast" href="/">Exit</Link>
               
            </ul>

        </div>
    </header>
  );
});


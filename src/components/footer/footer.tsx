import { component$ } from "@builder.io/qwik";



export const Footer = component$(() => {
  return (
    <footer class="bg-[var(--color-brand)] text-center py-6 border border-black">

        <div>
            <strong>All Rights Reserved</strong> - Oh Lord Matt Greoning - 1989-2023
        </div>
        <small>
            This app was by Miriam Pawlega
        </small>

    </footer>
  )
});
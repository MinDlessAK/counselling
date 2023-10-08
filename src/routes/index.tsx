
import Img from '~/media/img1.png?jsx';import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <>
    <div class="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 min-h-screen w-full  flex flex-col gap-2 p-5 pr-10 pl-10 ">

      <div class="flex justify-between">
        <div class="text-white font-extrabold text-3xl cursor-pointer">Future Joy</div>
        <div class="flex gap-4 ">
          <div class="text-white hover:underline hover:underline-offset-8 cursor-pointer text-xl">Crouse</div>
          <div class="text-white hover:underline hover:underline-offset-8 cursor-pointer text-xl">Opportunities</div>
          <div class="text-white hover:underline hover:underline-offset-8 cursor-pointer text-xl">Community</div>
        </div>
      </div>

      <div class=" flex justify-center gap-56 mt-28">
        <div class="mt-10 flex flex-col gap-4">
          <div class="text-white font-bold text-3xl">We Help Grow Your Passion</div>
          <div class="text-white ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          <div class="flex gap-5 pt-5">
            <Link href='/assesment' class="bg-blue-500 cursor-pointer p-3 rounded-2xl hover:scale-110 transition-all duration-300 text-white">Acessesment</Link>
            <div class="text-white cursor-pointer flex items-center">Watch Video</div>
          </div>
        </div>
        <Img class="h-96 w-2/5 rounded-lg "></Img >
      </div>
      
    </div>


    
    </>
  );
});



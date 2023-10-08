import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {
    return (

    <>
    <div class="bg-blue-100 p-6">
<div class="flex justify-center text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Assessment</div>
<div class="flex flex-col gap-2 max-w-screen-lg mx-auto overflow-y-auto h-screen">


 <div class="bg-blue-100 p-6">
     <div class="bg-white rounded-lg shadow-md p-6">
         <h1 class="text-2xl font-semibold mb-4">Student Assessment</h1>
         <form>
         <h1 class="font-bold">  Intrinsic Motivation </h1> 
     <div class="mb-4">
         <p class="mb-2">1. What activities make you the happiest?</p>
         <label class="block">
             <input type="radio" name="motivation" value="a" class="mr-2" />
             Playing video games
         </label>
         <label class="block">
             <input type="radio" name="motivation" value="b" class="mr-2" />
             Reading books
         </label>
         <label class="block">
             <input type="radio" name="motivation" value="c" class="mr-2" />
             Helping others
         </label>
         <label class="block">
             <input type="radio" name="motivation" value="d" class="mr-2" />
             Watching TV
         </label>
     </div>

     <h1  class="font-bold">  Strengths and Talents </h1>
     <div class="mb-4">
         <p class="mb-2">2. What do you think you're really good at?</p>
         <label class="block">
             <input type="radio" name="strengths" value="a" class="mr-2" />
             Math
         </label>
         <label class="block">
             <input type="radio" name="strengths" value="b" class="mr-2" />
             Drawing or art
         </label>
         <label class="block">
             <input type="radio" name="strengths" value="c" class="mr-2" />
             Sports
         </label>
         <label class="block">
             <input type="radio" name="strengths" value="d" class="mr-2" />
             Playing an instrument
         </label>
     </div>

     <h1  class="font-bold">  Favorite Learning Experiences </h1>
     <div class="mb-4">
         <p class="mb-2">3. What topic or subject do you find most interesting in school?</p>
         <label class="block">
             <input type="radio" name="learning" value="a" class="mr-2" />
             Science
         </label>
         <label class="block">
             <input type="radio" name="learning" value="b" class="mr-2" />
             History
         </label>
         <label class="block">
             <input type="radio" name="learning" value="c" class="mr-2" />
             Music
         </label>
         <label class="block">
             <input type="radio" name="learning" value="d" class="mr-2" />
             Physical Education
         </label>
     </div>

     <h1  class="font-bold"> Dream Job or Activity</h1>
     <div class="mb-4">
         <p class="mb-2">4. If you could do any job or activity when you grow up, what would it be?</p>
         <label class="block">
             <input type="radio" class="mr-2" />
             Scientist
         </label>
         <label class="block">
             <input type="radio"  class="mr-2" />
             Artist
         </label>
         <label class="block">
             <input type="radio"  class="mr-2" />
             Athlete
         </label>
         <label class="block">
             <input type="radio"  class="mr-2" />
             Actor/Actress
         </label>
     </div>

  <h1  class="font-bold"> Impact and Values </h1>
     <div class="mb-4">
         <p class="mb-2">5. Is there a problem in the world that you care about and want to help solve?</p>
         <label class="block">
             <input type="radio" name="impact" value="a" class="mr-2" />
             Protecting the environment
         </label>
         <label class="block">
             <input type="radio" name="impact" value="b" class="mr-2" />
             Helping sick people
         </label>
         <label class="block">
             <input type="radio" name="impact" value="c" class="mr-2" />
             Making cool inventions
         </label>
         <label class="block">
             <input type="radio" name="impact" value="d" class="mr-2" />
             Being famous
         </label>
     </div>

    
            

             <div class="text-center">
                 <Link  href="/thnk"  class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit Answers</Link>
             </div>
         </form>
     </div>
 </div>
</div>
</div>
      
    </>
  );
});

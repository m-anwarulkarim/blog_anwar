import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "🩸 নীরব বিশ্ব",
      image: "./images/1.jpeg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      news: "তাদের ভোর শুরু হয় ভয়ের মধ্যে, রাত শেষ হয় রক্তের গন্ধে। যেখানে শিশুরা পুতুলের বদলে বোমা চিনে বড় হচ্ছে, সেখানে আমরা উৎসব করি অজুহাতে। এ পৃথিবী আজও দাঁড়িয়ে আছে, কারণ কিছু মানুষ এখনো অন্যের কষ্টে কাঁদে। কিন্তু যারা নীরব — তারা কি সত্যিই জীবিত?",
    },
    {
      title: "🌙 ধোঁয়াটে নিশ্বাস",
      image: "./images/p.jpeg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      news: "ফিলিস্তিনের আকাশ আজো ধোঁয়ায় কালো, শিশুর কান্না ঢেকে দেয় বন্দুকের গর্জন। ঘরবাড়ি মাটির সাথে মিশে গেছে, অথচ আমরা নরম বিছানায় ঘুমাই নিশ্চিন্তে। এক জাতি তাদের অস্তিত্বের জন্য লড়ছে, আর আমরা সোশ্যাল মিডিয়ার সীমিত সহানুভূতিতে হারিয়ে গেছি। এই নীরবতা একদিন ইতিহাসের পাতায় আমাদের অপরাধ হিসেবেই লেখা থাকবে।",
    },
    {
      title: "🕊 ইতিহাসের সাক্ষী — ফিলিস্তিন",
      image: "./images/map.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      news: "ফিলিস্তিন, যে ভূমি নবীদের পদচিহ্নে পবিত্র হয়েছে, আজও ইতিহাসের সাক্ষী। এখানেই প্রথম আযান প্রতিধ্বনিত হয়েছিল, এখানেই বহু জাতি শান্তি খুঁজেছিল। কিন্তু সময়ের নির্মমতা সেই ভূমিকে পরিণত করেছে ক্ষতের মানচিত্রে। যেখানে একদিন শান্তির বাতাস বইত, এখন সেখানে ধোঁয়া আর কান্না ভাসে।",
    },
    {
      title: "🔥 ধ্বংসের ছায়ায় বর্তমান ফিলিস্তিন",
      image: "./images/palestine-3.webp",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      news: "আজ ফিলিস্তিন মানে ধ্বংস, ধুলো, আর রক্তের গন্ধ। শিশুরা স্কুলে নয়, আশ্রয় খোঁজে ধ্বংসস্তূপে। প্রতিটি মা জানে, পরের ভোর হয়তো শেষ দেখা হবে। কিন্তু তবুও তারা দাঁড়িয়ে থাকে—কারণ তাদের বিশ্বাস এখনো জীবিত।",
    },
    {
      title: "🌙 এক জাতির আকুতি",
      image: "./images/ummah.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      news: "ফিলিস্তিনের প্রতিটি চোখ আজ আকাশের দিকে তাকানো—প্রশ্ন, প্রার্থনা আর আশা নিয়ে। তাদের কান্না কোনো দুর্বলতার নয়, বরং ধৈর্যের প্রতীক। তারা চায় না দয়া, চায় ন্যায়। বিশ্ব নীরব থাকলেও, তাদের আকুতি পৌঁছে যায় আকাশের মালিকের দরজায়।",
    },
    {
      title: "🕊️ ফিলিস্তিনি  মায়ের কান্না",
      image: "./images/palestine-mathor.webp",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      news: "রাতের নিস্তব্ধতা ভেঙে যখন বোমার শব্দ আকাশ কাঁপায়, তখন এক মা সন্তানের বুক জড়িয়ে ধরে—চোখে নেই ঘুম, নেই শান্তি, আছে শুধু প্রহরার ব্যথা। এই মায়েরা কাঁদেন না শুধু সন্তানের জন্য, কাঁদেন এক জাতির ইতিহাসের জন্য। তারা জানেন—বিশ্ব হয়তো নীরব, কিন্তু আকাশের মালিক নিশ্চয়ই শুনছেন। ধ্বংসস্তূপের মধ্যেও তারা দাঁড়িয়ে আছেন অবিচল ভালোবাসা ও অটল বিশ্বাস নিয়ে। তারা ভাঙে না—তারা ফিলিস্তিনের আসল শক্তি। ❤",
    },
    {
      title: "🕊 “নিঃশব্দ শিশুরা”",
      image: "./images/palestine-child.webp",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      news: "ফিলিস্তিনের বাচ্চারা এখন আর খেলতে শেখে না—তারা শেখে বাঁচতে। তাদের হাতে পুতুল নেই, আছে ধুলো আর ধ্বংসের ইটপাথর। তাদের স্বপ্নে রঙ নেই, আছে সাইরেনের শব্দ আর ধোঁয়ার ছায়া। তারা শুধু চায় এক টুকরো শান্ত আকাশ, যেখানে আর কোনো বোমা পড়বে না, যেখানে তারা “মা” বলে ডেকে ঘুমোতে পারবে নির্ভয়ে। তাদের ছোট্ট চোখের জল যেন এক নিঃশব্দ আবেদন— “হে বিশ্ব, আমাদেরও বাঁচতে দাও।”",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-600 md:text-4xl dark:text-red-600">
        “ফিলিস্তিন কাঁদছে রক্তে, অথচ মুসলিম বিশ্ব ডুবে আছে আরাম আয়েশে।”
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
          <p className="my-3 leading-8">{item.news}</p>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

'use client'
import Image from "next/image";
import { profile } from "./lib";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-[hsl(0,0%,8%)] h-screen">
      <section className="flex flex-col items-center justify-center text-white bg-[hsl(0,0%,12%)] rounded-md font-inter">
        <Image width={150} height={150} className="rounded-full flex my-10" src="/avatar-jessica.jpeg" alt="profile_picture" />
        <h1 className="text-[hsl(0,0%,100%)] text-3xl mb-2"><strong>{profile.name}</strong></h1>
        <h3 className="text-[hsl(75,94%,57%)] mb-6">{profile.location}</h3>
        <p>"{profile.description}"</p>
        <div className="px-8 my-5 w-96">
          {profile.social_medias.map(item => (
            <button className="w-full bg-[hsl(0,0%,20%)] rounded-md p-2 my-2 hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,20%)] py-3"
            key={item.id}
            onClick={() => window.open(item.link, "_blank")}
            >
              <strong>{item.name}</strong>
            </button>
          ))}        
        </div>
      </section>
    </main>
  );
}

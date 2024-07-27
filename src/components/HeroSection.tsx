import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full flex flex-col rounded-md items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 text-center">
      <div className="p-4 relative z-10 w-full  text-center font-light">
        <h1>Master the art of music</h1>
        <p>
          Drive into our comprehensive music courses and transform your musical
          journey today.Whether you're a begineer or looking to refine your
          skills,join us to unlock your true potentail
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>Explore courses</Link>
        </div>
      </div>
    </div>
  );
}

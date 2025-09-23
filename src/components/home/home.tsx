import { Button } from "@/components/ui/button";

export function HomeContent() {
  const resumeUrl =
    "https://dyyvenrwmjmouefxecwu.supabase.co/storage/v1/object/public/personal-portfolio-bucket/SantiagoGarciaResume.pdf";

  return (
    <div className="flex flex-col size-full justify-center md:items-start">
      <span>Hi, my name is</span>
      <span className="font-bold text-xl sm:text-3xl md:text-6xl mt-5">
        Santiago García
      </span>
      <span className="font-bold text-base sm:text-3xl mt-5 opacity-50">
        I am an AI engineer. I build things with Artificial Intelligence, focusing
        on Large Language Models (LLMs).<br></br> I also craft beautiful, fast, and
        modern websites.<br></br>
        !Like the one you&apos;re visiting now!
      </span>

      <Button
        variant="outline"
        size="lg"
        className="cursor-pointer whitespace-normal text-xs md:text-base mt-5 p-1"
        asChild
      >
        <a href={resumeUrl} download target="_blank" rel="noreferrer">
          Check out my resume
        </a>
      </Button>
    </div>
  );
}

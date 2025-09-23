import * as React from "react";
import { Link2 } from "lucide-react";

import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function CarouselProjects() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <p className="mb-10 text-xl font-bold">Stuff that I have built</p>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-80 overflow-auto">
                <CardHeader>
                  <CardTitle>
                    <Link
                      href="#"
                      target="_blank"
                      className="cursor-pointer hover:underline"
                    >
                      AI-Powered Data Visualization Assistant <Link2 />
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    A web application built with Next.js for the frontend and
                    Python FastAPI for the backend. Users upload datasets in
                    various formats, and AI generates stakeholder profiles,
                    visualization objectives, and editable charts via natural
                    language processing. Source code for generated charts is
                    accessible.
                  </CardDescription>
                </CardHeader>
                {/* <CardContent>
                  <span className="text-2xl font-semibold">
                    [Placeholder for Screenshot]
                  </span>
                </CardContent> */}
                <CardFooter>
                  <p>Tech: Next.js, FastAPI, AI Integration</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-80 overflow-auto">
                <CardHeader>
                  <CardTitle>
                    <Link
                      href="https://huggingface.co/datasets/santyzenith/LOPD_Ecuador"
                      target="_blank"
                      className="cursor-pointer hover:underline"
                    >
                      First Legal LLMs for Ecuador's Data Protection Law
                      <Link2 />
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Developed the inaugural fine-tuned LLMs specialized in
                    Ecuador&apos;s Organic Law on Personal Data Protection (LOPD)
                    using Python&apos;s Unsloth library. Includes benchmarks for
                    evaluating LLMs on LOPD compliance. Dataset used for
                    training is publicly available.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <p>Tech: Unsloth, Fine-Tuning, Hugging Face</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-80 overflow-auto">
                <CardHeader>
                  <CardTitle>
                    <Link
                      href="https://huggingface.co/UDA-LIDI/barto_emergency_multi_purpose"
                      target="_blank"
                      className="cursor-pointer hover:underline"
                    >
                      Multi-Task Fine-Tuned BART for Emergency Calls
                      <Link2 />
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    A fine-tuned BARTO (bart-base-spanish) model for handling
                    transcribed emergency calls. Supports tasks like
                    summarization (&quot;Resume la emergencia: &quot;), keyword extraction
                    (&quot;Extrae las palabras clave de la emergencia: &quot;),
                    single-word representation (&quot;La palabra que mejor representa
                    la emergencia es: &quot;), and classification (&quot;Clasifica la
                    emergencia en [CLAVE ROJA, CLAVE NARANJA, CLAVE AMARILLA,
                    CLAVE VERDE]: &quot;).
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <p>Tech: Transformers, BART, Fine-Tuning</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-80 overflow-auto">
                <CardHeader>
                  <CardTitle>
                    <Link
                      href="https://huggingface.co/UDA-LIDI/roberta_emergency_classification"
                      target="_blank"
                      className="cursor-pointer hover:underline"
                    >
                      Emergency Call Classifier with Bertin-RoBERTa
                      <Link2 />
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    A fine-tuned bertin-roberta-base-spanish model for
                    classifying transcribed emergency calls into three urgency
                    levels: [CLAVE ROJA, CLAVE NARANJA, CLAVE AMARILLA].
                    Designed for efficient triage in emergency response systems.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <p>Tech: Transformers, RoBERTa, Fine-Tuning</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-80 overflow-auto">
                <CardHeader>
                  <CardTitle>
                    <Link
                      href="https://huggingface.co/UDA-LIDI/barto_emergency_keys_summarize"
                      target="_blank"
                      className="cursor-pointer hover:underline"
                    >
                      Keyword Extractor for Emergency Transcripts
                      <Link2 />
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    A fine-tuned bart-base-spanish model specialized in
                    extracting keywords or context from transcribed emergency
                    calls. Use the prefix &quot;summarize: &quot; before input text to
                    generate responses.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <p>Tech: Transformers, BART, Fine-Tuning</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

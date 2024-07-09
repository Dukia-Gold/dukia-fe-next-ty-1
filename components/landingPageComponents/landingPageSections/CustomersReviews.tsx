import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

interface reviewsArrayProps {
  key: number;
  name: string;
  review: string;
}

const CustomerReviews = () => {
  const reviewsArray: reviewsArrayProps[] = [
    {
      key: 1,
      name: "Abdullah Yusuf",
      review:
        "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
    },
    {
      key: 2,
      name: "Bolaji Anifowoshe",
      review:
        "I was impressed with the level of security and privacy measures the trading platform had. I felt comfortable trading with them with a solid assurance that my transactions were safe and secure.",
    },
    {
      key: 3,
      name: "Abdullateef Olushola",
      review:
        "Their customer service team is top-notch and always available to answer any questions I have on gold investment. Now, I feel like a pro!",
    },
    {
      key: 4,
      name: "Wale Soneye",
      review:
        "I had a delightful experience using the Dukia Gold Trading Platform to make my first gold purchase. It was user-friendly and easy to navigate. I highly recommend this platform to anyone interested in investing in gold.",
    },
  ];

  return (
    <section id="customer-review" className="px-2 md:px-8 py-12 bg-dukiaGrey dark:bg-dukiaDark text-dukiaBlue dark:text-white flex flex-col gap-14 items-center">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-bold text-[1.75rem]">Customers Reviews</p>
        <p>
          Look at what various satisfied customers have to say about Dukia Gold!
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full px-11 "
      >
        <CarouselContent>
          {reviewsArray.map((review) => (
            <CarouselItem
              key={review.key}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="dark:bg-dukiaBlue rounded-2xl md:h-72">
                <CardContent className="flex flex-col pt-5 aspect-video gap-3 justify-between w-full h-full text-dukiaBlue dark:text-white text-sm">
                  <div>
                    <div className="flex justify-end"><Quote size={14} color="#111827" /></div>
                    <blockquote className="italic">{review.review}</blockquote>
                  </div>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute text-white bg-dukiaBlue rounded-r-[50%] w-11 h-14 top-1/2 left-0" />
        <CarouselNext className="absolute text-white bg-dukiaBlue rounded-l-[50%] w-11 h-14 top-1/2 right-0" />
      </Carousel>
    </section>
  );
};

export default CustomerReviews;

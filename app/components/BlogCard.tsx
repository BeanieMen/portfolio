import { urlFor } from "@/lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { simpleBlogCard } from "@/lib/interface";

interface Props {
    post: simpleBlogCard;
    className?: string; // Accepts optional className
}

export default function BlogCard({ post, className }: Props) {
    
    return (
        <div className={className}>
            <Card className="w-[400px] relative flex flex-col bg-white dark:bg-black border border-stone-900 h-[425px]">
                <div>
                    <Image
                        src={urlFor(post.titleImage).url()}
                        alt="image"
                        width={400}
                        height={400}
                        className="rounded-t-lg h-[250px] object-cover flex justify-center mx-auto"
                    />
                </div>
                <div className="flex flex-grow justify-center items-center">
                    <CardContent className="flex flex-col items-center">
                        <div>
                            <h3 className="text-xl line-clamp-2 font-bold">{post.title}</h3>
                            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                                {post.smallDescription}
                            </p>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}

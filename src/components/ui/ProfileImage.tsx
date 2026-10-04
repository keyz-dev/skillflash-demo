import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type ProfileImageProps = {
  src: ImageProps["src"];
  alt: string;
  sizes: string;
  className?: string;
};

export function ProfileImage({
  src,
  alt,
  sizes,
  className,
}: ProfileImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-full",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
